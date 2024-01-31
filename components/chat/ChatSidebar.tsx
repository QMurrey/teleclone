import { SearchIcon } from "lucide-react";
import { LogOutButton } from "../shared/LogOutButton";
import { Avatar, AvatarImage } from "../ui/Avatar";
import { Button } from "../ui/Button";
import Image from "next/image";
import { auth } from "@/auth";
import { Chats } from "./chats";
import { Suspense } from "react";
import { ChatsSkeleton } from "./ChatSkeletons";

const ChatSideBar = async () => {
	const session = await auth();
	return (
		<aside className='flex-[1_1_0%] max-w-96 flex flex-col bg-black text-white'>
			<div className='sticky top-0 bg-black z-50'>
				<div className='flex items-center justify-between p-4 border-b border-gray-800 '>
					<div className='relative'>
						<Avatar className='cursor-pointer hover:bg-sigBackgroundSecondaryHover'>
							<AvatarImage src={session?.user?.image!} />
						</Avatar>
					</div>
					<Button className='bg-sigButton hover:bg-sigButtonHover text-white rounded-full h-8 w-8 relative p-2'>
						<Image src={"/chat.svg"} fill alt='Chat icon' priority={true} />
					</Button>
					<LogOutButton/>
				</div>
				<div className='p-4 '>
					<div className=' text-gray-400 p-1  flex gap-2 rounded-full bg-sigSurface border border-sigColorBgBorder'>
						<SearchIcon className='text-gray-400 w-5' />
						<input
							className='bg-transparent border-none text-white placeholder-gray-400 focus:outline-none'
							placeholder='Search'
							type='text'
						/>
					</div>
				</div>
			</div>
			{/* Компонент Suspense из реакт подгружает placeholder (fallback), пока грузится элемент внутри */}
			<Suspense fallback={<ChatsSkeleton/>}>
				<Chats/>
			</Suspense>
		</aside>
	);
};
export default ChatSideBar;
