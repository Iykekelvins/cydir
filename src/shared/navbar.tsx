'use client';

import { useScrollDirection } from '@/hooks/useScrollDirection';
import { NAV_LINKS } from '@/utils/mock';

import Image from 'next/image';
import Link from 'next/link';
import NavItem from './nav-item';

export default function Navbar() {
	const scrollDir = useScrollDirection();

	return (
		<header
			className={`fixed top-0 left-0 w-full z-40 
						px-gutter py-[max(1.7rem,20px)]
						transition-all duration-300 ease-in-out
						${
							scrollDir === 'up'
								? 'bg-[#0A182D66] translate-y-0'
								: scrollDir === 'down'
								? 'bg-transparent -translate-y-full'
								: ''
						}
						`}>
			<nav className='flex items-center justify-between'>
				<Link href='/' aria-label='Go to homepage'>
					<Image src='/logo.svg' width={91.22} height={39} alt='Cydir Logo' />
				</Link>

				<ul className='hidden lg:flex items-center gap-[max(2.5rem,32px)]'>
					{NAV_LINKS.map((link) => (
						<li key={link}>
							<NavItem link={link} />
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
