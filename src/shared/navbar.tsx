import { NAV_LINKS } from '@/utils/mock';

import Button from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	return (
		<header className='fixed top-0 left-0 w-full z-40 px-gutter py-[max(1.7rem,_20px)]'>
			<nav className='flex items-center justify-between'>
				<Link href='/' aria-label='Go to homepage'>
					<Image src='/logo.svg' width={91.22} height={39} alt='Cydir Logo' />
				</Link>

				<ul className='hidden lg:flex items-center gap-[max(2.5rem,_32px)]'>
					{NAV_LINKS.map((link) => (
						<li key={link}>
							{link !== 'Manifest Now' ? (
								<button className='text-white text-base font-medium'>{link}</button>
							) : (
								<Button bg='lemon' className='h-[max(2.5rem,_32px)]'>
									{link}
								</Button>
							)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
