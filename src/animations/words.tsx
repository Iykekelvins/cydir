'use client';

import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

import gsap from 'gsap';

type PolymorphicProps<T extends React.ElementType> = {
	as?: T;
	children?: React.ReactNode;
	start?: string;
	playWhen?: boolean;
	play?: boolean;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children'>;

const Words = <T extends React.ElementType = 'h2'>({
	as,
	play,
	playWhen,
	children,
	start = '-15%',
	...props
}: PolymorphicProps<T>) => {
	const Component = as || 'h2';
	const sentence = useRef<HTMLDivElement>(null);
	const tween = useRef<GSAPTween>(null);

	useGSAP(
		() => {
			if (sentence.current) {
				gsap.set(sentence.current, {
					opacity: 1,
				});
			}

			if (!playWhen) {
				const split = SplitText.create(sentence.current, {
					type: 'lines,words',
					mask: 'lines',
				});

				gsap.set(split.words, {
					y: '100%',
					willChange: 'transform',
				});

				const observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								gsap.to(split.words, {
									y: 0,
									stagger: 0.1,
									duration: 0.75,
									ease: 'power1.out',
									onComplete: () => {
										split.revert();
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

				if (sentence.current) {
					observer.observe(sentence.current);
				}
			} else {
				const split = SplitText.create(sentence.current, {
					type: 'lines,words',
					mask: 'lines',
				});

				gsap.set(split.words, {
					y: '100%',
					willChange: 'transform',
				});

				tween.current = gsap.to(split.words, {
					y: 0,
					stagger: 0.1,
					duration: 0.75,
					ease: 'power1.out',
					onComplete: () => {
						split.revert();
					},
				});

				tween.current.pause();
			}
		},
		{
			scope: sentence,
			dependencies: [start, play, playWhen],
		}
	);

	useEffect(() => {
		if (play) {
			tween.current?.play();
		}
	}, [play]);

	return (
		<Component
			ref={sentence}
			{...props}
			style={{
				opacity: 0,
			}}>
			{children}
		</Component>
	);
};

export default Words;
