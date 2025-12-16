import Hero from './hero';
import Transformation from './transformation';
import Awaken from './awaken';
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

const Homepage = () => {
	return (
		<div>
			<Starfield starCount={1000} starColor={[255, 255, 255]} speedFactor={0.05} />
			<Hero />
			<Transformation />
			<Awaken />
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
		</div>
	);
};

export default Homepage;
