'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { cn } from '@/utils';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AwakenSectionSliceDefaultPrimary } from '../../prismicio-types';

import Button from '@/components/button';
import Tag from '@/components/tag';
import Image from 'next/image';
import gsap from 'gsap';
import Paragraph from '@/animations/paragraph';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Awaken({
	awakenSection,
}: {
	awakenSection: AwakenSectionSliceDefaultPrimary;
}) {
	const secionRef = useRef<HTMLElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const animation = gsap.timeline({ paused: true });
		const targets = gsap.utils.toArray('.translating-text');
		const duration = 0.75;
		const pause = 1;
		const stagger = duration + pause;
		const repeatDelay = stagger * (targets.length - 1) + pause;

		animation
			.from(targets, {
				y: '100%',
				duration,
				stagger: {
					each: stagger,
					repeat: -1,
					repeatDelay,
				},
			})
			.to(
				targets,
				{
					y: 0,
					duration,
					stagger: {
						each: stagger,
						repeat: -1,
						repeatDelay,
					},
				},
				stagger
			)
			.to(
				targets,
				{
					y: '-100%',
					duration,
					stagger: {
						each: stagger,
						repeat: -1,
						repeatDelay,
					},
				},
				stagger
			);

		ScrollTrigger.create({
			trigger: secionRef.current,
			start: 'top 90%',
			onEnter: () => {
				animation.play();
			},
		});
	});

	useGSAP(() => {
		gsap.set(trackRef.current, {
			y: '50%',
			x: '50%',
			willChange: 'transform',
		});

		ScrollTrigger.create({
			trigger: trackRef.current,
			start: 'top bottom',
			onEnter: () => {
				gsap.to(trackRef.current, {
					y: 0,
					x: 0,
					duration: 1.5,
					ease: 'power2.out',
					onComplete: () => {
						const TRACK = document.querySelector("[data-selector='track']");

						if (TRACK) {
							TRACK.classList.add('track');
						}
					},
				});
			},
		});
	});

	return (
		<section
			id='awaken'
			className='pt-[max(5rem,44px)] pb-[max(4.45rem,48px)] relative z-12'
			ref={secionRef}>
			<div className='px-gutter'>
				<div className='flex flex-col items-center justify-center text-center'>
					<Tag color='blue'>Awaken</Tag>
					<h2
						className={cn(
							'text-blue! text-60 font-outfit font-medium tracking-tight',
							'mt-[max(1rem,16px)] max-w-[max(52.5rem,435px)]',
							'leading-[1.2]'
						)}>
						{awakenSection.title}{' '}
						<span className='inline-flex'>
							<span
								className='font-chronicle-display grid overflow-hidden 
							place-items-start'>
								{awakenSection.translating_texts.map((text) => (
									<span
										className='translating-text col-start-1 
										row-start-1 will-change-transform pr-2.5'
										key={text.text}>
										{text.text}
									</span>
								))}
							</span>
						</span>
					</h2>
					<Paragraph
						className={cn(
							'text-20! text-[#0A182D99] mt-[max(0.75rem,12px)]',
							'max-w-[max(38.75rem,458px)] leading-[1.4] tracking-tighter'
						)}>
						{awakenSection.info}
					</Paragraph>
					<Link
						href='https://calendly.com/aj-cydir/discovery-call'
						target='_blank'
						rel='noopener'
						className='mt-[max(1.5rem,20px)]'>
						<Button bg='blue'>Create Your Life</Button>
					</Link>
				</div>
			</div>

			<div className='mt-[max(6.5rem,74px)] overflow-hidden'>
				<div className='w-fit' ref={trackRef}>
					<div
						className='flex items-center gap-[max(1.5rem,16px)] '
						data-selector='track'>
						<div className='flex items-center gap-[max(1.5rem,16px)]'>
							{awakenSection.card_carousel.map((card) => (
								<figure key={card.image.id}>
									<Image
										src={card.image.url as string}
										width={360}
										height={486}
										alt={`Area of life - ${card.image.alt}`}
										className='min-w-[max(220px,22.5rem)]'
									/>
								</figure>
							))}
						</div>
						<div className='flex items-center gap-[max(1.5rem,16px)]'>
							{awakenSection.card_carousel.map((card) => (
								<figure key={card.image.id}>
									<Image
										src={card.image.url as string}
										width={360}
										height={486}
										alt={`Area of life - ${card.image.alt}`}
										className='min-w-[max(220px,22.5rem)]'
									/>
								</figure>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
