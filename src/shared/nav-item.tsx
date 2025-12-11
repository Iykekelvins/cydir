'use client';

import { useEffect, useRef, useState } from 'react';
import { useLenis } from 'lenis/react';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

import Button from '@/components/button';
import gsap from 'gsap';

gsap.registerPlugin(SplitText);

export default function NavItem({ link }: { link: string }) {
	const lenis = useLenis();

	const [playAmim, setPlayAnim] = useState(false);
	const anim = useRef<GSAPTimeline>(null);

	const firstSetRef = useRef<HTMLSpanElement>(null);
	const secondSetRef = useRef<HTMLSpanElement>(null);

	useGSAP(() => {
		SplitText.create([firstSetRef.current, secondSetRef.current], {
			type: 'chars',
			charsClass: 'char',
		});

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

		const FIRST_SET_CHARS = firstSetRef.current?.querySelectorAll('.char');
		const SECOND_SET_CHARS = secondSetRef.current?.querySelectorAll('.char');

		anim.current = gsap
			.timeline({ paused: true })
			.to(FIRST_SET_CHARS!, {
				y: '-100%',
				opacity: 0,
				stagger: 0.01,
				ease: 'power1.out',
			})
			.to(
				SECOND_SET_CHARS!,
				{
					y: 0,
					opacity: 1,
					stagger: 0.01,
					ease: 'power1.out',
				},
				0
			);
	});

	useEffect(() => {
		if (playAmim) {
			anim.current?.play();
		} else {
			anim.current?.reverse();
		}
	}, [playAmim]);

	return (
		<>
			{link !== 'Manifest Now' ? (
				<button
					className='text-white text-base font-medium overflow-hidden grid place-items-start'
					data-selector='scramble-link'
					onClick={() =>
						lenis?.scrollTo(`#${link.toLocaleLowerCase()}`, { offset: -100 })
					}
					onMouseOver={() => setPlayAnim(true)}
					onMouseLeave={() => setPlayAnim(false)}>
					<span className='col-start-1 row-start-1' ref={firstSetRef}>
						{link}
					</span>
					<span
						className='col-start-1 row-start-1 opacity-0 text-lemon font-medium'
						ref={secondSetRef}>
						{link === 'Awaken' ? 'Why' : link}
					</span>
				</button>
			) : (
				<Button bg='lemon' className='h-[max(2.5rem,32px)]'>
					{link}
				</Button>
			)}
		</>
	);
}
