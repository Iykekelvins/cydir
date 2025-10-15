import Hero from './hero';
import Awaken from './awaken';
import Breakthrough from './breakthrough';
import Transform from './transform';
import Origin from './origin';
import Events from './events';

const Homepage = () => {
	return (
		<div>
			<Hero />
			<Awaken />
			<Breakthrough />
			<Transform />
			<Origin />
			<Events />
		</div>
	);
};

export default Homepage;
