'use client';

import { useProvider } from '@/app/context';
import { ServicesSectionSliceDefaultPrimary } from '../../prismicio-types';

import Paragraph from '@/animations/paragraph';
import Words from '@/animations/words';
import Button from '@/components/button';
import Tag from '@/components/tag';
import gsap from 'gsap';
import Image from 'next/image';

export default function Services({
	services,
}: {
	services: ServicesSectionSliceDefaultPrimary;
}) {
	const mm = gsap.matchMedia();

	const { setOpenServicesModal, setService } = useProvider();

	const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
		const IMAGE = e.currentTarget.querySelector('img');

		mm.add('(min-width: 1200px)', () => {
			gsap.to(IMAGE, {
				scale: 1.15,
				duration: 0.7,
			});
		});
	};

	const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
		const IMAGE = e.currentTarget.querySelector('img');

		mm.add('(min-width: 1200px)', () => {
			gsap.to(IMAGE, {
				scale: 1,
				duration: 0.7,
			});
		});
	};

	return (
		<section
			className='px-gutter pt-[max(6.25rem,74px)] pb-[max(5rem,64px)]
			relative z-12
			'
			id='services'>
			<div className='flex flex-col items-center justify-center text-center'>
				<Tag color='blue'>Services</Tag>
				<Words
					as='h2'
					className='text-60 text-blue font-medium font-outfit tracking-tight mt-[max(1rem,16px)]'>
					{services.title}
				</Words>
				<Paragraph
					className='text-20 text-[#0B192DCC] tracking-tight 
        leading-[1.4] max-w-[max(38.75rem,400px)] mt-[max(1.5rem,20px)]'>
					{services.info}
				</Paragraph>
			</div>

			<div className='grid md:grid-cols-2 gap-[max(1.5rem,20px)] mt-[max(2.25rem,28px)]'>
				{services.services.map((svc, i) => (
					<div
						key={i}
						className='relative overflow-hidden rounded-[max(0.75rem,12px)] cursor-pointer'
						onMouseOver={(e) => handleMouseOver(e)}
						onMouseLeave={(e) => handleMouseLeave(e)}
						role='button'
						onClick={() => {
							setOpenServicesModal(true);
							setService(svc);
						}}>
						<figure>
							<Image
								src={svc.image.url as string}
								width={628}
								height={552}
								alt={(svc.image.alt as string) || ''}
								className='w-full rounded-[max(0.75rem,12px)]
							'
							/>
						</figure>
						<div
							className='absolute bottom-[max(2.825rem,30px)] px-[max(2.125rem,18px)] 
								max-w-[max(37.7rem,360px)]'>
							<h3 className='text-white text-[max(2rem,24px)] font-semibold tracking-tight'>
								{svc.card_title}
							</h3>
							<p
								className='text-[#B3B3B3] text-20 font-medium tracking-tight 
						mt-[max(10px,0.625rem)] leading-normal'>
								{svc.card_info}
							</p>
							<Button
								bg='lemon'
								className='mt-[max(1.5rem,20px)] h-[max(2.5rem,36px)]'>
								Learn More
							</Button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
