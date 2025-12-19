import PrivacyPolicy from '@/privacy-policy';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Privacy and Cookies Policy',
};

const PrivacyPolicyPage = () => {
	return <PrivacyPolicy />;
};

export default PrivacyPolicyPage;
