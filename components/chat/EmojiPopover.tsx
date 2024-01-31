import { Button } from "@/components/ui/Button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";

import { SmilePlus } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

// Гифки можно найти в телеге по тегу Darth Vader: https://t.me/addstickers/ComeToTheDarkSide
const emojis = [
	{ src: "/emojis/awesome.png", alt: "Супер!" },
	{ src: "/emojis/cometothedarkside.png", alt: "Переходи на тёмную сторону!" },
	{ src: "/emojis/cry.png", alt: "Плачу" },
	{ src: "/emojis/damn.png", alt: "Чёрт" },
	{ src: "/emojis/damnyou.png", alt: "Да пошёл ты" },
	{ src: "/emojis/eat.png", alt: "Хаваю" },
	{ src: "/emojis/snickering.png", alt: "Хи-хи-хи" },
	{ src: "/emojis/ifeelforyou.png", alt: "Сочувствую" },
	{ src: "/emojis/facepalm.png", alt: "Рукалицо" },
	{ src: "/emojis/fuckyou.png", alt: "Пошёл ты" },
	{ src: "/emojis/hahaclassic.png", alt: "Ха-ха, классика" },
	{ src: "/emojis/hate.png", alt: "Ненависть" },
	{ src: "/emojis/hi.png", alt: "Ку!" },
	{ src: "/emojis/honorthyfather.png", alt: "Почитай отца своего" },
	{ src: "/emojis/impotent.png", alt: "Не стоит" },
	{ src: "/emojis/imreadytofight.png", alt: "Я тя придушу ща!" },
	{ src: "/emojis/itsfine.png", alt: "Всё норм" },
	{ src: "/emojis/lol.png", alt: "Ржака" },
	{ src: "/emojis/love.png", alt: "Люблю" },
	{ src: "/emojis/merrycristmas.png", alt: "Счастливого Рождества!" },
	{ src: "/emojis/nooo.png", alt: "Нееет!" },
	{ src: "/emojis/ohno.png", alt: "О нет" },
	{ src: "/emojis/sendingships.png", alt: "Высылаю корабли" },
	{ src: "/emojis/shrug.png", alt: "Хз" },
	{ src: "/emojis/slap.png", alt: "Леща!" },
	{ src: "/emojis/sleep.png", alt: "Сплю" },
	{ src: "/emojis/thinking.png", alt: "Думаю..." },
	{ src: "/emojis/thinking2.png", alt: "Думаю..." },
	{ src: "/emojis/thunbup.png", alt: "Лайк" },
	{ src: "/emojis/what.png", alt: "Что?.." },
];

export function EmojiPopover() {
	const popoverRef = useRef<HTMLButtonElement>(null);

	return (
		<Popover>
			<PopoverTrigger asChild ref={popoverRef}>
				<Button
					ref={popoverRef}
					className='bg-transparent hover:bg-transparent max-w-min rounded-full h-11 w-11'
				>
					<SmilePlus className='scale-150' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-80 bg-sigMain border border-sigColorBgBorder'>
				<div className='flex gap-4 flex-wrap items-center max-h-72 overflow-y-scroll'>
					{emojis.map((emoji) => (
						<Emoji key={emoji.src} {...emoji} />
					))}
				</div>
			</PopoverContent>
		</Popover>
	);
}

const Emoji = ({ src, alt }: { src: string; alt: string }) => (
	<div className='cursor-pointer'>
		<Image src={src} width={70} height={70} alt={alt} />
	</div>
);
