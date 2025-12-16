'use client';

import Paragraph from '@/animations/paragraph';
import Words from '@/animations/words';
import Button from '@/components/button';
import Tag from '@/components/tag';

export default function JoinUs() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<section
			className='px-gutter bg-[#0A182D] pt-[max(34.075rem,450px)] pb-[max(4.2rem,30px)]
    mt-[min(-30rem,-400px)] relative z-12
    '>
			<div
				className='bg-[#EBEBEB] py-[max(4.875rem,36px)]
        rounded-[max(1.25rem,20px)] px-[max(4.5rem,28px)] overflow-hidden'>
				<div className='flex items-center justify-between'>
					<div
						className='max-w-[max(30rem,320px)] 
					md:min-w-[max(30rem,320px)] w-full relative z-2'>
						<Tag color='blue'>Join Us</Tag>
						<Words
							as='h2'
							className='text-blue font-medium font-outfit text-48 tracking-tight
            leading-[1.2] mt-[max(1rem,14px)]
            '>
							Growth is a journey best taken together.
						</Words>
						<Paragraph className='text-base text-[#0A182DCC] leading-normal mt-[max(1rem,14px)]'>
							Join our bi-weekly newsletter for practical tools, inspiration, and
							exclusive invites to events.
						</Paragraph>

						<form onSubmit={handleSubmit} className='mt-[max(2.5rem,30px)]'>
							<div className='flex flex-col sm:flex-row items-center gap-[max(0.5rem,8px)]'>
								<input
									type='text'
									className='border-[0.5] border-[#1B3864] border-solid rounded-full
                  h-[max(3rem,40px)] bg-[#F4FAFC] p-[max(0.75rem,12px)]
                  placeholder:text-[#222222] text-base font-medium
                  md:flex-[0.9] placeholder:opacity-30 w-full
                  '
									placeholder='Jessica@email.com'
								/>
								<Button bg='blue' className='h-[max(3rem,40px)] max-sm:w-full'>
									Subscribe
								</Button>
							</div>
						</form>
					</div>

					<div className='hidden md:block'>
						<video autoPlay muted playsInline loop className='scale-150'>
							<source src={'/videos/blob.mp4'} type='video/mp4' />
						</video>
					</div>
				</div>
			</div>
		</section>
	);
}
