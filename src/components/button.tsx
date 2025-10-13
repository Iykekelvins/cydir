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
				'border border-solid rounded-full py-[max(1.1rem,_14px)] px-[max(1.25rem,_16px)]',
				bg === 'lemon' && 'bg-lemon text-[#0A182D] border-[#EFEFEF]',
				className
			)}
			onClick={onClick}>
			{children}
		</button>
	);
}
