'use client';

import { useProvider } from '@/app/context';

import Paragraph from '@/animations/paragraph';
import Words from '@/animations/words';
import Button from '@/components/button';
import Tag from '@/components/tag';
import gsap from 'gsap';
import Image from 'next/image';

export default function Transform() {
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

	const SERVICE_ONE = {
		tag: 'Private Coaching',
		title: 'Empowerment Coaching – Action, Focus & Fulfillment',
		info: `
		The purpose of 1-on-1 Empowerment Coaching is for you to become your best version and consciously create success and fulfillment in your life. 
<br/><br/>
In 1-on-1 Empowerment Coaching, we translate your breakthroughs into focused action. This process is designed to guide you through the four steps of change, which is releasing what's holding you back, creating a compelling future that aligns with who you are, guidance while taking purposeful action and maintaining positive focus on achieving your goals.
		`,
		featuresTitle: 'What you will experience',
		features: [
			'Consistent accountability to turn insight into action',
			'Tools to navigate change with confidence and simplicity',
			'Clear direction and renewed focus on your priorities',
			'A deeper sense of fulfillment, purpose, and momentum',
			'Actionable guidance to build steady progress',
			'Benefit from Abhinav’s eight years of business mastery for clarity, strategy, and confident action.',
		],
		btnText: 'Book your pre coaching interview.',
		bookingLink: '',
		img: '/images/one-on-one.jpg',
		alt: 'two hands around a red sun',
	};

	const SERVICE_TWO = {
		tag: 'Breakthrough Session',
		title: "Breakthrough Session - Awaken What's Possible",
		info: `
		According to neuroscience - 95% of our life is on autopilot being
							driven by our unconscious mind. In the Breakthrough Session, we go
							beyond surface symptoms to uncover and release the deeper patterns
							behind your challenges including emotional baggage, limiting beliefs,
							trauma, and other internal conflicts.
<br/><br/>
	Together, we remove what's been holding you back, both what
							you're aware of and the deeper patterns you may not even realize
							are there.
		`,
		featuresTitle:
			'When free of your baggage and limiting beliefs clients experience:',
		features: [
			'A renewed sense of freedom, confidence and trust from letting go of old emotional weight',
			'New clarity in how you see yourself and what truly matters',
			'A deeper connection to purpose, peace, and possibility',
			'Motivation that feels natural, not forced',
		],
		btnText: 'Book your discovery call.',
		bookingLink: '',
		img: '/images/event-and-workshops.jpg',
		alt: 'a man on stage addressing an audience',
	};

	return (
		<section
			className='px-gutter pt-[max(6.25rem,74px)] pb-[max(5rem,64px)]
			relative z-12
			'
			id='transform'>
			<div className='flex flex-col items-center justify-center text-center'>
				<Tag color='blue'>Transform</Tag>
				<Words
					as='h2'
					className='text-60 text-blue font-medium font-outfit tracking-tight mt-[max(1rem,16px)]'>
					Our Services
				</Words>
				<Paragraph
					className='text-20 text-[#0B192DCC] tracking-tight 
        leading-[1.4] max-w-[max(38.75rem,400px)] mt-[max(1.5rem,20px)]'>
					Abhinav offers curated experiences designed to create real, sustainable
					change and guide you step into self-mastery, purpose, and limitless
					potential.
				</Paragraph>
			</div>

			<div className='grid md:grid-cols-2 gap-[max(1.5rem,20px)] mt-[max(2.25rem,28px)]'>
				<div
					className='relative overflow-hidden rounded-[max(0.75rem,12px)]'
					onMouseOver={(e) => handleMouseOver(e)}
					onMouseLeave={(e) => handleMouseLeave(e)}>
					<figure>
						<Image
							src='/images/one-on-one.jpg'
							width={628}
							height={552}
							alt='two hands around a red sun'
							className='w-full rounded-[max(0.75rem,12px)]
							'
						/>
					</figure>
					<div
						className='absolute bottom-[max(2.825rem,30px)] px-[max(2.125rem,18px)] 
								max-w-[max(37.7rem,360px)]'>
						<h3 className='text-white text-[max(2rem,24px)] font-semibold tracking-tight'>
							1:1 Empowerment Coaching
						</h3>
						<p
							className='text-[#B3B3B3] text-20 font-medium tracking-tight 
						mt-[max(10px,0.625rem)] leading-normal'>
							A one-on-one partnership for those ready to create both success and
							fulfillment. Abhinav will guide you to take action toward your goals,
							embrace self-mastery, and become the best version of yourself.
						</p>
						<Button
							bg='lemon'
							className='mt-[max(1.5rem,20px)] h-[max(2.5rem,36px)]'
							onClick={() => {
								setOpenServicesModal(true);
								setService(SERVICE_ONE);
							}}>
							Learn More
						</Button>
					</div>
				</div>

				<div
					className='relative overflow-hidden rounded-[max(0.75rem,12px)]'
					onMouseOver={(e) => handleMouseOver(e)}
					onMouseLeave={(e) => handleMouseLeave(e)}>
					<figure>
						<Image
							src='/images/event-and-workshops.jpg'
							width={628}
							height={552}
							alt='a man on stage addressing an audience'
							className='w-full rounded-[max(0.75rem,12px)]
							'
						/>
					</figure>

					<div
						className='absolute bottom-[max(2.825rem,30px)] px-[max(2.125rem,18px)] 
								max-w-[max(37.7rem,360px)] des:min-h-56 flex flex-col justify-between'>
						<div>
							<h3 className='text-white text-[max(2rem,24px)] font-semibold tracking-tight'>
								Breakthrough Session
							</h3>
							<p
								className='text-[#B3B3B3] text-20 font-medium tracking-tight 
						mt-[max(10px,0.625rem)] leading-normal'>
								A deep, focused experience that clears emotional blocks and restores
								inner strength. It&apos;s the reset that opens the door to clarity,
								confidence, and lasting transformation.
							</p>
						</div>

						<Button
							bg='lemon'
							className='mt-[max(1.5rem,20px)] h-[max(2.5rem,36px)] w-max'
							onClick={() => {
								setOpenServicesModal(true);
								setService(SERVICE_TWO);
							}}>
							Learn More
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
