import Image from 'next/image';
import Content from './content';

export default function PrivacyPolicy() {
	return (
		<div className='relative z-12'>
			<section className='relative overflow-hidden'>
				<figure>
					<Image
						src='/images/privacy-hero.jpg'
						width={1440}
						height={493}
						alt='Abhinav speaking to a crowd'
						className='w-full h-[max(30.813rem,380px)] object-cover'
					/>
				</figure>
				<div className='absolute bottom-[max(4rem,32px)] px-gutter z-2 w-full'>
					<div className='flex items-center justify-between'>
						<h1
							className='text-white text-64 font-semibold font-outfit
						tracking-tighter
						'>
							Privacy Policy
						</h1>
						<p className='text-20 text-white'>Updated 19/12/2025</p>
					</div>
				</div>
				<div
					className='bg-[#00000099] absolute 
				top-0 left-0 w-full h-full pointer-events-none'
				/>
			</section>

			<Content />
		</div>
	);
}
