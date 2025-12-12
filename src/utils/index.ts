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
