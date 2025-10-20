import Hero from './hero';
import Awaken from './awaken';
import Breakthrough from './breakthrough';
import Transform from './transform';
import Origin from './origin';
import Events from './events';
import Thrive from './thrive';
import Affirmations from './affirmations';
import IgFeed from './ig-feed';
import Faqs from './faqs';
import JoinUs from './join-us';

const Homepage = () => {
	return (
		<div>
			<Hero />
			<Awaken />
			<Breakthrough />
			<Transform />
			<Origin />
			<Events />
			<Thrive />
			<Affirmations />
			<IgFeed />
			<Faqs />
			<JoinUs />
		</div>
	);
};

export default Homepage;
