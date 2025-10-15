'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Button from '@/components/button';

const EVENTS = [
	{
		title: 'Uncover Your Deepest Why',
		info: 'Get the concrete strategies and tools that have transformed thousands of businesses at every stage. ',
	},
	{
		title: 'The Growth Mindset Workshop',
		info: 'This event will help you build habits that keep you growing, even when challenges arise.',
	},
	{
		title: 'The Power of Rewiring',
		info: 'Learn practical NLP strategies to shift limiting beliefs into empowering ones.',
	},
];

export default function Events() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto' }, [
		Autoplay({ playOnInit: false, delay: 3000 }),
	]);

	return (
		<section
			className='pt-[max(6.825rem,74px)] bg-[url(/images/events-bg.jpg)] 
    bg-cover bg-no-repeat relative overflow-hidden pb-[max(3.25rem,40px)]'>
			<div className='relative z-[2]'>
				<div className='px-gutter'>
					<h2 className='text-white text-64 font-medium font-outfit tracking-tight'>
						Upcoming events
					</h2>
					<p
						className='text-20 text-white leading-[1.4] tracking-tight 
          mt-[max(1.25rem,18px)] max-w-[max(34.5rem,400px)]'>
						I regularly host events open to all types of people, geared towards
						becoming their best self
					</p>

					<div className='flex items-center justify-between mt-[max(2.5rem,32px)]'>
						<div
							className='bg-[rgba(27,56,100,0.3)] rounded-ful 
            px-[max(0.938rem,13.5px)] h-[max(2.5rem,36px)]'>
							<span className='size-10 bg-white'></span>
						</div>
						<div className='flex items-center gap-[max(0.75rem,12px)]'>
							<button onClick={() => emblaApi?.scrollPrev()}>
								<svg
									width='42'
									height='42'
									viewBox='0 0 42 42'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<circle
										cx='21'
										cy='21'
										r='20.15'
										fill='#1B3864'
										fillOpacity='0.28'
										stroke='white'
										strokeWidth='0.3'
									/>
									<g clipPath='url(#clip0_404_1774)'>
										<path
											d='M23.5 27.25L17.25 21L23.5 14.75'
											stroke='#C8D72C'
											strokeWidth='1.25'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</g>
									<defs>
										<clipPath id='clip0_404_1774'>
											<rect
												width='20'
												height='20'
												fill='white'
												transform='translate(11 11)'
											/>
										</clipPath>
									</defs>
								</svg>
							</button>

							<button className='rotate-180' onClick={() => emblaApi?.scrollNext()}>
								<svg
									width='42'
									height='42'
									viewBox='0 0 42 42'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<circle
										cx='21'
										cy='21'
										r='20.15'
										fill='#1B3864'
										fillOpacity='0.28'
										stroke='white'
										strokeWidth='0.3'
									/>
									<g clipPath='url(#clip0_404_1774)'>
										<path
											d='M23.5 27.25L17.25 21L23.5 14.75'
											stroke='#C8D72C'
											strokeWidth='1.25'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</g>
									<defs>
										<clipPath id='clip0_404_1774'>
											<rect
												width='20'
												height='20'
												fill='white'
												transform='translate(11 11)'
											/>
										</clipPath>
									</defs>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<div className='embla mt-[max(5rem,48px)]'>
					<div className='overflow-hidden px-gutter' ref={emblaRef}>
						<div className='embla__container gap-[16px]'>
							{EVENTS.map((ev, i) => (
								<div
									className={`embla__slide border-[0.3] border-white 
                border-solid rounded-[max(1.5rem,16px)] overflow-hidden
                min-w-[31.25rem] bg-white
                `}
									key={ev.title}>
									<figure className='overflow-hidden'>
										<Image
											src={`/images/event-${i + 1}.jpg`}
											width={500}
											height={300}
											alt={`Poster for event: ${ev.title}`}
											className='w-full h-[max(18.75rem,280px)] object-cover'
										/>
									</figure>

									<div className='px-[max(1.5rem,20px)] pt-[max(2.625rem,24px)] pb-[max(2.5rem,30px)]'>
										<h3 className='text-blue text-[max(1.875rem,18px)] font-semibold tracking-tight'>
											{ev.title}
										</h3>
										<p className='text-[#0B192DCC] text-base font-medium tracking-tight mt-[max(0.5rem,8px)]'>
											By Cydir Inc
										</p>
										<p className='text-[#0C0C0CB2] text-20 leading-[1.5] mt-[max(1.25rem,16px)] tracking-tight'>
											{ev.info}
										</p>

										<div className='flex items-center flex-wrap gap-[24px] justify-between mt-[max(1.5rem,20px)]'>
											<div>
												<h4 className='text-[#0C0C0C82] text-14 tracking-tight'>
													Date
												</h4>
												<p
													className='text-[#0B192DCC] text-base font-medium 
                        tracking-tight mt-[max(0.25rem,4px)]'>
													Thursday, Sep 11 2025
												</p>
											</div>
											<div>
												<h4 className='text-[#0C0C0C82] text-14 tracking-tight'>
													Venue
												</h4>
												<p
													className='text-[#0B192DCC] text-base font-medium 
                        tracking-tight mt-[max(0.25rem,4px)]'>
													Anahiem, California
												</p>
											</div>

											<div>
												<h4 className='text-[#0C0C0C82] text-14 tracking-tight'>
													Time
												</h4>
												<p
													className='text-[#0B192DCC] text-base font-medium 
                        tracking-tight mt-[max(0.25rem,4px)]'>
													5pm GMT+1
												</p>
											</div>
										</div>

										<Button bg='blue' className='mt-[max(2rem,24px)]'>
											Learn More
										</Button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className='bg-[#000000CC] absolute top-0 left-0 w-full h-full pointer-events-none' />
		</section>
	);
}
