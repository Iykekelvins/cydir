import Paragraph from '@/animations/paragraph';
import Words from '@/animations/words';

export default function WhatShifts() {
	return (
		<section className='relative z-2 px-gutter pt-[max(6rem,56px)] pb-[max(12.2rem,85px)]'>
			<div className='flex flex-col items-center justify-center text-center'>
				<Words
					as='h2'
					className='text-blue text-60 font-medium font-outfit tracking-tighter leading-[1.11]
          max-w-[max(46.625rem,500px)]
          '>
					What Shifts When You Work with Abhinav
				</Words>
				<Paragraph
					className='text-20 tracking-tighter max-w-[max(35.75rem,320px)] 
        mt-[max(1.875rem,20px)] leading-[1.4]'>
					Change begins beneath the surface. As emotional weight lifts and old
					patterns dissolve, new possibilities open not just in one area of life, but
					across all of it.
				</Paragraph>
			</div>
		</section>
	);
}
