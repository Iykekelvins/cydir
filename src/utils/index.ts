import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function splitIntoChars(element: HTMLElement) {
	if (!element) return [];

	// Store original text
	const text = element.textContent || '';

	// Clear existing markup
	element.innerHTML = '';

	const chars = [];

	for (const char of text) {
		const span = document.createElement('span');
		span.classList.add('char');

		// Prevent collapse of whitespace
		span.textContent = char === ' ' ? '\u00A0' : char;

		span.style.display = 'inline-block'; // ensures transform animations work
		element.appendChild(span);

		chars.push(span);
	}

	return chars;
}

export const formatDate = (date: string | Date | null): string => {
	const months: string[] = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const getOrdinal = (day: number): string => {
		if (day > 3 && day < 21) return 'th';
		switch (day % 10) {
			case 1:
				return 'st';
			case 2:
				return 'nd';
			case 3:
				return 'rd';
			default:
				return 'th';
		}
	};

	const d = new Date(date!);
	const day: number = d.getDate();
	const month: string = months[d.getMonth()];
	const year: number = d.getFullYear();

	return `${day}${getOrdinal(day)} ${month}, ${year}`;
};
