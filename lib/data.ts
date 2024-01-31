import Message, { IMessageDocument } from "@/models/messageModel";
import User, { IUserDocument } from "@/models/userModel"


export const getUsersForSidebar = async (authUserId:string) => {
  try {
    // Берём всех пользователей, кроме себя
    const allUsers:IUserDocument[] = await User.find({_id: {$ne: authUserId}}); // $ne = not equal
    
    // Получаем инфу о последних сообщениях от всех пользователей
    const usersInfo = await Promise.all(
      allUsers.map(async (user) => {
        const lastMessage:IMessageDocument | null = await Message.findOne({
          // Создаём выражение "найди сообщения, отправленные или полученные этим пользователем"
          $or: [
            {sender: user._id, receiver: authUserId},
            {receiver: authUserId, sender: user._id}
          ],
        })
        // Сортируем, чтобы получить последнее
        .sort({createdAt: -1})
        // Из сообщений мы получаем ключ+id (sender: 12).
        // Чтобы заменить это на ключ + значение (sender: Клон №1212) используем populate
        .populate('sender', 'fullname avatar _id')
        .populate('receiver', 'fullname avatar _id')
        .exec(); // Теперь, когда запрос составлен, выполняем его

        return {
          _id: user.id,
          participants: [user],
          lastMessage: lastMessage ? {
            ...lastMessage.toJSON(),
            sender: lastMessage.sender,
            receiver: lastMessage.receiver,
          } : null,
        }
      })
    )

    return usersInfo;
  } catch (error:any) {
    console.log('Получение информации о пользователях функции lib/data.ts/getUsersForSidebar не удалось\n',
      error.message);
    throw error;
  }
}