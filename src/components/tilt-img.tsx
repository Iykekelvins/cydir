'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

import Image from 'next/image';
import gsap from 'gsap';

export default function TiltImg({
	imgSrc,
	width,
	height,
	alt,
	imgClass,
}: {
	imgSrc: string;
	width: number;
	height: number;
	alt: string;
	imgClass?: string;
}) {
	const figureRef = useRef<HTMLElement>(null);
	const imgRef = useRef<HTMLImageElement>(null);

	useGSAP(
		() => {
			if (!figureRef.current) return;

			gsap.set(imgRef.current, {
				transformPerspective: 900,
				transformOrigin: 'center',
			});

			const handleMouseEnter = (e: MouseEvent) => {
				const rect = figureRef.current!.getBoundingClientRect();

				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;

				const centerX = rect.width / 2;
				const centerY = rect.height / 2;

				const tiltX = ((y - centerY) / centerY) * 20;
				const tiltY = ((centerX - x) / centerX) * 20;

				if (imgRef.current) {
					gsap.to(imgRef.current, {
						duration: 0.6,
						rotationY: tiltY,
						rotationX: tiltX,
						ease: 'power1.out',
					});
				}
			};

			const handleMouseLeave = () => {
				if (imgRef.current) {
					gsap.to(imgRef.current, {
						duration: 0.6,
						rotationY: 0,
						rotationX: 0,
						ease: 'power1.out',
					});
				}
			};

			// if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
			figureRef.current.addEventListener('mousemove', handleMouseEnter);
			figureRef.current.addEventListener('mouseleave', handleMouseLeave);

			figureRef.current.addEventListener('click', handleMouseEnter);
			figureRef.current.addEventListener('mouseleave', handleMouseLeave);
			// }

			const ref = figureRef.current;

			return () => {
				ref.removeEventListener('mousemove', handleMouseEnter);
				ref.removeEventListener('click', handleMouseEnter);
				ref.removeEventListener('mouseleave', handleMouseLeave);
			};
		},
		{
			scope: figureRef,
		}
	);

	return (
		<figure ref={figureRef}>
			<Image
				src={imgSrc}
				width={width}
				height={height}
				alt={alt}
				ref={imgRef}
				className={imgClass}
			/>
		</figure>
	);
}
