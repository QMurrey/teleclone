// Использование квадратных скобок в адресе открывает динамическую адрессацию.
// В данном случае адрес будет передан в params.id

import ChatTopbar from "@/components/chat/ChatTopbar";
import ChatMessages from "@/components/chat/ChatMessages";
import SendMsgInput from "@/components/chat/SendMessageInput";

const ChatHistoryPage = async () => {
	return (
		<div className='bg-sigMain h-screen flex-[3_3_0%] flex flex-col px-4 text-white'>
			<ChatTopbar/>
			<div className='bg-sigSurface flex-1 overflow-y-auto rounded-xl my-4 border border-sigColorBgBorder  py-2 px-3 '>
				<div className='flex flex-col'>
					<ChatMessages/>
				</div>
			</div>
			<SendMsgInput/>
		</div>
	);
};
export default ChatHistoryPage;