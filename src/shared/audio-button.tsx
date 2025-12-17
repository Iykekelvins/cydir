'use client';

import { useProvider } from '@/app/context';

export default function AudioButton() {
	const { isPlaying, setIsPlaying } = useProvider();

	const initialHeights = [
		'max(0.875rem,8px)',
		'max(1.25rem,14px)',
		'max(0.625rem,4px)',
		'max(1.125rem,12px)',
		'max(0.75rem,7px)',
		'max(0.625rem,4px)',
	];

	return (
		<button
			className='fixed right-gutter bottom-[max(2.5rem,24px)] z-12
			size-[max(3rem,32px)] bg-[#FFFFFF1A] rounded-full
      mix-blend-difference
			'
			onClick={() => setIsPlaying(!isPlaying)}>
			<div className='flex items-center justify-center gap-[max(0.125rem,2px)]'>
				{[...Array(6)].map((_, i) => (
					<div
						key={i}
						className={`w-[max(0.125rem,2px)] bg-white rounded-full ${
							isPlaying ? 'animate-sound-wave' : 'paused-wave'
						}`}
						style={{
							animationDelay: `${i * 0.15}s`,
							animationDuration: '2s',
							height: `${initialHeights[i]}`,
						}}
					/>
				))}
			</div>
		</button>
	);
}
