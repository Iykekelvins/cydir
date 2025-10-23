import Paragraph from '@/animations/paragraph';
import Words from '@/animations/words';
import Tag from '@/components/tag';
import Image from 'next/image';

export default function Origin() {
	return (
		<section
			id='origin'
			className='bg-[linear-gradient(180deg,#0A182D_0%,#000000_100%)]
      px-gutter pt-[max(5.625rem,_74px)] pb-[40px] md:pb-0
			relative z-[12]
      '>
			<div className='flex flex-col items-center justify-center text-center'>
				<Tag color='lemon'>The Origin</Tag>
				<Words
					as='h2'
					className='text-[max(3.5rem,_32px)] text-white font-medium 
        font-outfit tracking-tight leading-[1.3] max-w-[max(40.95rem,_465px)] mt-[max(1.5rem,_20px)]'>
					“He sees your potential and shows you how to live it.”
				</Words>
			</div>

			<div
				className='flex flex-col gap-[max(5rem,30px)] md:flex-row items-center 
			justify-between max-md:mt-0 max-lg:mt-[40px] des:-mt-[10vh]'>
				<figure>
					<Image
						src='/images/origin-img.png'
						width={574}
						height={800}
						alt='Abinhav - Manifestation Coach'
						className='min-w-[35.875rem]'
					/>
				</figure>

				<div className='max-w-[max(38.625rem,490px)] w-full'>
					<Paragraph className='text-white-80 text-[max(1.375rem,18px)] tracking-tight leading-[1.6]'>
						Abhinav&apos;s journey began with a personal search for meaning and
						fulfillment. Facing his own challenges and setbacks, he discovered the
						transformative power of manifestation, Neuro-Linguistic Programming
						(NLP), and Mental Emotional Release (MER). Through these tools, Abhinav
						not only changed his own life but uncovered a deep passion for helping
						others do the same.
					</Paragraph>

					<div className='flex justify-between mt-[max(3rem,44px)] des:mt-0'>
						<div className='des:mt-[max(3rem,44px)]'>
							<Words
								as='h3'
								className='text-white text-28 font-medium tracking-tight'>
								Abinhav
							</Words>
							<Words
								as='p'
								className='text-20 text-[#D3D3D3] font-medium tracking-tight mt-[max(0.25rem,_4px)]'>
								Manifestation Coach
							</Words>
						</div>

						<figure>
							<Image
								src='/lemon-wheel.svg'
								width={223}
								height={223}
								alt='cydir large wheel icon'
								className='max-lg:w-[12rem] des:min-w-[13.938rem]'
							/>
						</figure>
					</div>
				</div>
			</div>
		</section>
	);
}
