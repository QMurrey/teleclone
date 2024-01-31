"use client";
import Image from "next/image";
import { useRef } from "react";

// Тестовые сообщения
const messages = [
	{
		_id: "1",
		content: "Привеу",
		sender: { _id: "1", fullName: "Клон №111" },
		messageType: "text",
	},
	{
		_id: "2",
		content: "Здароу!",
		sender: { _id: "2", fullName: "Клон №112" },
		messageType: "text",
	},
	{
		_id: "3",
		content: "Чё как?",
		sender: { _id: "1", fullName: "Клон №111" },
		messageType: "text",
	},
	{
		_id: "4",
		content: "Лечу стрелять мимо джедаев, а ты?",
		sender: { _id: "2", fullName: "Клон №112" },
		messageType: "text",
	},
	{
		_id: "5",
		content: "Я тоже, мы же в одном шаттле, балда!",
		sender: { _id: "1", fullName: "Клон №111" },
		messageType: "text",
	},
	{
		_id: "6",
		content: "Точняк...",
		sender: { _id: "2", fullName: "Клон №112" },
		messageType: "text",
	},
];

const ChatMessages = () => {
	const lastMsgRef = useRef<HTMLDivElement>(null);
	const session = { user: { _id: "1" } };

	return (
		<>
			{messages.map((message, idx) => {
				const amISender = message.sender._id === session?.user?._id;
				const senderFullName = message.sender.fullName.toUpperCase();
				const isMessageImage = message.messageType === "image";
				const isPrevMessageFromSameSender = idx > 0 && messages[idx - 1].sender._id === message.sender._id;

				return (
					<div key={message._id} className='w-full' ref={lastMsgRef}>
						{!isPrevMessageFromSameSender && (
							<p
								className={`font-bold mt-2 text-xs ${
									amISender ? "text-sigSnapImg" : "text-sigSnapChat"
								}`}
							>
								{amISender ? "ME" : senderFullName}
							</p>
						)}
						<div className={`border-l-2 ${amISender ? "border-l-sigSnapImg" : "border-l-sigSnapChat"}`}>
							<div className={`flex items-center w-1/2 p-2 rounded-sm `}>
								{isMessageImage ? (
									<div className='relative'>
										<Image
											src={message.content}
											width={200}
											height={200}
											className='h-auto w-auto object-cover cursor-pointer'
											alt='Image'
										/>
									</div>
								) : (
									<p className='text-sm'>{message.content}</p>
								)}
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
export default ChatMessages;
