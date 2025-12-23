import { AboutSectionSliceDefaultPrimary } from '../../prismicio-types';
import { PrismicRichText } from '@prismicio/react';

import Words from '@/animations/words';
import Tag from '@/components/tag';
import Image from 'next/image';

export default function About({
	about,
}: {
	about: AboutSectionSliceDefaultPrimary;
}) {
	return (
		<section
			id='about'
			className='bg-[linear-gradient(180deg,#0A182D_0%,#000000_100%)]
      px-gutter pt-[max(5.625rem,74px)] pb-[max(40px,2.5rem)] md:pb-0
			relative z-12
      '>
			<div className='flex flex-col items-center justify-center text-center'>
				<Tag color='lemon'>About</Tag>
			</div>

			<div
				className='flex flex-col-reverse md:flex-row
			 justify-between gap-[max(2rem,24px)] 
			mt-[max(4.688rem,40px)]'>
				<p
					className='text-48 font-outfit tracking-tighter 
				font-medium leading-[1.3] text-white max-w-[max(50rem,550px)]'>
					{about.info}
				</p>

				<figure>
					<Image
						src={about.image.url as string}
						width={412}
						height={412}
						alt={about.image.alt as string}
						className='rounded-full min-w-[25.75rem]'
					/>
				</figure>
			</div>

			<div
				className='flex flex-col gap-[max(5rem,30px)] md:flex-row lg:items-center 
			justify-between max-md:mt-0 max-lg:mt-[max(40px,2.5rem)] mt-[max(6.25rem,70px)]'>
				<figure>
					<Image
						src={about.bio_image.url as string}
						width={574}
						height={800}
						alt={about.bio_image.alt as string}
						className='min-w-[35.875rem]'
					/>
				</figure>

				<div className='max-w-[max(38.625rem,490px)] w-full'>
					<PrismicRichText
						field={about.bio_info}
						components={{
							paragraph: ({ children }: { children: React.ReactNode }) => (
								<p
									className='text-white-80 text-[max(1.375rem,18px)] 
					tracking-tight leading-[1.6]'>
									{children}
								</p>
							),
						}}
					/>

					<div className='flex justify-between mt-[max(3rem,44px)] des:mt-0'>
						<div className='des:mt-[max(3rem,44px)]'>
							<Words
								as='h3'
								className='text-white text-28 font-medium tracking-tight'>
								{about.name}
							</Words>
							<Words
								as='p'
								className='text-20 text-[#D3D3D3] font-medium tracking-tight mt-[max(0.25rem,4px)]'>
								{about.occupation}
							</Words>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
