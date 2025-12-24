import Hero from './hero';
import Why from './why';
import Awaken from './awaken';
import How from './how';
import WhatShifts from './what-shifts';
import Architecture from './architecture';
import Services from './services';
import About from './about';
import Events from './events';
import Reviews from './reviews';
import Affirmations from './affirmations';
import IgFeed from './ig-feed';
import Faqs from './faqs';
import JoinUs from './join-us';
import Starfield from 'react-starfield';

import {
	AboutSectionSliceDefaultPrimary,
	AffirmationsSectionSliceDefaultPrimary,
	ArchitectureofChangeSectionSliceDefaultPrimary,
	AwakenSectionSliceDefaultPrimary,
	EventsSectionSliceDefaultPrimary,
	FaqsSectionSliceDefaultPrimary,
	HeroSliceDefaultPrimary,
	HomepageDocument,
	HowSectionSliceDefaultPrimary,
	IgFeedSectionSliceDefaultPrimary,
	ReviewsSectionSliceDefaultPrimary,
	ServicesSectionSliceDefaultPrimary,
	WhatShiftsSectionSliceDefaultPrimary,
	WhySectionSliceDefaultPrimary,
} from '../../prismicio-types';

const Homepage = ({ homepage }: { homepage: HomepageDocument[] }) => {
	const heroSection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'hero'
	)?.primary as HeroSliceDefaultPrimary;

	const whySection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'why_section'
	)?.primary as WhySectionSliceDefaultPrimary;

	const howSection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'how_section'
	)?.primary as HowSectionSliceDefaultPrimary;

	const whatShiftsSection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'what_shifts_section'
	)?.primary as WhatShiftsSectionSliceDefaultPrimary;

	const aocSection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'architectureof_change_section'
	)?.primary as ArchitectureofChangeSectionSliceDefaultPrimary;

	const servicesSection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'services_section'
	)?.primary as ServicesSectionSliceDefaultPrimary;

	const eventsSection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'events_section'
	)?.primary as EventsSectionSliceDefaultPrimary;

	const aboutSection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'about_section'
	)?.primary as AboutSectionSliceDefaultPrimary;

	const reviewsSection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'reviews_section'
	)?.primary as ReviewsSectionSliceDefaultPrimary;

	const affirmationsSection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'affirmations_section'
	)?.primary as AffirmationsSectionSliceDefaultPrimary;

	const igFeedSection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'ig_feed_section'
	)?.primary as IgFeedSectionSliceDefaultPrimary;

	const faqsSection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'faqs_section'
	)?.primary as FaqsSectionSliceDefaultPrimary;

	const awakenSection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'awaken_section'
	)?.primary as AwakenSectionSliceDefaultPrimary;

	return (
		<div>
			<Hero hero={heroSection} />
			<Why why={whySection} />
			<Awaken awakenSection={awakenSection} />
			<How how={howSection} />
			<WhatShifts what_shifts={whatShiftsSection} />
			<Architecture aoc={aocSection} />
			<Services services={servicesSection} />
			<Events events={eventsSection} />
			<About about={aboutSection} />
			<Reviews reviews={reviewsSection} />
			<Affirmations affirmationsSection={affirmationsSection} />
			<IgFeed igFeedSection={igFeedSection} />
			<Faqs faqsSection={faqsSection} />
			<JoinUs />
			<Starfield starCount={1000} starColor={[255, 255, 255]} speedFactor={0.05} />
		</div>
	);
};

export default Homepage;
