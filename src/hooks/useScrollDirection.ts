'use client';
import { useEffect, useState } from 'react';

export function useScrollDirection() {
	const [scrollDir, setScrollDir] = useState<'up' | 'down' | 'top' | null>(null);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const updateScrollDir = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY <= 0) {
				setScrollDir('top');
				lastScrollY = 0;
				return;
			}

			const direction = currentScrollY > lastScrollY ? 'down' : 'up';

			if (direction !== scrollDir && Math.abs(currentScrollY - lastScrollY) > 10) {
				setScrollDir(direction);
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', updateScrollDir);
		return () => window.removeEventListener('scroll', updateScrollDir);
	}, [scrollDir]);

	return scrollDir;
}
