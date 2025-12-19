'use client';

import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { useLenis } from 'lenis/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
	const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

	const lenis = useLenis();

	useGSAP(() => {
		const SECTIONS = gsap.utils.toArray('.legal-section') as Element[];
		const ITEMS = gsap.utils.toArray('.legal-item') as Element[];

		SECTIONS.forEach((sec, i) => {
			const trigger = ScrollTrigger.create({
				trigger: sec,
				start: 'top 60%',
				end: 'bottom 50%',
				onEnter: () => {
					ITEMS[i].classList.add('active');
				},
				onEnterBack: () => {
					ITEMS[i].classList.add('active');
				},
				onLeave: () => {
					ITEMS[i].classList.remove('active');
				},
				onLeaveBack: () => {
					ITEMS[i].classList.remove('active');
				},
			});

			scrollTriggersRef.current.push(trigger);
		});

		return () => {
			scrollTriggersRef.current.forEach((trigger) => trigger.kill());
			scrollTriggersRef.current = [];
		};
	});

	useEffect(() => {
		return () => {
			scrollTriggersRef.current.forEach((trigger) => trigger.kill());
			scrollTriggersRef.current = [];
		};
	}, []);

	const LINKS = [
		'Introduction',
		'Information Collection, Use, and Sharing',
		'Security',
		'Cookies',
		'Concerns',
	];

	return (
		<ul
			className='hidden des:flex flex-col 
    gap-[max(0.75rem,12px)] lg:sticky 
    lg:top-32 des:top-30'>
			{LINKS.map((link) => (
				<li key={link} className='relative legal-item'>
					<button
						className='text-base text-[#0000004D] font-medium tracking-tight 
            text-left font-outfit'
						onClick={() =>
							lenis?.scrollTo(
								`#${link.toLowerCase().replaceAll(' ', '-').replaceAll(',', '')}`,
								{
									offset: -150,
								}
							)
						}>
						{link}
					</button>
				</li>
			))}
		</ul>
	);
}
