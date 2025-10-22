'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import gsap from 'gsap';

type PolymorphicProps<T extends React.ElementType> = {
	as?: T;
	children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children'>;

gsap.registerPlugin(ScrollTrigger);

const Scale = <T extends React.ElementType = 'p'>({
	as,
	children,
	...props
}: PolymorphicProps<T>) => {
	const Component = as || 'p';
	const element = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.set(element.current, {
				scale: 0,
				opacity: 1,
				transformOrigin: '50% 50%',
				willChange: 'transform',
			});

			ScrollTrigger.create({
				trigger: element.current,
				start: 'top 95%',
				onEnter: () => {
					gsap.to(element.current, {
						scale: 1,
						ease: 'back.out(2)',
						duration: 1,
						onComplete: () => {
							gsap.set(element.current, {
								clearProps: 'all',
							});
						},
					});
				},
			});
		},
		{
			scope: element,
		}
	);

	return (
		<Component
			{...props}
			ref={element}
			style={{
				opacity: 0,
			}}>
			{children}
		</Component>
	);
};

export default Scale;
