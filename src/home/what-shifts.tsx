'use client';

import { useEffect, useRef, useState } from 'react';
import { WhatShiftsSectionSliceDefaultPrimary } from '../../prismicio-types';
import { KeyTextField } from '@prismicio/client';

import Paragraph from '@/animations/paragraph';
import Words from '@/animations/words';
import gsap from 'gsap';
import Image from 'next/image';

export default function WhatShifts({
	what_shifts,
}: {
	what_shifts: WhatShiftsSectionSliceDefaultPrimary;
}) {
	return (
		<section className='relative z-20 px-gutter pt-[max(6rem,56px)] pb-[max(12.2rem,85px)]'>
			<div className='flex flex-col items-center justify-center text-center'>
				<Words
					as='h2'
					className='text-blue text-60 font-medium font-outfit tracking-tighter leading-[1.11]
          max-w-[max(46.625rem,500px)]
          '>
					{what_shifts.title}
				</Words>
				<Paragraph
					className='text-20 tracking-tighter max-w-[max(35.75rem,320px)] 
        mt-[max(1.875rem,20px)] leading-[1.4]'>
					{what_shifts.info}
				</Paragraph>
			</div>

			<div
				className='flex flex-col-reverse md:grid grid-cols-2 lg:grid-cols-[1.2fr_1fr]
      mt-[max(5rem,42px)] gap-[max(3rem,32px)] 
      '>
				<ul className='grid gap-[max(0.75rem,12px)]'>
					{what_shifts.dropdown_items.map((feature) => (
						<Feature key={feature.title} {...feature} />
					))}
				</ul>
				<figure>
					<Image
						src={what_shifts.image.url as string}
						width={604}
						height={618}
						alt={what_shifts.image.alt as string}
						className='min-[90rem]:min-h-[max(38.625rem,600px)] object-cover 
            rounded-[max(1.5rem,18px)] w-full'
					/>
				</figure>
			</div>
		</section>
	);
}

const Feature = ({ title, info }: { title: KeyTextField; info: KeyTextField }) => {
	const infoRef = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (open) {
			gsap.to(infoRef.current, {
				height: 'auto',
				ease: 'none',
				duration: 0.3,
			});
		} else {
			gsap.to(infoRef.current, {
				height: 0,
				ease: 'none',
				duration: 0.3,
			});
		}
	}, [open]);

	return (
		<li
			className={`transition-all duration-300 ease-out
      border-[0.2] border-blue border-solid rounded-[max(0.5rem,8px)]
      ${open ? 'bg-[#0A182D] text-white' : 'text-blue bg-[#FAFAFA]'}`}>
			<button
				onClick={() => setOpen(!open)}
				className='w-full py-[max(1.375rem,16px)] px-[max(1.5rem,18px)]'>
				<div className='flex items-center justify-between'>
					<h3 className='text-28 font-semibold tracking-tighter leading-[1.3]'>
						{title}
					</h3>
					<div className='grid'>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={`col-start-1 row-start-1 transition-opacity duration-300
              ease-out ${open ? 'opacity-0' : ''} size-[max(1.25rem,18px)]  
              `}>
							<path
								d='M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z'
								fill='#7C7C7C'
							/>
						</svg>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={`col-start-1 row-start-1 transition-opacity duration-300
              ease-out ${
								open ? 'opacity-100' : 'opacity-0'
							} size-[max(1.25rem,18px)] 
              `}>
							<path
								d='M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z'
								fill='white'
							/>
						</svg>
					</div>
				</div>

				<div className='h-0 overflow-hidden' ref={infoRef}>
					<p className='text-20 tracking-tighter leading-normal text-left pt-[max(0.75rem,12px)]'>
						{info}
					</p>
				</div>
			</button>
		</li>
	);
};
