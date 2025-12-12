'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Paragraph from '@/animations/paragraph';
import Image from 'next/image';
import Words from '@/animations/words';
import gsap from 'gsap';
import Button from '@/components/button';

export default function Architecture() {
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
        tracking-tighter leading-[1.11]
        '>
					The Architecture of <br /> Change
				</Words>
				<Paragraph
					className='text-[#FFFFFFCC] text-20 tracking-tighter leading-[1.4]
        md:text-right max-w-[max(35.825rem,320px)]
        '>
					Transformation unfolds through a simple yet powerful structure, one that
					integrates both the unconscious and conscious mind. Abhinav&apos;s approach
					to coaching is built around four core requisites for empowerment and change
					that create lasting results.
				</Paragraph>
			</div>

			<Journey />

			<div className='flex justify-center mt-[max(8.125rem,80px)]'>
				<Button bg='lemon'>Begin Self Mastery</Button>
			</div>
		</section>
	);
}

const Journey = () => {
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
					end: `+=${window.innerHeight * 4}`,
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

						if (rotation >= 175) {
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

						if (rotation < 175) {
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
						2. Create
					</h3>
					<p
						className='text-white-80 text-20 leading-normal tracking-tight
          max-w-[max(28.75rem,300px)] mt-[max(0.625rem,10px)]'>
						Design a compelling future and align the unconscious patterns that
						support it. By shifting the inner blueprint, your thoughts, emotions, and
						actions begin to move in harmony with what you truly want.
					</p>
				</div>
			</div>

			<div
				className='flex des:hidden flex-col items-center justify-center text-center'
				data-selector='release'>
				<span className='size-[max(2rem,24px)] bg-lemon rounded-full' />
				<div className='mt-[max(1.5rem,18px)]'>
					<h3 className='text-[max(2.25rem,24px)] text-white font-medium tracking-tight'>
						1. Release
					</h3>
					<p
						className='text-white-80 text-20 leading-normal tracking-tight
          max-w-[max(24.875rem,300px)] mt-[max(0.625rem,10px)]'>
						Let go of negative emotions, limiting beliefs, and the weight of old
						experiences. This is where deep integration happens, dissolving what no
						longer serves you and creating space for empowerment.
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
							1. Release
						</h3>
						<p
							className='text-white-80 text-20 leading-normal tracking-tight
          max-w-[max(24.875rem,300px)] mt-[max(0.625rem,10px)]'>
							Let go of negative emotions, limiting beliefs, and the weight of old
							experiences. This is where deep integration happens, dissolving what no
							longer serves you and creating space for empowerment.
						</p>
					</div>
				</div>

				<div
					className='flex des:hidden flex-col items-center justify-center text-center des:opacity-40'
					data-selector='create'>
					<span className='size-[max(1.25rem,20px)] bg-lemon rounded-full ball' />
					<div className='mt-[max(1.5rem,18px)]'>
						<h3 className='text-[max(2.25rem,24px)] text-white font-medium tracking-tight'>
							2. Create
						</h3>
						<p
							className='text-white-80 text-20 leading-normal tracking-tight
          max-w-[max(28.75rem,300px)] mt-[max(0.625rem,10px)]'>
							Design a compelling future and align the unconscious patterns that
							support it. By shifting the inner blueprint, your thoughts, emotions,
							and actions begin to move in harmony with what you truly want.
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
					<span className='size-[max(1.25rem,20px)] bg-lemon rounded-full ball' />
					<div className='mt-[max(1.5rem,18px)]'>
						<h3 className='text-[max(2.25rem,24px)] text-white font-medium tracking-tight'>
							3. Act
						</h3>
						<p
							className='text-white-80 text-20 leading-normal tracking-tight
          max-w-[max(24.875rem,300px)] mt-[max(0.625rem,10px)]'>
							Achieve the results you desire through purposeful action and focus.
							Setting boundaries, maintaining alignment, and directing attention
							toward what you want.
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
				<span className='size-[max(1.25rem,20px)] bg-lemon rounded-full ball' />
				<div className='mt-[max(1.5rem,18px)]'>
					<h3 className='text-[max(2.25rem,24px)] text-white font-medium tracking-tight'>
						4. Optimize
					</h3>
					<p
						className='text-white-80 text-20 leading-normal tracking-tight
          max-w-[max(28.75rem,300px)] mt-[max(0.625rem,10px)]'>
						Stay positive and focused on your path of becoming who you&apos;re meant
						to be, doing what you&apos;re meant to do, having what you desire, and
						experiencing what you&apos;re meant to experience in this lifetime.
					</p>
				</div>
			</div>
		</div>
	);
};
