import Link from 'next/link';
import Nav from './nav';

export default function Content() {
	return (
		<section className='bg-[#F0F0F0] px-gutter pb-gutter pt-[max(7.5rem,84px)]'>
			<div className='flex items-start justify-between gap-[max(3rem,48px)]'>
				<Nav />

				<div className='des:max-w-[max(59.625rem,650px)] w-full font-outfit grid gap-gutter'>
					<article id='introduction' className='legal-section'>
						<h2
							className='text-black text-40 tracking-tighter font-extrabold
            
            '>
							Introduction
						</h2>
						<p
							className='text-[#000000B2] text-24 tracking-tight leading-[1.9]
            mt-[max(1rem,16px)]
            '>
							This privacy notice discloses the privacy practices for www.cydir.ca &
							it&apos;s subdomains. This privacy notice applies solely to information
							collected by this website. It will notify you of the following:
							<br />
							1. What personally identifiable information is collected from you
							through the website, how it is used and with whom it may be shared.
							<br />
							2. What choices are available to you regarding the use of your data.
							<br />
							3. The security procedures in place to protect the misuse of your
							information.
							<br />
							4. How you can correct any inaccuracies in the information.
						</p>
					</article>

					<article
						id='information-collection-use-and-sharing'
						className='legal-section'>
						<h2
							className='text-black text-40 tracking-tighter font-extrabold
            
            '>
							Information Collection, Use, and Sharing
						</h2>
						<p
							className='text-[#000000B2] text-24 tracking-tight leading-[1.9]
            mt-[max(1rem,16px)]
            '>
							We are the sole owners of the information collected on this site. We
							only have access to/collect information that you voluntarily give us
							via email or other direct contact from you. We will not sell or rent
							this information to anyone. We will use your information to respond to
							you, regarding the reason you contacted us. We will not share your
							information with any third party outside of our organization, other
							than as necessary to fulfill your request, e.g. to ship an order.
							Unless you ask us not to, we may contact you via email in the future to
							tell you about specials, new products or services, or changes to this
							privacy policy. Your Access to and Control Over Information You may opt
							out of any future contacts from us at any time. You can do the
							following at any time by contacting us via the email address or phone
							number given on our website:
							<br />{' '}
							<span className='flex items-center flex-wrap'>
								<span className='inline-flex items-center'>
									○ See what data we have about you, if any.
								</span>{' '}
								<span className='inline-flex items-center'>
									○ Change/correct any data we have about you.
								</span>{' '}
								<span className='inline-flex items-center'>
									○ Have us delete any data we have about you. ○ Express any concern
									you have about our use of your data.
								</span>
							</span>
						</p>
					</article>

					<article id='security' className='legal-section'>
						<h2
							className='text-black text-40 tracking-tighter font-extrabold
            
            '>
							Security
						</h2>
						<p
							className='text-[#000000B2] text-24 tracking-tight leading-[1.9]
            mt-[max(1rem,16px)]
            '>
							We take precautions to protect your information. When you submit
							sensitive information via the website, your information is protected
							both online and offline. Wherever we collect sensitive information
							(such as credit card data), that information is encrypted and
							transmitted to us in a secure way. You can verify this by looking for a
							lock icon in the address bar and looking for “https” at the beginning
							of the address of the Web page. While we use encryption to protect
							sensitive information transmitted online, we also protect your
							information offline. Only employees who need the information to perform
							a specific job (for example, billing or customer service) are granted
							access to personally identifiable information. The computers/servers in
							which we store personally identifiable information are kept in a secure
							environment.
						</p>
					</article>

					<article id='cookies' className='legal-section'>
						<h2
							className='text-black text-40 tracking-tighter font-extrabold
            
            '>
							Cookies
						</h2>
						<p
							className='text-[#000000B2] text-24 tracking-tight leading-[1.9]
            mt-[max(1rem,16px)]
            '>
							We use “cookies” on this site. A cookie is a piece of data stored on a
							site visitor&apos;s hard drive to help us improve your access to our
							site and identify repeat visitors to our site. For instance, when we
							use a cookie to identify you, you would not have to log in a password
							more than once, thereby saving time while on our site. Cookies can also
							enable us to track and target the interests of our users to enhance the
							experience on our site. Usage of a cookie is in no way linked to any
							personally identifiable information on our site. Surveys & Contests
							From time-to-time our site requests information via surveys or
							contests. Participation in these surveys or contests is completely
							voluntary and you may choose whether or not to participate and
							therefore disclose this information. Information requested may include
							contact information (such as name and shipping address), and
							demographic information (such as zip code, age level). Contact
							information will be used to notify the winners and award prizes. Survey
							information will be used for purposes of monitoring or improving the
							use and satisfaction of this site. 
						</p>
					</article>

					<article id='concerns' className='legal-section'>
						<h2
							className='text-black text-40 tracking-tighter font-extrabold
            
            '>
							Concerns
						</h2>
						<p
							className='text-[#000000B2] text-24 tracking-tight leading-[1.9]
            mt-[max(1rem,16px)]
            '>
							This privacy notice discloses the privacy practices for{' '}
							<Link
								href='www.cydir.com'
								target='_blank'
								rel='noopener'
								className='border-b border-b-[#000000B2] border-solid'>
								www.cydir.com
							</Link>{' '}
							& it&apos;s subdomains. If you feel that we are not abiding by this
							privacy policy, you should contact us immediately via telephone at{' '}
							<Link
								href='tel:+12894011956'
								target='_blank'
								rel='noopener'
								className='border-b border-b-[#000000B2] border-solid'>
								+12894011956
							</Link>{' '}
							or via email at{' '}
							<Link
								href='mailto:info@cydir.com'
								target='_blank'
								rel='noopener'
								className='border-b border-b-[#000000B2] border-solid'>
								info@cydir.com
							</Link>
							.
							<br /> CYDIR Inc. 41 George St S, Brampton, ON L6Y 2E1.
							<br /> Last updated: 19/12/2025
						</p>
					</article>
				</div>
			</div>
		</section>
	);
}
