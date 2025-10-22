'use client';

import { useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const ScrollWrapper = ({ children }: { children: React.ReactNode }) => {
	const lenis = useLenis();

	useEffect(() => {
		window.scrollTo(0, 0);

		if ('scrollRestoration' in history) {
			history.scrollRestoration = 'manual';
		}

		if (!lenis) return;
		lenis.on('scroll', ScrollTrigger.update);
		lenis.scrollTo(0, { immediate: true });
	}, [lenis]);

	return <>{children}</>;
};

export default ScrollWrapper;
