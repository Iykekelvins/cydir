import Hero from './hero';
import Why from './why';
// import Awaken from './awaken';
import How from './how';
import WhatShifts from './what-shifts';
import Architecture from './architecture';
import Transform from './transform';
import Origin from './origin';
import Events from './events';
import Thrive from './thrive';
import Affirmations from './affirmations';
import IgFeed from './ig-feed';
import Faqs from './faqs';
import JoinUs from './join-us';
import Starfield from 'react-starfield';

import {
	HeroSliceDefaultPrimary,
	HomepageDocument,
	WhySectionSliceDefaultPrimary,
} from '../../prismicio-types';

const Homepage = ({ homepage }: { homepage: HomepageDocument[] }) => {
	const heroSection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'hero'
	)?.primary as HeroSliceDefaultPrimary;

	const whySection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'why_section'
	)?.primary as WhySectionSliceDefaultPrimary;

	return (
		<div>
			<Hero hero={heroSection} />
			<Why why={whySection} />
			{/* <Awaken /> */}
			<How />
			<WhatShifts />
			<Architecture />
			<Transform />
			<Events />
			<Origin />
			<Thrive />
			<Affirmations />
			<IgFeed />
			<Faqs />
			<JoinUs />
			<Starfield starCount={1000} starColor={[255, 255, 255]} speedFactor={0.05} />
		</div>
	);
};

export default Homepage;
