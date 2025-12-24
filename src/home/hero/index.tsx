'use client';

import { SplitText } from 'gsap/SplitText';
import { HeroSliceDefaultPrimary } from '../../../prismicio-types';

import Button from '@/components/button';
import gsap from 'gsap';
import Link from 'next/link';
import SwitchingTexts from './switching-texts';

gsap.registerPlugin(SplitText);

export default function Hero({ hero }: { hero: HeroSliceDefaultPrimary }) {
	return (
		<section id='hero' className='relative overflow-hidden z-12'>
			<figure className='h-[max(50.625rem,650px)] des:h-screen'>
				<video
					className='w-full h-full object-cover'
					autoPlay
					loop
					muted
					playsInline
					poster='/images/hero-poster.jpg'>
					<source src='/videos/hero-vid.mp4' type='video/mp4' />
				</video>
			</figure>

			<div
				className='flex flex-col items-center justify-center 
			text-center px-gutter absolute top-1/2 left-1/2
			-translate-y-1/2 -translate-x-1/2 w-full max-w-[max(60rem,450px)]
			z-2'>
				<h1
					className='text-white text-[max(5rem,34px)] font-outfit 
					font-semibold tracking-tight leading-[1.2]'>
					{hero.title}
				</h1>
				<p
					className='text-20 text-white leading-[1.4] tracking-tight 
					mt-[max(0.5rem,8px)]
					'>
					{hero.info}
				</p>
				<div className='hero-btn-box  w-max'>
					<Link
						href='https://calendly.com/aj-cydir/discovery-call'
						target='_blank'
						rel='noopener'>
						<Button bg='lemon' className='mt-[max(1.5rem,20px)]'>
							Schedule Your Call
						</Button>
					</Link>
				</div>
			</div>

			<SwitchingTexts hero={hero} />
			<div className='bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 w-full h-full pointer-events-none' />
		</section>
	);
}
