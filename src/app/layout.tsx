import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { Lenis } from 'lenis/react';
import { AppProvider } from './context';
import { metaDataOptions } from '@/utils/metadata';
import { Toaster } from 'sonner';

import ScrollWrapper from '@/shared/scroll-wrapper';
import Head from 'next/head';
import Script from 'next/script';
import Menu from '@/shared/menu';
import Starfield from 'react-starfield';

import localFont from 'next/font/local';

import './globals.css';

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
	description: `We are a transformational coaching and events brand that empowers purpose driven
entrepreneurs and professionals to break through inner barriers and step into their limitless
potential. With a foundation in advanced coaching and breakthroughs Cydir provides
science-backed methods for deep, lasting change.
`,
	metadataBase: new URL('https://cydir.com'),
	...metaDataOptions,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<Script id='gtm' strategy='afterInteractive'>
				{`
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NC736CRR')
	`}
			</Script>
			<Head>
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-NC736CRR'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}></iframe>
				</noscript>
			</Head>
			<ScrollWrapper>
				<Lenis
					root
					options={{
						wheelMultiplier: 0.9,
					}}>
					<AppProvider>
						<body
							className={`${inter.variable} ${outfit.variable} ${ChronicleDisplay.variable} antialiased`}>
							{children}
							<Menu />
							<Starfield
								starCount={1000}
								starColor={[255, 255, 255]}
								speedFactor={0.05}
							/>
							<Toaster position='top-right' richColors theme='dark' />
						</body>
					</AppProvider>
				</Lenis>
			</ScrollWrapper>
		</html>
	);
}
