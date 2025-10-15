import { Metadata } from 'next';

const title = 'Cydir - Awaken What’s Possible';
const description =
	'Discover the power of manifestation, NLP, and coaching designed to help you break through barriers and create the life you truly desire.';
export const url = 'https://cydir.vercel.app';

export const metaDataOptions: Metadata = {
	generator: 'Next.js',
	applicationName: 'Cydir',
	referrer: 'origin-when-cross-origin',
	keywords: [],
	authors: [{ name: 'Kelvin Ochubili', url: 'https://twitter.com/iykekelvins' }],
	creator: 'Kelvin Ochubili',
	publisher: 'Kelvin Ochubili',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title,
		description,
		url,
		siteName: 'Cydir',
		images: [
			{
				url: '/opengraph-image.jpg',
				width: 800,
				height: 600,
			},
			{
				url: '/opengraph-image.jpg',
				width: 1800,
				height: 1600,
				alt: 'Cydir',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	icons: {
		icon: '/icon.jpg',
		shortcut: '/icon.jpg',
		apple: '/icon.jpg',
		other: {
			rel: 'apple-touch-icon-precomposed',
			url: '/icon.jpg',
		},
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		creator: '@iykekelvins',
		images: ['/opengraph-image.jpg'],
	},
	alternates: {
		canonical: '/',
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};
