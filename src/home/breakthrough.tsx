'use client';

import { cn } from '@/utils';
import { BREAKTHROUGH_ITEMS } from '@/utils/mock';

import Tag from '@/components/tag';
import Image from 'next/image';
import Button from '@/components/button';

export default function Breakthrough() {
	return (
		<section
			id='breakthrough'
			className={cn(
				'px-gutter pt-[max(6rem,_54px)] pb-[max(9rem,_80px)]',
				'bg-[linear-gradient(180deg,_#000000_0%,_#091529_100%)]',
				'relative overflow-hidden'
			)}>
			<div className='flex flex-col items-center justify-center text-center'>
				<Tag color='lemon'>Breakthrough</Tag>

				<h2
					className='text-60 text-white font-medium font-outfit 
        leading-[1.3] tracking-tight mt-[max(1rem,_16px)]'>
					This is Where the <br /> Shift Happens
				</h2>

				<p
					className='text-20 text-white-80 tracking-tight leading-[1.4] 
          max-w-[max(34.75rem,_380px)] mt-[max(1.25rem,_18px)]'>
					Our methods combine Neuro-Linguistic Programming (NLP) and Mental Emotional
					Release (MER) to help you
				</p>

				<ul className='mt-[max(5rem,_64px)] flex flex-col items-center gap-[max(7.075rem,_80px)]'>
					{BREAKTHROUGH_ITEMS.map((item) => (
						<li key={item.img} className='flex flex-col items-center'>
							<figure>
								<Image
									src={item.img}
									width={540}
									height={540}
									alt={`Image depicting ${item.title}`}
									className='rounded-full min-w-[33.75rem]'
								/>
							</figure>

							<div className='mt-[max(4rem,_32px)]'>
								<h3
									className='text-[max(3rem,_28px)] text-white font-outfit 
                font-medium tracking-tight leading-[1.3]'>
									{item.title}
								</h3>
								<p
									className='text-20 text-white-80 leading-[1.5] tracking-tight
                max-w-[max(41rem,_440px)] mt-[max(1.25rem,_18px)]
                '>
									{item.info}
								</p>
							</div>

							<Button bg='lemon' className='mt-[max(3rem,_36px)]'>
								Begin Your Journey
							</Button>
						</li>
					))}
				</ul>
			</div>

			<Journey />
		</section>
	);
}

const Journey = () => {
	return (
		<div className='mt-[max(9.625rem,_84px)]'>
			<div className='flex flex-col items-center justify-center text-center'>
				<span className='size-[max(2rem,_24px)] bg-lemon rounded-full' />
				<div className='mt-[max(1.5rem,_18px)]'>
					<h3 className='text-[max(2.25rem,_24px)] text-white font-medium tracking-tight'>
						Rewire
					</h3>
					<p
						className='text-white-80 text-20 leading-[1.5] tracking-tight 
          max-w-[max(28.75rem,_300px)] mt-[max(0.625rem,_10px)]'>
						Shift old patterns into empowering beliefs. Through NLP techniques,
						you&apos;ll retrain your mind to think, act, and respond with clarity and
						confidence.
					</p>
				</div>
			</div>

			<div
				className='mt-[max(6.625rem,_90px)] flex flex-col md:flex-row items-center 
      justify-between gap-[max(6.625rem,_90px)] md:gap-0'>
				<div className='flex flex-col items-center justify-center text-center des:opacity-40'>
					<span className='size-[max(2rem,_24px)] des:size-[max(1.25rem,_18px)] bg-lemon rounded-full' />
					<div className='mt-[max(1.5rem,_18px)]'>
						<h3 className='text-[max(2.25rem,_24px)] text-white font-medium tracking-tight'>
							Release
						</h3>
						<p
							className='text-white-80 text-20 leading-[1.5] tracking-tight 
          max-w-[max(24.875rem,_300px)] mt-[max(0.625rem,_10px)]'>
							Understanding your deepest motivations is the first step toward
							meaningful change. Through guided reflection and powerful coaching.
						</p>
					</div>
				</div>

				<figure className='hidden des:block'>
					<Image
						src='/wheel.svg'
						width={362}
						height={362}
						alt='spinning wheel'
						className='min-w-[22.625rem]'
					/>
				</figure>

				<div className='flex flex-col items-center justify-center text-center des:opacity-40'>
					<span className='size-[max(2rem,_24px)] des:size-[max(1.25rem,_18px)] bg-lemon rounded-full' />
					<div className='mt-[max(1.5rem,_18px)]'>
						<h3 className='text-[max(2.25rem,_24px)] text-white font-medium tracking-tight'>
							Build
						</h3>
						<p
							className='text-white-80 text-20 leading-[1.5] tracking-tight 
          max-w-[max(24.875rem,_300px)] mt-[max(0.625rem,_10px)]'>
							Create a foundation for success by setting meaningful goals and
							actionable steps. With structured coaching, you&apos;ll develop habits
							that last.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
