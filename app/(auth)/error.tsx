'use client';

export default function Error({error, reset}: {error: Error & {digest?: string}, reset: () => void}) {
  return (
    <main className='flex  flex-col items-center  justify-center'>
      <h2 className='text-center'>
        Загрузить страницу не удалось =|
        <br/>Сообщение об ошибке: {error.message}
      </h2>
      <button
        className='mt-4 rounded-md bg-sigSurface px-4 py-2 text-sm text-white transition-colors hover:bg-main'
        onClick={
          // Попытка исправления при помощи перерендера сегмента
          () => reset()
        }
      >
        Попытаться снова
      </button>
    </main>
  );
}

// Файл error срабатывает на любые ошибки в пределах элементов, которые находятся ниже него по иерархии.
// Принимает два пропса:
// error: нативный Error объект JS
// reset: функция, перерендеривающая элемент, в котором произошла ошибка