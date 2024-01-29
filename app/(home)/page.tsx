import { auth } from "@/auth";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col items-center bg-[#001] text-gray-200">
      <div className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto">
        <Navbar sessionIsActive={session ? true : false}/>
        <main className='flex flex-1 flex-col md:flex-row items-center justify-evenly px-8 mt-4'>
	        <div className='flex-1 md:text-left text-center h-full'>
            <h1 className='text-4xl md:text-5xl font-bold'>TeleClone!<br/>Месенджер для клонов!</h1>
            <p className='mt-4 text-xl font-semibold'>
              Обменивайтесь мемами и смешнявками со своими клонами! Им обязательно понравится!*
            </p>
            <p className='mt-2 text-xs opacity-50'>
              *Результат гарантирован только в первые недели после клонирования,
              т.к. затем клоны получают уникальный опыт и более не являются совершенными клонами.
              Для полноценного чувства собственного величия администрация TeleClone рекомендует заменять клонов каждую неделю.
            </p>
	        	<div className='mt-4'>
	        		<p className='mt-2 text-lg font-semibold'>
                Чего ждёшь, [несомненно оригинальная личность]? Все твои клоны уже вступили в ряды счастливых пользователей TeleClone!
              </p>
	        	</div>
	        	{!session ? (
	        		<Button
	        			asChild
	        			className='mt-4 bg-black flex items-center rounded-lg gap-2 mx-auto md:mx-0'
	        		>
	        			<Link href={"/login"} className='max-w-max'>
	        				<Image src='/logo.svg' width={20} height={20} alt='Teleclone logo' />
	        				Войти
	        			</Link>
	        		</Button>
	        	) : (
	        		<Button
	        			asChild
	        			className='mt-4 bg-black flex items-center rounded-lg gap-2 mx-auto md:mx-0'
	        		>
	        			<Link href={"/chat"} className='max-w-max'>
	        				<Image src='/logo.svg' width={20} height={20} alt='TeleClone logo' />
	        				Начать чат
	        			</Link>
	        		</Button>
	        	)}
	        </div>
	        <div className='flex-1 md:w-full md:flex justify-end'>
	        	<Image
              className="rounded-lg -rotate-3 max-w-md w-full"
              alt='TeleClone main image'
              width={1310}
              height={783}
              src='/home-bg.jpg'
							priority={true}
            />
	        </div>
        </main>
      </div>
    </div>
  );
}
