// Этот файл срабатывает перед любым реквестом и проверяет, нужно ли использовать AuthConfig
import NextAuth from "next-auth";
import { AuthConfig } from "./auth.config";

export default NextAuth(AuthConfig).auth;

// Добавляем небольшой конфиг, чтобы аутентификация работала на все пути, кроме тех, что включают
// "api," "_next/static," "_next/image," или имеют расширение .png
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}
