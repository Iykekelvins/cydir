import { createClient } from '@/prismicio';

import Homepage from '@/home';

export default async function Home() {
	const client = createClient();
	const home = await client.getByType('homepage');

	return <Homepage homepage={home.results} />;
}
