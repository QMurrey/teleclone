import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Функция объединения классов
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Функция, конвертирующая содержимое файла в изображение base64
export function readFileAsDataURL(file:File|Blob):Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      }
    }
    reader.readAsDataURL(file);
  })
}

// Форматирование даты
export const formatDate = (inputDate: Date): string => {
	const date = new Date(inputDate);
	const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
	const formattedDate: string = date.toLocaleDateString("ru-RU", options);
	return formattedDate;
};