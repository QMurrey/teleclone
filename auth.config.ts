import { Session } from "next-auth";
import { NextRequest } from "next/server";

export const AuthConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [], // Оставляем пустым, т.к. провайдеры уже указаны в auth.ts
  callbacks: {
    async authorized({auth, request}:{auth:Session|null, request:NextRequest}) {
      const user = auth?.user;
      
      const isVisitingChatPage = request.nextUrl.pathname.startsWith("/chat");
      const isVisitingAuthPage = request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/signup");

      if (!user && isVisitingChatPage) {
        console.log('Клон попытался войти в меня даже не представившись! Экая дерзость!\n'
          +'Перенаправляю в /login');
        return false;
      }
      if (user && isVisitingAuthPage) {
        console.log('Клон вошёл в меня, перенаправляю на /chat');
        return Response.redirect(new URL("/chat", request.nextUrl))
      }

      // Этот вывод срабатывает на каждый запрос к серверу,
      // иными словами: при загрузке каждого файла.
      // Если необходимо отследить, то расскоменти
      // if (!user) {
      //   console.log('Незарегестрированный пользователь заходит в', request.nextUrl.pathname);
      // } else {
      //   console.log('Зарегестрированный пользователь заходит в', request.nextUrl.pathname);
      // }

      return true; // Если оба условия не прошли, то позволяем пользователю двигаться дальше.
    }
  }
}