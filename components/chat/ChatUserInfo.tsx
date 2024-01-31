import { Avatar, AvatarImage } from "@/components/ui/Avatar";

const ChatUserInfo = () => {
	const userFullName = "Клон №1";
	const userAvatar = "";

	return (
		<div className='cursor-pointer bg-sigButtonSecondary hover:bg-sigButtonSecondaryHover rounded-full flex gap-2 items-center py-1 px-3 text-white font-semibold'>
			<Avatar className='h-8 w-8 rounded-full flex items-center justify-center'>
				<AvatarImage src={userAvatar || "/logo.svg"} />
			</Avatar>

			<span>{userFullName}</span>
		</div>
	);
};
export default ChatUserInfo;
