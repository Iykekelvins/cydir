import { cn } from '@/utils';

interface ButtonProps {
	children: React.ReactNode;
	bg: 'lemon' | 'blue';
	className?: string;
	onClick?: () => void;
}

export default function Button({ children, bg, onClick, className }: ButtonProps) {
	return (
		<button
			className={cn(
				'flex items-center justify-center text-base font-medium',
				`border border-solid rounded-full py-[max(1.1rem,14px)] 
				px-[max(1.25rem,16px)] relative overflow-hidden`,
				bg === 'lemon' &&
					`bg-lemon text-[#0A182D] border-[#EFEFEF]
					before:bg-blue before:absolute before:bottom-0
					before:left-0 before:w-full before:h-0
					before:rounded-full before:pointer-events-none
					before:transition-all before:duration-300
					before:ease-in-out hover:text-lemon
					transition-all duration-300 ease-in-out
					hover:before:h-full	hover:scale-95
				`,
				bg === 'blue' &&
					`bg-blue text-white border-[#192A4D99]
					transition-all duration-300 ease-in-out
					before:bg-[#0A182D] before:absolute before:bottom-0
					before:left-0 before:w-full before:h-0
					before:rounded-full before:pointer-events-none
					before:transition-all before:duration-300
					before:ease-in-out hover:text-white
					hover:before:h-full	hover:scale-95
				`,
				className
			)}
			onClick={onClick}>
			<span className='z-2 relative'>{children}</span>
		</button>
	);
}
