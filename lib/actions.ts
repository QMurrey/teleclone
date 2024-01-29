'use server';
import { signIn, signOut } from "@/auth";

// Регистрация / вход в систему
export async function authAction() {
  // Для тестирования error.tsx файла в app/(auth) директории
  // throw new Error("Подключение к GitHub не удалось");
  try {
    await signIn('github');
  } catch (error:any) {
    // По-умолчанию вызов функции сверху происходит через next redirect,
    // внутренний код которого работает посредством ошибки (сам редирект внутри ошибки)
    // Чтобы избежать остановки срабатывания, "запускаем" ошибку, если она === редирект
    if (error.message === 'NEXT_REDIRECT') {
      throw error;
    }
    return error.message;
  }
}


// Выход из системы
export async function logOutAction() {
  await signOut();
}