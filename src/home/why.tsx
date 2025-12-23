import { WhySectionSliceDefaultPrimary } from '../../prismicio-types';

import Tag from '@/components/tag';
import TiltImg from '@/components/tilt-img';

export default function Transformation({
	why,
}: {
	why: WhySectionSliceDefaultPrimary;
}) {
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
					{why.left_text}
				</p>
				<TiltImg
					imgSrc={why.image.url as string}
					width={480}
					height={480}
					alt={why.image.alt as string}
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
					{why.central_text}
				</p>
			</div>
		</section>
	);
}
