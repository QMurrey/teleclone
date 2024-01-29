import LoginCard from "@/components/special/login/LoginCard";

export default async function Login() {
	return (
		<>
			<h1 className='text-2xl font-bold text-center mb-2'>Войти в TeleClone</h1>
    	<LoginCard/>
		</>
	);
}