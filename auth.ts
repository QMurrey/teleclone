import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectToMongoDB } from "./lib/db"
import User from "./models/userModel";


export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId:process.env.AUTH_GITHUB_ID,
      clientSecret:process.env.AUTH_GITHUB_SECRET
    })
  ],
  secret:process.env.AUTH_SECRET,
  callbacks: {
    // Чтобы получать ID, добавляем отдельный колбэк
    async session({session}) {
      try {
        await connectToMongoDB();
        if (session.user) {
          const user = await User.findOne({email: session.user.email});
          if (user) {
            session.user._id = user._id;
            return session;
          } else {
            throw new Error('Пользователь не был найден')
          }
        } else {
          throw new Error('Ошибка в сессии');
        }
      } catch (error) {
        console.log('Ошибка при поиске пользователя:\n', error);
        throw new Error('Ошибка в сессии');
      }
    },
    async signIn({account, profile}) {
      if (account?.provider === 'github') {
        await connectToMongoDB();

        try {
          const user = await User.findOne({email:profile?.email});

          // Регаем пользователя, если таковой не найден
          if (!user) {
            const newUser = await User.create({
              username: profile?.login,
              email: profile?.email,
              fullname: profile?.name,
              avatar: profile?.avatar_url
            })

            await newUser.save();
          }
          console.log('Вход пользователя успешен');
          return true; // Индикатор успешного входа
        } catch (error:any) {
          console.log('Вход не удался =(\n', error.message);
          return false; // Индикатор неуспешного входа
        }
      }

      console.log('Эм, у всех клонов есть GitHub. Вы что, не клон?')
      return false;
    }
  }
})