import Button from '@/components/button';
import Tag from '@/components/tag';
import Image from 'next/image';

export default function Transform() {
	return (
		<section
			className='px-gutter pt-[max(6.25rem,_74px)] pb-[max(5rem,_64px)]'
			id='transform'>
			<div className='flex flex-col items-center justify-center text-center'>
				<Tag color='blue'>Transform</Tag>
				<h2 className='text-60 text-blue font-medium font-outfit tracking-tight mt-[max(1rem,_16px)]'>
					Our Services
				</h2>
				<p
					className='text-20 text-[#0B192DCC] tracking-tight 
        leading-[1.4] max-w-[max(38.75rem,_400px)] mt-[max(1.5rem,_20px)]'>
					Manifestation is more than wishing it&apos;s about aligning your thoughts,
					beliefs, and actions with your highest vision.
				</p>
			</div>

			<div className='grid md:grid-cols-2 gap-[max(1.5rem,_20px)] mt-[max(2.25rem,_28px)]'>
				<div className='relative'>
					<figure>
						<Image
							src='/images/one-on-one.jpg'
							width={628}
							height={552}
							alt='two hands around a red sun'
							className='w-full'
						/>
					</figure>
					<div
						className='absolute bottom-[max(2.825rem,_30px)] px-[max(2.125rem,_18px)] 
								max-w-[max(37.7rem,_360px)]'>
						<h3 className='text-white text-[max(2rem,_24px)] font-semibold tracking-tight'>
							One-on-one Coaching
						</h3>
						<p
							className='text-[#B3B3B3] text-20 font-medium tracking-tight 
						mt-[max(10px,_0.625rem)] leading-[1.5]'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard{' '}
						</p>
						<Button
							bg='lemon'
							className='mt-[max(1.5rem,_20px)] h-[max(2.5rem,_36px)]'>
							Book Now
						</Button>
					</div>
				</div>
				<div className='relative'>
					<figure>
						<Image
							src='/images/event-and-workshops.jpg'
							width={628}
							height={552}
							alt='a man on stage addressing an audience'
							className='w-full'
						/>
					</figure>

					<div
						className='absolute bottom-[max(2.825rem,_30px)] px-[max(2.125rem,_18px)] 
								max-w-[max(37.7rem,_360px)]'>
						<h3 className='text-white text-[max(2rem,_24px)] font-semibold tracking-tight'>
							Events and Workshops
						</h3>
						<p
							className='text-[#B3B3B3] text-20 font-medium tracking-tight 
						mt-[max(10px,_0.625rem)] leading-[1.5]'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard{' '}
						</p>
						<Button
							bg='lemon'
							className='mt-[max(1.5rem,_20px)] h-[max(2.5rem,_36px)]'>
							Register Now
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
