import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["cyrillic"], weight: '400' });

export const metadata: Metadata = {
  title: "TeleClone — месенеджер для настоящих клонов",
  description: "Клоны — идеальная аудитория для обмена мемами! Нельзя ошибиться в том, что понравится твоим клонам, ведь оно уже понравилось тебе! С этими мыслями и был создан Teleclone! Осталось только дождаться появления клонов и проект обязательно выстрелит",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
