import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { Lenis } from 'lenis/react';
import { AppProvider } from './context';
import { metaDataOptions } from '@/utils/metadata';

import ScrollWrapper from '@/shared/scroll-wrapper';
import Navbar from '@/shared/navbar';
import Menu from '@/shared/menu';
import Service from '@/shared/service';
import CommunityForm from '@/shared/community-form';
import Footer from '@/shared/footer';

import localFont from 'next/font/local';

import './globals.css';
import Starfield from 'react-starfield';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic'],
});

const outfit = Outfit({
	variable: '--font-outfit',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const ChronicleDisplay = localFont({
	src: './fonts/Chronicle Display Light Italic.otf',
	weight: '300',
	style: 'italic',
	variable: '--font-chronicle-display',
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
					<AppProvider>
						<body
							className={`${inter.variable} ${outfit.variable} ${ChronicleDisplay.variable} antialiased`}>
							<Navbar />
							<main>{children}</main>
							<Menu />
							<Service />
							<CommunityForm />
							<Footer />
							<Starfield
								starCount={1000}
								starColor={[255, 255, 255]}
								speedFactor={0.05}
							/>
						</body>
					</AppProvider>
				</Lenis>
			</ScrollWrapper>
		</html>
	);
}
