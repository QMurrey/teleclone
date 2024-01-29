'use client'; // Используем рендер на клиенте, чтобы показывать спинер во время загрузки
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { authAction } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import Loader from "@/components/ui/Loader/Loader";

export default function LoginCard() {
	const [errorMessage, dispatch] = useFormState(authAction, '');
	
	return (
		<>
			<form action={dispatch} className='space-y-4'>
				<LoginButton/>
			</form>
			<div className='mt-4 text-center text-sm'>
				<span className="block max-w-sm">Впервые в TeleClone?<br/>У нас легко зарегистрироваться!<br/>Нужен только штрих-код с затылка или GitHub!</span>
				<Link className='text-blue-500 hover:underline text-[13px] mr-1' href='/signup'>
					Регистрация
				</Link>
				{errorMessage ? <p className="text-red-800">{errorMessage}</p> : null }
			</div>
		</>
	);
}

function LoginButton() {
	const {pending} = useFormStatus();

	return (
		<>
		{pending
			?
				<Loader/>
			:
				<Button className='flex gap-2 bg-slate-950 w-auto mx-auto hover:bg-slate-600' disabled={pending}>
					<Image src={"/github.svg"} width={20} height={20} alt='Github logo' /> Войти через GitHub
				</Button>
		}
		</>
	);
}
