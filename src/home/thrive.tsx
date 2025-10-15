'use client';

import { useEffect, useRef, useState } from 'react';

import Tag from '@/components/tag';
import Image from 'next/image';
import gsap from 'gsap';

export default function Thrive() {
	const [active, setActive] = useState(0);
	const prevActive = useRef(active);
	const LENGTH = 4;

	const ISAUTOCHANGING = useRef<boolean | null>(null);

	useEffect(() => {
		const USER_INDICATORS = gsap.utils.toArray('.user-indicator') as Element[];

		ISAUTOCHANGING.current = true;

		const interval = setInterval(() => {
			if (!ISAUTOCHANGING.current) return;

			if (active === LENGTH - 1) {
				setActive(0);
				gsap
					.timeline()
					.fromTo(
						USER_INDICATORS[0],
						{
							strokeDasharray: '0 1400',
							display: 'block',
						},
						{
							strokeDasharray: '1457 1400',
							delay: 0.25,
							duration: 4,
						}
					)
					.set(USER_INDICATORS[0], {
						strokeDasharray: '0 1400',
					});
			} else {
				setActive((prev) => prev + 1);
				gsap
					.timeline()
					.fromTo(
						USER_INDICATORS[active + 1],
						{
							strokeDasharray: '0 1400',
							display: 'block',
						},
						{
							strokeDasharray: '1457 1400',
							delay: 0.25,
							duration: 4,
						}
					)
					.set(USER_INDICATORS[active + 1], {
						strokeDasharray: '0 1400',
					});
			}
		}, 4000);

		return () => clearInterval(interval);
	}, [active]);

	return (
		<section
			id='thrive'
			className='bg-[linear-gradient(180deg,#000000_0%,#0A182D_100%)] 
      px-gutter pt-[max(7.5rem,84px)] pb-[max(5.25rem,48px)]
  '>
			<Tag color='lemon'>Thrive</Tag>

			<div className='flex items-start justify-between'>
				<div className='max-w-[max(52.375rem,430px)]'>
					<div className='mt-[max(2rem,24px)]'>
						<div className='grid'>
							{[...Array(4)].map((_, i) => (
								<div
									className={`user-info col-start-1 row-start-1
								transition-opacity duration-1000 ease-in-out
								${i == active ? 'opacity-100' : 'opacity-0'}
								`}
									key={i}>
									<p
										className='text-[max(2.25rem,20px)] text-white 
                font-medium tracking-tight leading-[1.3]'>
										“Working with Abinhav was a game-changer for our team. His
										training went far beyond motivation, it gave us practical tools
										to shift the way we think, communicate, and approach challenges
										together.”
									</p>

									<div className='mt-[max(1.75rem,18px)]'>
										<h2 className='text-white-80 text-24 tracking-tight'>
											Michael Chen
										</h2>
										<p className='text-[#FFFFFF66] text-base mt-[4px]'>
											Operations Lead at NovaTech
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='flex items-center mt-[max(3rem,32px)] gap-[max(1rem,14px)] w-max'>
						{[...Array(4)].map((_, i) => (
							<button
								className='relative'
								key={i}
								onClick={(e) => {
									setActive(i);
									prevActive.current = i;

									const INDICATORS = gsap.utils.toArray(
										'.user-indicator'
									) as Element[];

									INDICATORS.forEach((ind) => {
										gsap.set(ind, {
											strokeDasharray: '0 1400',
											display: 'none',
										});

										gsap
											.timeline()
											.fromTo(
												e.currentTarget.querySelector('circle'),
												{
													strokeDasharray: '0 1400',
													display: 'block',
												},
												{
													strokeDasharray: '1457 1400',
													delay: 0.25,
													duration: 4,
												}
											)
											.set(e.currentTarget.querySelector('circle'), {
												strokeDasharray: '0 1400',
											});
									});

									// ISAUTOCHANGING.current = true;
								}}>
								<Image
									src={`/images/user-${i + 1}.${i == 0 ? 'jpeg' : 'jpg'}`}
									width={48}
									height={48}
									alt='user image'
									className='rounded-full size-[max(3rem,32px)] object-cover object-center'
								/>
								<svg
									viewBox='0 0 800 800'
									xmlns='http://www.w3.org/2000/svg'
									className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
								h-full w-full scale-[2.5] -rotate-[80deg]
								'>
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
					{[...Array(4)].map((_, i) => (
						<figure
							className={`col-start-1 row-start-1 user-image
						transition-opacity duration-1000 ease-in-out
								${i == active ? 'opacity-100' : 'opacity-0'}
						`}
							key={i}>
							<Image
								src={`/images/user-${i + 1}.${i == 0 ? 'jpeg' : 'jpg'}`}
								width={400}
								height={400}
								alt='user image'
								className='rounded-full min-w-[25rem] h-[25rem] 
								object-cover object-center w-[25rem]'
							/>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}
