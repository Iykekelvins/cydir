'use client';

import { useRef } from 'react';
import { useLenis } from 'lenis/react';
import { useGSAP } from '@gsap/react';
import { splitIntoChars } from '@/utils';

import Button from '@/components/button';
import gsap from 'gsap';
import Link from 'next/link';

export default function NavItem({ link }: { link: string }) {
	const lenis = useLenis();

	const firstSetRef = useRef<HTMLSpanElement>(null);
	const secondSetRef = useRef<HTMLSpanElement>(null);

	useGSAP(() => {
		splitIntoChars(firstSetRef.current!);
		splitIntoChars(secondSetRef.current!);

		if (firstSetRef.current) {
			gsap.set(firstSetRef.current?.querySelectorAll('.char'), {
				pointerEvents: 'none',
			});
		}

		if (secondSetRef.current) {
			gsap.set(secondSetRef.current, {
				opacity: 1,
			});
			gsap.set(secondSetRef.current?.querySelectorAll('.char'), {
				y: '100%',
				opacity: 0,
				pointerEvents: 'none',
			});
		}
	});

	const duration = 0.3;

	const playAnim = () => {
		const FIRST_SET_CHARS = firstSetRef.current?.querySelectorAll('.char');
		const SECOND_SET_CHARS = secondSetRef.current?.querySelectorAll('.char');

		gsap
			.timeline()
			.to(FIRST_SET_CHARS!, {
				y: '-100%',
				opacity: 0,
				stagger: 0.005,
				ease: 'none',
				duration,
			})
			.to(
				SECOND_SET_CHARS!,
				{
					y: 0,
					opacity: 1,
					stagger: 0.005,
					ease: 'none',
					duration,
				},
				0
			);
	};

	const reverseAnim = () => {
		const FIRST_SET_CHARS = firstSetRef.current?.querySelectorAll('.char');
		const SECOND_SET_CHARS = secondSetRef.current?.querySelectorAll('.char');

		gsap
			.timeline()
			.to(FIRST_SET_CHARS!, {
				y: 0,
				opacity: 1,
				stagger: -0.005,
				ease: 'none',
				duration,
			})
			.to(
				SECOND_SET_CHARS!,
				{
					y: '100%',
					opacity: 0,
					stagger: -0.005,
					ease: 'none',
					duration,
				},
				0
			);
	};

	return (
		<>
			{link !== 'Schedule Your Call' ? (
				<button
					className='text-white text-base font-medium overflow-hidden grid place-items-start
					'
					data-selector='scramble-link'
					onClick={() =>
						lenis?.scrollTo(`#${link.toLocaleLowerCase()}`, { offset: -100 })
					}
					onMouseOver={playAnim}
					onMouseLeave={reverseAnim}>
					<span className='col-start-1 row-start-1' ref={firstSetRef}>
						{link}
					</span>
					<span
						className='col-start-1 row-start-1 opacity-0 text-lemon font-medium'
						ref={secondSetRef}>
						{link}
					</span>
				</button>
			) : (
				<Link
					href='https://calendly.com/aj-cydir/discovery-call'
					target='_blank'
					rel='noopener'>
					<Button bg='lemon' className='h-[max(2.5rem,32px)]'>
						{link}
					</Button>
				</Link>
			)}
		</>
	);
}
