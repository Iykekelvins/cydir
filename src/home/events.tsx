'use client';

import { useProvider } from '@/app/context';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Button from '@/components/button';
import Words from '@/animations/words';
import Paragraph from '@/animations/paragraph';
import Tag from '@/components/tag';

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
	{
		title: 'The Power of Rewiring',
		info: 'Learn practical NLP strategies to shift limiting beliefs into empowering ones.',
	},
];

export default function Events() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto' }, [
		Autoplay({ playOnInit: false, delay: 3000 }),
	]);

	const { setOpenCommForm } = useProvider();

	return (
		<section
			className='pt-[max(6.825rem,74px)] bg-[url(/images/events-bg.jpg)] 
    bg-cover bg-no-repeat relative overflow-hidden pb-[max(3.25rem,40px)] z-12'>
			<div className='relative z-2'>
				<div className='flex flex-col items-center justify-center text-center'>
					<Tag color='lemon'>The Limitless Community</Tag>
					<p
						className='text-36 leading-normal tracking-tighter
					max-w-[max(51.25rem,550px)] mt-[max(0.75rem,12px)]
					text-white
					'>
						Join Abhinav and the Limitless Community for workshops, retreats, and
						curated gatherings that combine reflection, conversation, and
						transformation.
					</p>
					<Button
						bg='lemon'
						className='mt-[max(2rem,24px)]'
						onClick={() => setOpenCommForm(true)}>
						Join the Limitless Community
					</Button>
				</div>

				<div
					className='px-gutter mt-[max(7.25rem,64px)] 
				flex md:items-end justify-between flex-col md:flex-row
				gap-[max(1.5rem,24px)]
				'>
					<div>
						<Words
							as='h2'
							className='text-white text-64 font-medium font-outfit tracking-tight'>
							Upcoming events
						</Words>
						<Paragraph
							className='text-20 text-white leading-[1.4] tracking-tight 
          mt-[max(1.25rem,18px)] max-w-[max(34.5rem,400px)]'>
							I regularly host events open to all types of people, geared towards
							becoming their best self
						</Paragraph>
					</div>

					{/* <div className='flex items-center justify-end mt-[max(2.5rem,32px)]'>
						<div
							className='bg-[rgba(27,56,100,0.3)] rounded-ful 
            px-[max(0.938rem,13.5px)] h-[max(2.5rem,36px)]'>
							<span className='size-10 bg-white'></span>
						</div>
					
					</div> */}
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

				<div className='embla mt-[max(5rem,48px)]'>
					<div className='overflow-hidden px-gutter' ref={emblaRef}>
						<div className='embla__container gap-[16px]'>
							{EVENTS.map((ev, i) => (
								<div
									className={`embla__slide border-[0.3] border-white 
                border-solid rounded-[max(1.5rem,16px)] overflow-hidden
                 bg-white min-w-[22.563rem]
                `}
									key={i}>
									<figure className='overflow-hidden'>
										<Image
											src={`/images/event-${i < 3 ? i + 1 : 3}.jpg`}
											width={500}
											height={300}
											alt={`Poster for event: ${ev.title}`}
											className='w-full h-[max(13.538rem,240px)] object-cover'
										/>
									</figure>

									<div className='p-[max(1.5rem,20px)]'>
										<h3 className='text-blue text-20 font-semibold tracking-tighter'>
											{ev.title}
										</h3>
										<p
											className='text-[#0B192DCC] text-[max(0.75rem,11px)] 
										font-medium tracking-tighter mt-[max(0.5rem,8px)]'>
											By Cydir Inc
										</p>
										<p
											className='text-[#0C0C0CB2] text-14 leading-normal 
										mt-[max(0.875rem,13px)] tracking-tighter'>
											{ev.info}
										</p>

										<div
											className='flex items-center flex-wrap gap-[24px] 
										 mt-[max(1.5rem,20px)]'>
											<div>
												<h4 className='text-[#0C0C0C82] text-[max(0.625rem,10px)] tracking-tighter'>
													Date
												</h4>
												<p
													className='text-[#0B192DCC] text-[max(0.75rem,11px)] font-medium 
                        tracking-tighter mt-[max(0.25rem,4px)]'>
													Thursday, Sep 11 2025
												</p>
											</div>

											<div>
												<h4 className='text-[#0C0C0C82] text-[max(0.625rem,10px)] tracking-tighter'>
													Venue
												</h4>
												<p
													className='text-[#0B192DCC] text-[max(0.75rem,11px)] font-medium 
                        tracking-tighter mt-[max(0.25rem,4px)]'>
													Anahiem, California
												</p>
											</div>

											<div>
												<h4 className='text-[#0C0C0C82] text-14 tracking-tighter'>
													Time
												</h4>
												<p
													className='text-[#0B192DCC] text-[max(0.75rem,11px)] font-medium 
                        tracking-tighter mt-[max(0.25rem,4px)]'>
													5pm GMT+1
												</p>
											</div>
										</div>

										<Button
											bg='blue'
											className='mt-[max(2rem,24px)] h-[max(3rem,36px)]'>
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
