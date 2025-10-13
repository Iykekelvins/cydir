import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { Lenis } from 'lenis/react';
import { metaDataOptions } from '@/utils/metadata';

import ScrollWrapper from '@/shared/scroll-wrapper';

import './globals.css';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

const outfit = Outfit({
	variable: '--font-outfit',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Cydir - Awaken What’s Possible',
	description:
		'Discover the power of manifestation, NLP, and coaching designed to help you break through barriers and create the life you truly desire.',
	metadataBase: new URL('https://cydir.vercel.app'),
	...metaDataOptions,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<ScrollWrapper>
				<Lenis
					root
					options={{
						wheelMultiplier: 0.9,
					}}>
					<body className={`${inter.variable} ${outfit.variable} antialiased`}>
						<main>{children}</main>
					</body>
				</Lenis>
			</ScrollWrapper>
		</html>
	);
}
