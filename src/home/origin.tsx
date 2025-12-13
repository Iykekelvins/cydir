import Paragraph from '@/animations/paragraph';
import Words from '@/animations/words';
import Tag from '@/components/tag';
import Image from 'next/image';

export default function Origin() {
	return (
		<section
			id='origin'
			className='bg-[linear-gradient(180deg,#0A182D_0%,#000000_100%)]
      px-gutter pt-[max(5.625rem,74px)] pb-[40px] md:pb-0
			relative z-12
      '>
			<div className='flex flex-col items-center justify-center text-center'>
				<Tag color='lemon'>The Origin</Tag>
			</div>

			<div
				className='flex flex-col-reverse md:flex-row
			 justify-between gap-[max(2rem,24px)] 
			mt-[max(4.688rem,40px)]'>
				<Paragraph
					className='text-48 font-outfit tracking-tighter 
				font-medium leading-[1.3] text-white max-w-[max(50rem,550px)]'>
					“Most people go through life on autopilot, reacting, repeating, settling.
					Real change begins the moment you pause, get conscious, and choose
					differently. This work is an invitation to break patterns, expand
					possibilities, and live without limits.”
				</Paragraph>

				<figure>
					<Image
						src='/images/origin-circle.jpg'
						width={412}
						height={412}
						alt='Abinhav - Manifestation Coach'
						className='rounded-full min-w-[25.75rem]'
					/>
				</figure>
			</div>

			<div
				className='flex flex-col gap-[max(5rem,30px)] md:flex-row lg:items-center 
			justify-between max-md:mt-0 max-lg:mt-[40px] mt-[max(6.25rem,70px)]'>
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
					<Paragraph
						className='text-white-80 text-[max(1.375rem,18px)] 
					tracking-tight leading-[1.6]'>
						Abhinav&apos;s journey into this work began with a single question, what
						does it take to manifest life? What started as a search for clarity
						became a deep exploration of the mind and the emotions that shape every
						choice we make. Along the way, he discovered that transformation is not
						only about making conscious changes but making changes at the unconscious
						level. Having lived this shift himself, Abhinav now guides others to
						experience the same - to release what&apos;s been holding them back and
						reconnect with a sense of purpose that feels natural, not forced. His
						approach blends structure with empathy, bringing the science of the mind
						and the art of human understanding into one seamless process. With years
						of experience leading companies and developing high-performing teams, he
						bridges inner fulfilment with growth. His work is built on a simple
						truth: when the mind realigns, life follows. Guided by his belief: Be
						Limitless.
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
								className='text-20 text-[#D3D3D3] font-medium tracking-tight mt-[max(0.25rem,4px)]'>
								Manifestation Coach
							</Words>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
