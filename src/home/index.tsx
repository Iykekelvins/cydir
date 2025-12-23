import Hero from './hero';
import Transformation from './transformation';
// import Awaken from './awaken';
import Breakthrough from './breakthrough';
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

import { HomepageDocument } from '../../prismicio-types';

const Homepage = ({ homepage }: { homepage: HomepageDocument[] }) => {
	const heroSection = homepage[0]?.data?.slices?.find(
		(slice) => slice?.slice_type === 'hero'
	)?.primary;

	return (
		<div>
			<Hero hero={heroSection} />
			<Transformation />
			{/* <Awaken /> */}
			<Breakthrough />
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
