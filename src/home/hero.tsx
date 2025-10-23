'use client';

import { useLenis } from 'lenis/react';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

import Button from '@/components/button';
import gsap from 'gsap';

gsap.registerPlugin(SplitText);

export default function Hero() {
	const heroTitle = useRef<HTMLHeadingElement>(null);
	const heroInfo = useRef<HTMLParagraphElement>(null);
	const heroTl = useRef<GSAPTimeline>(null);

	const lenis = useLenis();

	const [playTl, setPlayTl] = useState(false);

	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (document.readyState === 'complete') {
			setPlayTl(true);
		}
	}, []);

	useGSAP(() => {
		const heroTitleSplit = SplitText.create(heroTitle.current, {
			type: 'lines,chars',
			linesClass: 'line',
			charsClass: 'char',
			mask: 'lines',
		});

		const heroInfoSplit = SplitText.create(heroInfo.current, {
			type: 'lines',
			mask: 'lines',
		});

		gsap.set([heroTitle.current, heroInfo.current], {
			opacity: 1,
		});

		gsap.set(heroTitleSplit.chars, {
			scale: 0,
			transformOrigin: 'bottom left',
			willChange: 'transform',
		});

		gsap.set('.hero-btn-box', {
			scale: 0,
			transformOrigin: '50% 50%',
			willChange: 'transform',
			onComplete: () => {
				setTimeout(() => {
					gsap.set('.hero-btn-box', {
						opacity: 1,
					});
				}, 1500);
			},
		});

		gsap.set(heroInfoSplit.lines, {
			y: '100%',
			willChange: 'transform',
		});

		heroTl.current = gsap.timeline({ paused: true, delay: 3 });

		heroTitleSplit.lines.forEach((line) => {
			heroTl.current?.to(
				line.querySelectorAll('.char'),
				{
					scale: 1,
					stagger: 0.05,
					duration: 1,
					ease: 'back.out(2)',
					onComplete: () => {
						setTimeout(() => {
							heroTitleSplit.revert();
						}, 3500);
					},
				},
				0
			);
		});

		heroTl.current
			.to(
				heroInfoSplit.lines,
				{
					y: 0,
					stagger: 0.1,
					ease: 'power2.out',
					delay: 0.25,
					onComplete: () => {
						heroInfoSplit.revert();
					},
				},
				0
			)
			.to(
				'.hero-btn-box',
				{
					scale: 1,
					ease: 'back.out(2)',
					duration: 1,
					delay: 0.5,
				},
				0
			);
	});

	useEffect(() => {
		if (!lenis) return;

		if (!playTl) {
			lenis?.stop();
		} else {
			lenis?.start();
			heroTl.current?.play();
		}
	}, [playTl, lenis]);

	return (
		<section id='hero' className='relative overflow-hidden z-[12]'>
			<figure className='h-[max(50.625rem,_650px)] des:h-screen'>
				<video
					ref={videoRef}
					className='w-full h-full object-cover'
					autoPlay
					loop
					muted
					playsInline>
					<source src='/videos/cydir-hero-video.mp4' type='video/mp4' />
				</video>
			</figure>

			<div className='absolute px-gutter bottom-[max(3.75rem,_36px)]'>
				<h1
					className='text-white text-[max(5rem,_36px)] font-outfit 
					font-bold tracking-tight leading-[1.2] opacity-0'
					ref={heroTitle}>
					Awaken What&apos;s <br /> Possible
				</h1>
				<p
					className='text-20 text-white leading-[1.4] tracking-tight 
					mt-[max(0.5rem,_8px)] max-w-[max(43.825rem,_450px)] w-full
					opacity-0
					'
					ref={heroInfo}>
					Discover the power of manifestation, NLP, and coaching designed to help you
					break through barriers and create the life you truly desire.
				</p>
				<div className='hero-btn-box opacity-0 w-max'>
					<Button bg='lemon' className='mt-[max(1.5rem,_20px)]'>
						Become Limitless
					</Button>
				</div>
			</div>

			<button className='absolute right-gutter bottom-[max(2.5rem,_24px)]'>
				<svg
					width='48'
					height='48'
					viewBox='0 0 48 48'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<rect width='48' height='48' rx='24' fill='white' fillOpacity='0.1' />
					<path
						d='M12.75 21C12.3375 21 12 21.3375 12 21.75V26.25C12 26.6625 12.3375 27 12.75 27C13.1625 27 13.5 26.6625 13.5 26.25V21.75C13.5 21.3375 13.1625 21 12.75 21ZM33.75 21C33.3375 21 33 21.3375 33 21.75V26.25C33 26.6625 33.3375 27 33.75 27C34.1625 27 34.5 26.6625 34.5 26.25V21.75C34.5 21.3375 34.1625 21 33.75 21ZM15.75 16.5C15.3375 16.5 15 16.8375 15 17.25V30.75C15 31.1625 15.3375 31.5 15.75 31.5C16.1625 31.5 16.5 31.1625 16.5 30.75V17.25C16.5 16.8375 16.1625 16.5 15.75 16.5ZM18.75 19.5C18.3375 19.5 18 19.8375 18 20.25V27.75C18 28.1625 18.3375 28.5 18.75 28.5C19.1625 28.5 19.5 28.1625 19.5 27.75V20.25C19.5 19.8375 19.1625 19.5 18.75 19.5ZM21.75 22.5C21.3375 22.5 21 22.8375 21 23.25V24.75C21 25.1625 21.3375 25.5 21.75 25.5C22.1625 25.5 22.5 25.1625 22.5 24.75V23.25C22.5 22.8375 22.1625 22.5 21.75 22.5ZM24.75 19.5C24.3375 19.5 24 19.8375 24 20.25V27.75C24 28.1625 24.3375 28.5 24.75 28.5C25.1625 28.5 25.5 28.1625 25.5 27.75V20.25C25.5 19.8375 25.1625 19.5 24.75 19.5ZM27.75 13.5C27.3375 13.5 27 13.8375 27 14.25V33.75C27 34.1625 27.3375 34.5 27.75 34.5C28.1625 34.5 28.5 34.1625 28.5 33.75V14.25C28.5 13.8375 28.1625 13.5 27.75 13.5ZM30.75 16.5C30.3375 16.5 30 16.8375 30 17.25V30.75C30 31.1625 30.3375 31.5 30.75 31.5C31.1625 31.5 31.5 31.1625 31.5 30.75V17.25C31.5 16.8375 31.1625 16.5 30.75 16.5Z'
						fill='white'
					/>
				</svg>
			</button>
		</section>
	);
}
