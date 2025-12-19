import AudioButton from '@/shared/audio-button';
import CommunityForm from '@/shared/community-form';
import Footer from '@/shared/footer';
import Navbar from '@/shared/navbar';
import Service from '@/shared/service';

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Service />
			<CommunityForm />
			<AudioButton />
			<Footer />
		</>
	);
}
