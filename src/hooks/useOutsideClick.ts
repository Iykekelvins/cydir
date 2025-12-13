/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from 'react';

function useOutsideClick(callback: () => void) {
	const ref = useRef<any>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [callback]);

	return ref;
}

export default useOutsideClick;
