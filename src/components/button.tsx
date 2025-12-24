import Link from 'next/link';
import { cn } from '@/utils';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type CommonProps = {
	children: React.ReactNode;
	bg: 'lemon' | 'blue';
	className?: string;
};

type ButtonAsButton = CommonProps &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		as?: 'button';
		href?: never;
	};

type ButtonAsLink = CommonProps &
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		as: 'link';
		href: string;
	};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
	const { children, bg, className, as = 'button', ...rest } = props;

	const styles = cn(
		'flex items-center justify-center text-base font-medium',
		'border border-solid rounded-full py-[max(1.1rem,14px)] px-[max(1.25rem,16px)] relative overflow-hidden w-max',
		bg === 'lemon' &&
			`bg-lemon text-[#0A182D] border-[#EFEFEF]
			 before:bg-blue before:absolute before:bottom-0
			 before:left-0 before:w-full before:h-0
			 before:rounded-full before:pointer-events-none
			 before:transition-all before:duration-300
			 before:ease-in-out hover:text-lemon
			 transition-all duration-300 ease-in-out
			 hover:before:h-full hover:scale-95`,
		bg === 'blue' &&
			`bg-blue text-white border-[#192A4D99]
			 transition-all duration-300 ease-in-out
			 before:bg-[#0A182D] before:absolute before:bottom-0
			 before:left-0 before:w-full before:h-0
			 before:rounded-full before:pointer-events-none
			 before:transition-all before:duration-300
			 before:ease-in-out hover:text-white
			 hover:before:h-full hover:scale-95`,
		className
	);

	if (as === 'link') {
		const { href, ...linkProps } = rest as ButtonAsLink;

		return (
			<Link href={href} {...linkProps} className={styles}>
				<span className='relative z-2'>{children}</span>
			</Link>
		);
	}

	return (
		<button type='button' {...(rest as ButtonAsButton)} className={styles}>
			<span className='relative z-2'>{children}</span>
		</button>
	);
}
