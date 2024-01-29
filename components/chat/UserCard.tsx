import { Avatar, AvatarImage } from "../ui/Avatar";

const UserCard = () => {
  function randomClone() {
    return '' + Math.floor(Math.random() * (1000000 - 10000 + 1) + 10000)
  }

	return (
		<div
			className={`flex items-center gap-2 border-b border-b-sigColorBgBorder p-1 hover:bg-sigBackgroundFeedHover cursor-pointer `}
		>
			<Avatar className='cursor-pointer hover:bg-sigBackgroundSecondaryHover'>
				<AvatarImage src={"./clone-placeholder.jpg"}/>
			</Avatar>
			<span>Клон №{randomClone()}</span>
		</div>
	);
};
export default UserCard;
