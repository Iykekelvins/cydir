'use client';

import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import { SplitText } from 'gsap/SplitText';

import gsap from 'gsap';

type PolymorphicProps<T extends React.ElementType> = {
	as?: T;
	children?: React.ReactNode;
	start?: string;
	playWhen?: boolean;
	play?: boolean;
	large?: boolean;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children'>;

const Paragraph = <T extends React.ElementType = 'p'>({
	as,
	children,
	play,
	playWhen,
	large,
	start = '-15%',
	...props
}: PolymorphicProps<T>) => {
	const Component = as || 'p';
	const paragraph = useRef<HTMLDivElement>(null);
	const tween = useRef<GSAPTween>(null);

	useGSAP(
		() => {
			if (paragraph.current) {
				gsap.set(paragraph.current, {
					opacity: 1,
				});
			}

			if (!playWhen) {
				const split = SplitText.create(paragraph.current, {
					type: 'lines',
					mask: 'lines',
				});

				gsap.set(split.lines, {
					y: '100%',
					willChange: 'transform',
					rotate: large ? '1.5deg' : undefined,
				});

				const observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								gsap.to(split.lines, {
									y: 0,
									stagger: 0.1,
									ease: 'power1.out',
									rotate: large ? '0deg' : undefined,
									duration: 0.75,
									onComplete: () => {
										gsap.set(split.lines, {
											clearProps: 'transform,wilChange,rotate',
										});
									},
								});

								observer.unobserve(entry.target);
							}
						});
					},
					{
						rootMargin: `0px 0px ${start} 0px`,
						threshold: 0,
					}
				);

				if (paragraph.current) {
					observer.observe(paragraph.current);
				}
			} else {
				const split = SplitText.create(paragraph.current, {
					type: 'lines',
					mask: 'lines',
				});

				gsap.set(paragraph.current, {
					opacity: 1,
				});

				gsap.set(split.lines, {
					y: '100%',
					willChange: 'transform',
					rotate: large ? '1.5deg' : undefined,
				});

				tween.current = gsap.to(split.lines, {
					y: 0,
					stagger: 0.1,
					ease: 'power1.out',
					rotate: large ? '0deg' : undefined,
					duration: 0.75,
					onComplete: () => {
						gsap.set(split.lines, {
							clearProps: 'transform,wilChange,rotate',
						});
					},
				});

				tween.current?.pause();
			}
		},
		{
			scope: paragraph,
			dependencies: [large, playWhen, start],
		}
	);

	useEffect(() => {
		if (play) {
			tween.current?.play();
		}
	}, [play]);

	return (
		<Component
			{...props}
			ref={paragraph}
			style={{
				opacity: 0,
			}}>
			{children}
		</Component>
	);
};

export default Paragraph;
