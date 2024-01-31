import Skeleton from "@/components/ui/Skeleton";

export function ChatsSkeleton() {
	return (
		<div className='flex flex-col px-3 gap-3'>
			{Array.from({ length: 5 }).map((_, i) => (
				<div className='flex items-center space-x-4' key={i}>
					<Skeleton className='h-12 w-12 rounded-full bg-[#ffffff22]'/>
					<div className='space-y-2'>
						<Skeleton className='h-4 w-[250px] bg-[#ffffff22]'/>
						<Skeleton className='h-4 w-[200px] bg-[#ffffff22]'/>
					</div>
				</div>
			))}
		</div>
	);
}
