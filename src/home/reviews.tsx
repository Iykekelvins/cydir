'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { ReviewsSectionSliceDefaultPrimary } from '../../prismicio-types';

import useEmblaCarousel from 'embla-carousel-react';
import Tag from '@/components/tag';
import Image from 'next/image';
import gsap from 'gsap';
import Words from '@/animations/words';
import Button from '@/components/button';
import Link from 'next/link';

export default function Reviews({
	reviews,
}: {
	reviews: ReviewsSectionSliceDefaultPrimary;
}) {
	const [active, setActive] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);

	const [emblaRef, emblaApi] = useEmblaCarousel();

	const [canScrollNext, setCanScrollNext] = useState(true);
	const [canScrollPrev, setCanScrollPrev] = useState(false);

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
	const startAutoAdvance = useCallback(() => {
		// Clear any existing interval
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}

		intervalRef.current = setInterval(() => {
			setActive((prev) => {
				const nextIndex = (prev + 1) % reviews.reviews.length;
				return nextIndex;
			});
		}, 16000);
	}, [reviews.reviews.length]);

	// Handle manual click
	const handleClick = (index: number) => {
		setActive(index);
		animateStroke(index);
		emblaApi?.scrollTo(index);

		// Restart auto-advance from this point
		startAutoAdvance();
	};

	// Initialize and handle active changes
	useEffect(() => {
		animateStroke(active);
		startAutoAdvance();
		emblaApi?.scrollTo(active);

		emblaApi?.on('scroll', () => {
			setActive(emblaApi?.selectedScrollSnap());
			animateStroke(emblaApi?.selectedScrollSnap());
			startAutoAdvance();
		});

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
			if (timelineRef.current) {
				timelineRef.current.kill();
			}
		};
	}, [active, emblaApi, startAutoAdvance]);

	useEffect(() => {
		if (!emblaApi) return;

		emblaApi?.on('scroll', () => {
			setCanScrollNext(emblaApi?.canScrollNext());
			setCanScrollPrev(emblaApi?.canScrollPrev());
		});
	}, [emblaApi]);

	return (
		<section
			id='reviews'
			className='bg-linear-to-b from-black to-[#0A182D] pt-[max(5rem,40px)] 
			pb-[max(4rem,30px)] relative z-10 px-gutter'>
			<div className='flex flex-col items-center justify-center'>
				<Tag color='lemon'>Reviews</Tag>
				<Words
					as='h2'
					className='text-60 text-white font-medium font-outfit 
          tracking-tighter leading-[1.3]
          mt-[max(1rem,14px)] text-center'>
					Limitless Lives in Action
				</Words>
			</div>

			<div className='mt-[max(4.25rem,38px)]'>
				<div
					className='
				max-[600px]:overflow-hidden max-[600px]:pb-[max(10px)]
				'>
					<div className='mt-[max(2rem,24px)]'>
						<div className='overflow-hidden' ref={emblaRef}>
							<div className='embla__container'>
								{reviews.reviews.map((tes, i) => (
									<div
										className='user-info col-start-1 row-start-1
											flex-[0_0_100%]
                  '
										key={i}>
										<div className='flex items-center justify-between'>
											<div>
												<PrismicRichText
													field={tes.info}
													components={{
														paragraph: ({
															children,
														}: {
															children: React.ReactNode;
														}) => (
															<p
																className='text-[max(2rem,20px)] text-white 
                    						font-medium tracking-tight leading-[1.3]
																md:max-w-[max(48.313rem)]
																'>
																{children}
															</p>
														),
													}}
												/>

												<div className='mt-[max(1.75rem,18px)]'>
													<h2 className='text-white-80 text-24 tracking-tight'>
														{tes.name}
													</h2>
												</div>
											</div>

											<figure key={i} className='hidden md:block'>
												<Image
													src={tes.image.url as string}
													width={400}
													height={400}
													alt={tes.image.alt as string}
													className='rounded-full size-[max(25rem)] 
                  				object-cover object-center'
												/>
											</figure>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className='flex items-center mt-[max(3rem,32px)] gap-[max(1rem,14px)] w-max'>
						{reviews.reviews.map((tes, i) => (
							<button className='relative' key={i} onClick={() => handleClick(i)}>
								<Image
									src={tes.image.url as string}
									width={48}
									height={48}
									alt={tes.image.alt as string}
									className='rounded-full size-[max(3rem,32px)] object-cover object-center'
								/>

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
						<div className='flex items-center gap-[max(0.75rem,12px)]'>
							<button
								onClick={() => emblaApi?.scrollPrev()}
								disabled={!canScrollPrev}
								className='disabled:opacity-60 disabled:cursor-text!'
								aria-label='Scroll reviews carousel to the left'>
								<svg
									width='41'
									height='41'
									viewBox='0 0 41 41'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='size-[max(2.5rem,32px)]'>
									<circle
										cx='20.2998'
										cy='20.2998'
										r='20.15'
										fill='#F6FBFD'
										fillOpacity='0.28'
										stroke='white'
										strokeWidth='0.3'
									/>
									<g clip-path='url(#clip0_1122_4879)'>
										<path
											d='M22.7998 26.5498L16.5498 20.2998L22.7998 14.0498'
											stroke='#C8D72C'
											strokeWidth='1.25'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</g>
									<defs>
										<clipPath id='clip0_1122_4879'>
											<rect
												width='20'
												height='20'
												fill='white'
												transform='translate(10.2998 10.2998)'
											/>
										</clipPath>
									</defs>
								</svg>
							</button>

							<button
								className='rotate-180 disabled:opacity-60 disabled:cursor-text!'
								onClick={() => emblaApi?.scrollNext()}
								disabled={!canScrollNext}
								aria-label='Scroll reviews carousel to the right'>
								<svg
									width='41'
									height='41'
									viewBox='0 0 41 41'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='size-[max(2.5rem,32px)]'>
									<circle
										cx='20.2998'
										cy='20.2998'
										r='20.15'
										fill='#F6FBFD'
										fillOpacity='0.28'
										stroke='white'
										strokeWidth='0.3'
									/>
									<g clip-path='url(#clip0_1122_4879)'>
										<path
											d='M22.7998 26.5498L16.5498 20.2998L22.7998 14.0498'
											stroke='#C8D72C'
											strokeWidth='1.25'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</g>
									<defs>
										<clipPath id='clip0_1122_4879'>
											<rect
												width='20'
												height='20'
												fill='white'
												transform='translate(10.2998 10.2998)'
											/>
										</clipPath>
									</defs>
								</svg>
							</button>
						</div>
					</div>
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
