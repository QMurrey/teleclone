import ChatCamera from "@/components/chat/ChatCamera";
import Image from "next/image";

export default function ChatRootPage() {
	return (
		<main className='flex-grow bg-sigMain items-center flex px-2'>
			<div
				className='bg-chat-mobile xl:bg-chat bg-center xl:bg-right-top bg-cover
				rounded-3xl w-full h-[96%] flex items-center justify-start px-6'
			>
				<ChatCamera />
			</div>
		</main>
	);
}
