'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArchitectureofChangeSectionSliceDefaultPrimary } from '../../prismicio-types';
import { KeyTextField } from '@prismicio/client';

import Paragraph from '@/animations/paragraph';
import Image from 'next/image';
import Words from '@/animations/words';
import gsap from 'gsap';
import Button from '@/components/button';
import Link from 'next/link';

export default function Architecture({
	aoc,
}: {
	aoc: ArchitectureofChangeSectionSliceDefaultPrimary;
}) {
	return (
		<section
			className='px-gutter pt-[max(9.375rem,64px)] pb-[max(6.26rem,74px)]
    bg-[linear-gradient(180deg,#000000_0%,#091529_100%)]
    '>
			<div
				className='flex flex-col md:flex-row items-start justify-between
      gap-[max(1.5rem,20px)]
      '>
				<Words
					as='h2'
					className='text-white text-60 font-medium font-outfit
        tracking-tighter leading-[1.11] max-w-[max(30rem,280px)]
        '>
					{aoc.title}
				</Words>
				<Paragraph
					className='text-[#FFFFFFCC] text-20 tracking-tighter leading-[1.4]
        md:text-right max-w-[max(35.825rem,320px)]
        '>
					{aoc.info}
				</Paragraph>
			</div>

			<Journey tl={aoc.circular_timeline_items} />

			<div className='flex justify-center mt-[max(8.125rem,80px)]'>
				<Link
					href='https://calendly.com/aj-cydir/discovery-call'
					target='_blank'
					rel='noopener'>
					<Button bg='lemon'>Begin Self Mastery</Button>
				</Link>
			</div>
		</section>
	);
}

const Journey = ({
	tl,
}: {
	tl: {
		title: KeyTextField;
		info: KeyTextField;
	}[];
}) => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

	useGSAP(
		() => {
			const mm = gsap.matchMedia();
			const animation = gsap.timeline();

			animation.to("[data-selector='spinning-wheel']", {
				rotate: '180deg',
			});

			if (scrollTriggerRef.current) {
				scrollTriggerRef.current.kill();
			}

			mm.add('(min-width:1199px)', () => {
				const SPINNING_WHEEL = document.querySelector(
					"[data-selector='spinning-wheel']"
				);

				gsap.set(SPINNING_WHEEL, {
					rotate: '-90deg',
				});

				scrollTriggerRef.current = ScrollTrigger.create({
					trigger: sectionRef.current,
					start: 'top 3.5%',
					end: `+=${window.innerHeight * 1.15}`,
					scrub: 1,
					pin: sectionRef.current,
					animation,
					anticipatePin: 1,
					pinSpacing: true,
					onUpdate: () => {
						const CREATE = document.querySelector("[data-selector='create']");
						const ACT = document.querySelector("[data-selector='act']");
						const OPTIMIZE = document.querySelector("[data-selector='optimize']");

						const rotation = gsap.getProperty(SPINNING_WHEEL, 'rotate') as number;

						if (rotation >= 1) {
							gsap.to(CREATE, {
								opacity: 1,
							});
							gsap.to(CREATE!.querySelector('.ball'), {
								scale: 1.5,
								ease: 'bounce',
							});
						}

						if (rotation >= 85) {
							gsap.to(ACT, {
								opacity: 1,
							});
							gsap.to(ACT!.querySelector('.ball'), {
								scale: 1.5,
								ease: 'bounce',
							});
						}

						if (rotation >= 165) {
							gsap.to(OPTIMIZE, {
								opacity: 1,
							});
							gsap.to(OPTIMIZE!.querySelector('.ball'), {
								scale: 1.5,
								ease: 'bounce',
							});
						}

						if (rotation < 1) {
							gsap.to(CREATE, {
								opacity: 0.4,
							});
							gsap.to(CREATE!.querySelector('.ball'), {
								scale: 1,
								ease: 'bounce',
							});
						}

						if (rotation < 85) {
							gsap.to(ACT, {
								opacity: 0.4,
							});
							gsap.to(ACT!.querySelector('.ball'), {
								scale: 1,
								ease: 'bounce',
							});
						}

						if (rotation < 165) {
							gsap.to(OPTIMIZE, {
								opacity: 0.4,
							});
							gsap.to(OPTIMIZE!.querySelector('.ball'), {
								scale: 1,
								ease: 'bounce',
							});
						}
					},
				});
			});

			mm.add('(max-width:1198px)', () => {
				const CREATE = document.querySelector("[data-selector='create']");
				const ACT = document.querySelector("[data-selector='act']");
				const OPTIMIZE = document.querySelector("[data-selector='optimize']");

				gsap.set([CREATE, ACT, OPTIMIZE], {
					opacity: 1,
				});

				gsap.set(
					[
						CREATE!.querySelector('.ball'),
						ACT!.querySelector('.ball'),
						OPTIMIZE!.querySelector('.ball'),
					],
					{
						height: '20px',
						width: '20px',
					}
				);
			});

			return () => {
				if (scrollTriggerRef.current) {
					scrollTriggerRef.current.kill();
				}
			};
		},
		{
			scope: sectionRef,
		}
	);

	return (
		<div className='mt-[max(9.625rem,84px)]' ref={sectionRef}>
			<div
				className='hidden des:flex flex-col items-center justify-center 
        text-center des:opacity-40'
				data-selector='create'>
				<span className='size-[max(1.25rem,20px)] bg-lemon rounded-full ball' />
				<div className='mt-[max(1.5rem,18px)]'>
					<h3 className='text-[max(2.25rem,24px)] text-white font-medium tracking-tight'>
						2. {tl[1].title}
					</h3>
					<p
						className='text-white-80 text-20 leading-normal tracking-tight
          max-w-[max(28.75rem,300px)] mt-[max(0.625rem,10px)]'>
						{tl[1].info}
					</p>
				</div>
			</div>

			<div
				className='flex des:hidden flex-col items-center justify-center text-center'
				data-selector='release'>
				<span className='size-[max(1.25rem,20px)] des:size-[max(2rem,24px)] bg-lemon rounded-full' />
				<div className='mt-[max(1.5rem,18px)]'>
					<h3 className='text-[max(2.25rem,24px)] text-white font-medium tracking-tight'>
						1. {tl[0].title}
					</h3>
					<p
						className='text-white-80 text-20 leading-normal tracking-tight
          max-w-[max(24.875rem,300px)] mt-[max(0.625rem,10px)]'>
						{tl[0].info}
					</p>
				</div>
			</div>

			<div
				className='mt-[max(6.625rem,90px)] flex flex-col md:flex-row items-center
      justify-between gap-[max(6.625rem,90px)] md:gap-0'>
				{/* start of release */}
				<div
					className='hidden des:flex flex-col items-center justify-center text-center'
					data-selector='release'>
					<span className='size-[max(2rem,24px)] bg-lemon rounded-full' />
					<div className='mt-[max(1.5rem,18px)]'>
						<h3 className='text-[max(2.25rem,24px)] text-white font-medium tracking-tight'>
							1. {tl[0].title}
						</h3>
						<p
							className='text-white-80 text-20 leading-normal tracking-tight
          max-w-[max(24.875rem,300px)] mt-[max(0.625rem,10px)]'>
							{tl[0].info}
						</p>
					</div>
				</div>

				<div
					className='flex des:hidden flex-col items-center justify-center text-center des:opacity-40'
					data-selector='create'>
					<span className='size-[max(1.25rem,20px)] bg-lemon rounded-full ball' />
					<div className='mt-[max(1.5rem,18px)]'>
						<h3 className='text-[max(2.25rem,24px)] text-white font-medium tracking-tight'>
							2. {tl[1].title}
						</h3>
						<p
							className='text-white-80 text-20 leading-normal tracking-tight
          max-w-[max(28.75rem,300px)] mt-[max(0.625rem,10px)]'>
							{tl[1].info}
						</p>
					</div>
				</div>
				{/* end of release */}

				<figure className='hidden des:block' data-selector='spinning-wheel'>
					<Image
						src='/wheel.svg'
						width={362}
						height={362}
						alt='spinning wheel'
						className='min-w-90.5'
					/>
				</figure>

				{/* start of act */}
				<div
					className='flex flex-col items-center justify-center text-center des:opacity-40'
					data-selector='act'>
					<span className='size-[max(1.25rem,20px)] bg-lemon rounded-full ball hidden des:block' />
					<span className='size-[max(1.25rem,20px)] bg-lemon rounded-full des:hidden' />
					<div className='mt-[max(1.5rem,18px)]'>
						<h3 className='text-[max(2.25rem,24px)] text-white font-medium tracking-tight'>
							3. {tl[2].title}
						</h3>
						<p
							className='text-white-80 text-20 leading-normal tracking-tight
          max-w-[max(24.875rem,300px)] mt-[max(0.625rem,10px)]'>
							{tl[2].info}
						</p>
					</div>
				</div>

				{/* end of act */}
			</div>

			{/* start of optimize */}
			<div
				className='flex flex-col items-center justify-center text-center mt-[max(6.5rem,80px)]
        des:opacity-40
        '
				data-selector='optimize'>
				<span className='size-[max(1.25rem,20px)] bg-lemon rounded-full ball hidden des:block' />
				<span className='size-[max(1.25rem,20px)] bg-lemon rounded-full des:hidden' />
				<div className='mt-[max(1.5rem,18px)]'>
					<h3 className='text-[max(2.25rem,24px)] text-white font-medium tracking-tight'>
						4. {tl[3].title}
					</h3>
					<p
						className='text-white-80 text-20 leading-normal tracking-tight
          max-w-[max(28.75rem,300px)] mt-[max(0.625rem,10px)]'>
						{tl[3].info}
					</p>
				</div>
			</div>
		</div>
	);
};
