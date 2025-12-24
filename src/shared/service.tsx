'use client';

import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { useLenis } from 'lenis/react';
import { useProvider } from '@/app/context';

import Tag from '@/components/tag';
import Button from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { PrismicRichText } from '@prismicio/react';

export default function Service() {
	const lenis = useLenis();

	const { openServicesModal, setOpenServicesModal, service } = useProvider();

	const containerRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		gsap.set(containerRef.current, {
			opacity: 1,
			delay: 2,
		});
		gsap.set(modalRef.current, {
			clipPath: 'polygon(0% 100.3%, 100.2% 100.3%, 100.2% 100.3%, 0% 100%)',
		});
	});

	useEffect(() => {
		if (!lenis) return;

		if (openServicesModal) {
			lenis?.stop();

			gsap.fromTo(
				modalRef.current,
				{
					clipPath: 'polygon(0% 100.3%, 100.2% 100.3%, 100.2% 100.3%, 0% 100%)',
				},
				{
					clipPath: 'polygon(0% 100.3%, 100.2% 100.3%, 100.2% 0%, 0% 0%)',
					duration: 1,
					ease: 'power4.inOut',
				}
			);
		} else {
			lenis?.start();
			gsap.to(modalRef.current, {
				clipPath: 'polygon(0% 0%, 100.2% 0%, 100.2% 0%, 0% 0%)',
				duration: 1,
				ease: 'power4.inOut',
			});
		}
	}, [openServicesModal, lenis]);

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full z-50
      p-6 flex items-center justify-center opacity-0 ${
				openServicesModal ? 'pointer-events-auto' : 'pointer-events-none'
			}
    `}
			ref={containerRef}>
			<div
				className={`bg-[#0A182D66] transition-opacity duration-500 ease-in-out
          absolute top-0 left-0 w-full h-full
        ${openServicesModal ? 'opacity-100' : 'opacity-0'}
        `}
			/>
			<div
				className='bg-white w-full  pl-gutter
      pr-[max(3.75rem,20px)] pb-gutter pt-[max(4rem,50px)] relative
      overflow-y-auto hide-scroll h-full max-[65rem]:h-auto max-sm:h-full
      '
				// flex flex-col justify-center
				ref={modalRef}
				data-lenis-prevent>
				<button
					onClick={() => setOpenServicesModal(false)}
					className='absolute top-[max(2.5rem,16px)] right-[max(2.5rem,16px)]'
					aria-label='Close the modal displaying more info about the selected service'>
					<svg
						width='60'
						height='60'
						viewBox='0 0 60 60'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='size-[max(3.25rem,32px)]'>
						<path
							d='M30 3.75C15.375 3.75 3.75 15.375 3.75 30C3.75 44.625 15.375 56.25 30 56.25C44.625 56.25 56.25 44.625 56.25 30C56.25 15.375 44.625 3.75 30 3.75ZM40.125 43.125L30 33L19.875 43.125L16.875 40.125L27 30L16.875 19.875L19.875 16.875L30 27L40.125 16.875L43.125 19.875L33 30L43.125 40.125L40.125 43.125Z'
							fill='#1B3864'
						/>
					</svg>
				</button>

				{service && (
					<>
						<Tag color='blue'>{service?.tag_text}</Tag>

						<div className='grid md:grid-cols-[1.2fr_1fr] gap-gutter'>
							<div>
								<h2
									className='text-60 text-blue font-medium font-outfit
              tracking-tighter leading-[1.3] mt-[max(0.75rem,12px)]
              '>
									{service?.full_title}
								</h2>

								<PrismicRichText
									field={service.full_info}
									components={{
										paragraph: ({ children }: { children: React.ReactNode }) => (
											<p
												className='text-20 text-[#0B192DCC] font-medium 
              tracking-tighter leading-[1.4] mt-[max(2.075rem,18px)]
              max-w-[max(38.75rem,620px)]
              '>
												{children}
											</p>
										),
									}}
								/>

								<Link
									href='https://calendly.com/aj-cydir/discovery-call'
									target='_blank'
									rel='noopener'>
									<Button
										bg='blue'
										className='mt-[max(2.075rem,18px)] hidden md:block'>
										{service.button_text}
									</Button>
								</Link>
							</div>

							<div>
								<p
									className='text-20 text-[#0B192DCC] font-extrabold 
              tracking-tighter leading-[1.4] max-w-[max(36rem,576px)]
							'>
									{service?.features_title}
								</p>

								<ul
									className='text-20 text-[#0B192DCC] font-medium 
              tracking-tighter leading-[1.4] list-disc
              ml-[max(2rem,14px)]
              '>
									<PrismicRichText
										field={service.features_list}
										components={{
											listItem: ({ children }: { children: React.ReactNode }) => (
												<li className='list-disc'>{children}</li>
											),
										}}
									/>
								</ul>

								<Link
									className='mt-[max(2.075rem,24px)] block md:hidden'
									href='https://calendly.com/aj-cydir/discovery-call'
									target='_blank'
									rel='noopener'>
									<Button bg='blue'>{service?.button_text}</Button>
								</Link>

								<figure className='mt-[max(2.075rem,24px)]'>
									<Image
										src={service!.image.url as string}
										width={576}
										height={370}
										alt={service.image.alt as string}
										className='h-[max(25.125rem,210px)] w-full object-cover rounded-[max(0.75rem,12px)]'
									/>
								</figure>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
