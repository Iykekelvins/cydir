import Tag from '@/components/tag';
import TiltImg from '@/components/tilt-img';

export default function Transformation() {
	return (
		<section
			className='pt-[max(6rem,56px)] px-gutter pb-[max(9rem,80px)]
			bg-[linear-gradient(322.88deg,#000000_3.72%,#091529_96.71%)]
			
			'
			id='why'>
			<div className='flex items-center justify-center'>
				<Tag color='lemon'>Why</Tag>
			</div>

			<div
				className='flex items-center justify-between mt-[max(4.625rem,40px)]
			flex-col lg:flex-row gap-[max(2.5rem,32px)] des:pr-10
			'>
				<p
					className='text-36 font-medium tracking-tighter leading-normal
				text-white max-w-[max(43.625rem,380px)] text-center lg:text-left
				'>
					Most people try to create change by force. Setting goals, repeating
					affirmations, pushing harder. But real transformation doesn&apos;t happen
					through effort alone. It begins when the unconscious patterns and emotional
					blocks that drive your behavior start to shift.
				</p>
				<TiltImg
					imgSrc='/images/transformation.jpg'
					width={480}
					height={480}
					alt='AI generated image of a human head with its brain glowing'
					imgClass='lg:min-w-120 rounded-full
						max-[49rem]:w-3xl max-sm:w-full
						relative z-12
						'
				/>
			</div>

			<div className='mt-[max(6rem,40px)] flex justify-center'>
				<p
					className='text-36 font-medium tracking-tighter leading-normal
				text-white max-w-[max(43.625rem,380px)] text-center 
				'>
					As those deeper programs change, life feels lighter, clearer, and more
					aligned with who you truly are. That&apos;s the essence of our work:
					guiding you to step into your power as the conscious creator of your life
					so you can convert your dreams into reality. 
				</p>
			</div>
		</section>
	);
}
