'use client'; // Используем рендер на клиенте, чтобы показывать спинер во время загрузки
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { authAction } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import Loader from "@/components/ui/Loader/Loader";

export default function SignupCard() {
	const [errorMessage, dispatch] = useFormState(authAction, '');

	return (
		<>
			<form action={dispatch} className='space-y-4'>
				<SignUpButton/>
			</form>
			<div className='mt-4 text-center text-[13px]'>
				<span>Уже есть аккаунт? </span>
				<Link className='text-blue-500 hover:underline text-[13px] mr-1' href='/login'>
					Войти
				</Link>
			</div>
			{errorMessage ? <p className="text-red-800">{errorMessage}</p> : null }
		</>
	);
}

function SignUpButton() {
	const {pending} = useFormStatus();

	return (
		<>
			{!pending
			?
				<Button className='flex gap-2 bg-slate-950 w-auto mx-auto  hover:bg-slate-600'>
					<Image src={"/github.svg"} width={20} height={20} alt='Github logo'/> Зарегистрироваться через GitHub
				</Button>
			:
				<Loader/>
			}
		</>
	);
}