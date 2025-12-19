'use client';

import { useEffect, useRef, useState } from 'react';
import { TESTIMONIALS } from '@/utils/mock';

import Tag from '@/components/tag';
import Image from 'next/image';
import gsap from 'gsap';
import Words from '@/animations/words';
import Button from '@/components/button';
import Link from 'next/link';

export default function Thrive() {
	const [active, setActive] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);

	// Function to animate the stroke for a specific index
	const animateStroke = (index: number) => {
		const USER_INDICATORS = gsap.utils.toArray('.user-indicator') as Element[];

		// Kill any existing timeline
		if (timelineRef.current) {
			timelineRef.current.kill();
		}

		// Reset all indicators
		USER_INDICATORS.forEach((indicator) => {
			gsap.set(indicator, {
				strokeDasharray: '0 1400',
				display: 'none',
			});
		});

		// Animate the active indicator
		if (USER_INDICATORS[index]) {
			timelineRef.current = gsap
				.timeline()
				.set(USER_INDICATORS[index], {
					display: 'block',
					strokeDasharray: '0 1400',
				})
				.to(USER_INDICATORS[index], {
					strokeDasharray: '1457 1400',
					duration: 16, // Match the interval duration
					ease: 'none',
				});
		}
	};

	// Function to start auto-advance
	const startAutoAdvance = () => {
		// Clear any existing interval
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}

		intervalRef.current = setInterval(() => {
			setActive((prev) => {
				const nextIndex = (prev + 1) % TESTIMONIALS.length;
				return nextIndex;
			});
		}, 16000); // 5 seconds interval
	};

	// Handle manual click
	const handleClick = (index: number) => {
		setActive(index);
		animateStroke(index);

		// Restart auto-advance from this point
		startAutoAdvance();
	};

	// Initialize and handle active changes
	useEffect(() => {
		animateStroke(active);
		startAutoAdvance();

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
			if (timelineRef.current) {
				timelineRef.current.kill();
			}
		};
	}, [active]);

	return (
		<section
			id='reviews'
			className='bg-gradient-to-b from-black to-[#0A182D] px-8 pt-20 pb-16 relative z-10'>
			<div className='flex flex-col items-center justify-center'>
				<Tag color='lemon'>Thrive</Tag>
				<Words
					as='h2'
					className='text-60 text-white font-medium font-outfit 
          tracking-tighter leading-[1.3]
          mt-[max(1rem,14px)] text-center'>
					Limitless Lives in Action
				</Words>
			</div>

			<div className='flex items-start justify-between mt-[max(4.25rem,38px)] max-w-7xl mx-auto'>
				<div className='max-w-[max(52.375rem,430px)]'>
					<div className='mt-[max(2rem,24px)]'>
						<div className='grid'>
							{TESTIMONIALS.map((tes, i) => (
								<div
									className={`user-info col-start-1 row-start-1
                  ${i === active ? 'opacity-100' : 'opacity-0'}
                  `}
									key={i}>
									<p
										className='text-[max(2rem,20px)] text-white 
                    font-medium tracking-tight leading-[1.3]'
										dangerouslySetInnerHTML={{ __html: tes.info }}
									/>

									<div className='mt-[max(1.75rem,18px)]'>
										<h2 className='text-white-80 text-24 tracking-tight'>
											{tes.name}
										</h2>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='flex items-center mt-[max(3rem,32px)] gap-[max(1rem,14px)] w-max'>
						{TESTIMONIALS.map((tes, i) => (
							<button className='relative' key={i} onClick={() => handleClick(i)}>
								<Image
									src={`/images/tes-${i + 1}.jpg`}
									width={48}
									height={48}
									alt={tes.name}
									className='rounded-full size-[max(3rem,32px)] object-cover object-center'
								/>
								{/* {!tes.vidUrl ? (
								) : (
									<video
										className='rounded-full size-[max(3rem,32px)] object-cover object-center'
										autoPlay
										loop
										muted
										playsInline>
										<source src={tes.vidUrl} type='video/mp4' />
									</video>
								)} */}
								<svg
									viewBox='0 0 800 800'
									xmlns='http://www.w3.org/2000/svg'
									className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
                  h-full w-full scale-[2.5] -rotate-90'>
									<circle
										cx='400'
										cy='400'
										fill='none'
										r='200'
										strokeWidth='24'
										stroke='#C9D92D'
										strokeDasharray='0 1400'
										className='user-indicator'
									/>
								</svg>
							</button>
						))}
					</div>
				</div>

				<div className='hidden md:grid'>
					{TESTIMONIALS.map((tes, i) => (
						<figure
							className={`col-start-1 row-start-1 user-image
              transition-opacity duration-1000 ease-in-out
              ${i === active ? 'opacity-100' : 'opacity-0'}
              `}
							key={i}>
							<Image
								src={`/images/tes-${i + 1}.jpg`}
								width={400}
								height={400}
								alt={tes.name}
								className='rounded-full min-w-[25rem] h-[25rem] 
                  object-cover object-center w-[25rem]'
							/>
							{/* {!tes.vidUrl ? (
							// ) : (
							// 	<video
							// 		className='rounded-full min-w-[25rem] h-[25rem] 
              //     object-cover object-center w-[25rem]'
							// 		autoPlay
							// 		loop
							// 		muted
							// 		playsInline>
							// 		<source src={tes.vidUrl} type='video/mp4' />
							// 	</video>
							// )} */}
						</figure>
					))}
				</div>
			</div>

			<div className='flex justify-center mt-[max(2.25rem,24px)]'>
				<Link
					href='https://calendly.com/aj-cydir/discovery-call'
					target='_blank'
					rel='noopener'>
					<Button bg='lemon'>Begin Your Transformation</Button>
				</Link>
			</div>
		</section>
	);
}
