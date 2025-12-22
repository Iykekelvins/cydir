/* eslint-disable @typescript-eslint/no-explicit-any */
import { Html } from '@react-email/html';
import { Head } from '@react-email/head';
import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import { Img } from '@react-email/img';
import { Column, Heading, Link, Row } from '@react-email/components';
import { formatDate } from '@/utils';

interface EmailProps {
	title: string;
	formData: Record<string, string | number>;
	date: Date;
}

const chunkArray = (array: any, chunkSize: any) => {
	const chunks = [];
	for (let i = 0; i < array.length; i += chunkSize) {
		chunks.push(array.slice(i, i + chunkSize));
	}
	return chunks;
};

export default function ContactFormEmail({ title, formData, date }: EmailProps) {
	const excludedFields = [
		'What are you consciously creating or manifesting in your life right now?',
		'Why do you want to join the Limitless Community?',
		'Linkedin Profile URL',
		'What areas of life are you most focused on improving right now?',
		'How committed are you to your personal transformation',
	];

	// Filter out excluded fields for grid display
	const gridData = Object.fromEntries(
		Object.entries(formData).filter(([key]) => !excludedFields.includes(key))
	);

	// Get special fields separately
	const consciously_creating =
		formData[
			'What are you consciously creating or manifesting in your life right now?'
		];
	const join = formData['Why do you want to join the Limitless Community?'];
	const linkedin = formData['Linkedin Profile URL'];
	const areas =
		formData['What areas of life are you most focused on improving right now?'];
	const committed =
		formData['How committed are you to your personal transformation'];

	const formEntries = Object.entries(gridData);
	// Create pairs of items for 2-column layout
	const gridPairs = chunkArray(formEntries, 2);

	return (
		<Html>
			<Head>
				<style>{`
					@media only screen and (max-width: 480px) {
						.main-heading {
							font-size: 16px !important;
						}
						.main-title {
							font-size: 14px !important;
							margin-top: 12px !important;
						}
						.date-text {
							margin-top: 12px !important;
						}
						.msg-section {
							margin-top: 16px !important;
						}
						.grid-column {
							display: block !important;
							width: 100% !important;
							max-width: 100% !important;
							padding-right: 0 !important;
							margin-top: 16px !important;
						}
						.grid-column:first-child {
							margin-top: 0 !important;
						}
						.grid-row {
							margin-top: 16px !important;
						}
						.grid-row:first-child {
							margin-top: 0 !important;
						}
					}
				`}</style>
			</Head>
			<Body
				style={{
					margin: 0,
					padding: 0,
					backgroundColor: '#000000',
				}}>
				<Container
					style={{
						maxWidth: '600px',
						margin: '0 auto',
						width: '100%',
					}}>
					<Section
						style={{
							borderTop: '8px solid #C8D72C',
							padding: '23px 32px',
							backgroundImage:
								'url(https://res.cloudinary.com/dvgyi0ngj/image/upload/v1766405416/cydir-email-header_tsbjsw.jpg)',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							height: '110px',
							backgroundPosition: 'center',
							position: 'relative',
							overflow: 'hidden',
						}}>
						<Link
							href='https://cydir.com'
							target='_blank'
							style={{
								position: 'relative',
								zIndex: 2,
							}}>
							<Img
								src='https://res.cloudinary.com/dvgyi0ngj/image/upload/v1766414871/cydir-logo_vzpfgn.jpg'
								width={91.32}
								height={39}
							/>
						</Link>
						{/* <Container
							style={{
								backgroundColor: '#00000099',
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
								pointerEvents: 'none',
							}}
						/> */}
					</Section>

					<Section
						style={{
							marginTop: '40px',
							padding: '0 32px',
						}}>
						{/* Single header row that works on both desktop and mobile */}
						<Row>
							<Column>
								<Heading
									className='main-heading'
									as='h1'
									style={{
										fontSize: '24px',
										fontWeight: 800,
										color: '#ffffff',
										fontFamily:
											'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
										letterSpacing: '-0.04em',
										margin: 0,
									}}>
									The Limitless Community
								</Heading>
							</Column>
							<Column>
								<Text
									className='date-text'
									style={{
										fontSize: '12px',
										color: '#B2B2B2',
										letterSpacing: '-0.02em',
										fontFamily:
											'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
										margin: 0,
										textAlign: 'right',
									}}>
									{formatDate(date)}
								</Text>
							</Column>
						</Row>

						<Text
							className='main-title'
							style={{
								fontSize: '16px',
								color: '#B2B2B2',
								letterSpacing: '-0.02em',
								fontFamily:
									'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
								lineHeight: 1.5,
								marginTop: '20px',
							}}>
							A new submission has been made to the form. Kindly find attached the
							submitted information
						</Text>
					</Section>

					<Section
						style={{
							marginTop: '12px',
							padding: '0 32px 24px',
						}}>
						<Section
							style={{
								backgroundColor: '#171717',
								borderRadius: '8px',
								padding: '20px',
							}}>
							{/* Single responsive 2x2 grid */}
							{gridPairs.map((pair, pairIndex) => (
								<Row
									key={pairIndex}
									className='grid-row'
									style={{
										marginTop: pairIndex === 0 ? 0 : '32px',
									}}>
									{pair.map((item: any, itemIndex: number) => (
										<Column
											key={itemIndex}
											className='grid-column'
											style={{
												width: '50%',
												maxWidth: '50%',
												verticalAlign: 'top',
												paddingRight: itemIndex === 0 ? '7px' : 0,
											}}>
											<Text
												style={{
													fontSize: '16px',
													fontWeight: 600,
													color: '#ffffff',
													fontFamily:
														'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
													letterSpacing: '-0.02em',
													margin: 0,
												}}>
												{item[0].replace(/([A-Z])/g, ' $1').trim()}
											</Text>
											<Container
												style={{
													marginTop: '4px',
													border: '1px solid #383838',
													borderRadius: '8px',
													padding: '8px 16px',
													backgroundColor: '#0a0a0a',
												}}>
												<Text
													style={{
														fontSize: '16px',
														fontFamily:
															'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
														letterSpacing: '-0.02em',
														color: '#B2B2B2',
														margin: 0,
													}}>
													{item[1]}
												</Text>
											</Container>
										</Column>
									))}
								</Row>
							))}

							{/* Special fields displayed below grid */}
							{linkedin && (
								<Container
									className='msg-section'
									style={{
										marginTop: '32px',
									}}>
									<Text
										style={{
											fontSize: '16px',
											fontWeight: 800,
											color: '#ffffff',
											fontFamily:
												'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
											letterSpacing: '-0.02em',
											margin: 0,
										}}>
										Linkedin Profile URL
									</Text>
									<Container
										style={{
											marginTop: '4px',
											border: '1px solid #383838',
											borderRadius: '8px',
											padding: '8px 16px',
											backgroundColor: '#0a0a0a',
										}}>
										<Text
											style={{
												fontSize: '16px',
												fontFamily:
													'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
												letterSpacing: '-0.02em',
												color: '#B2B2B2',
												margin: 0,
											}}>
											{linkedin}
										</Text>
									</Container>
								</Container>
							)}

							{areas && (
								<Container
									className='msg-section'
									style={{
										marginTop: '32px',
									}}>
									<Text
										style={{
											fontSize: '16px',
											fontWeight: 800,
											color: '#ffffff',
											fontFamily:
												'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
											letterSpacing: '-0.02em',
											margin: 0,
										}}>
										What areas of life are you most focused on improving right now?
									</Text>
									<Container
										style={{
											marginTop: '4px',
											border: '1px solid #383838',
											borderRadius: '8px',
											padding: '8px 16px',
											backgroundColor: '#0a0a0a',
										}}>
										<Text
											style={{
												fontSize: '16px',
												fontFamily:
													'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
												letterSpacing: '-0.02em',
												color: '#B2B2B2',
												margin: 0,
											}}>
											{areas}
										</Text>
									</Container>
								</Container>
							)}

							{committed && (
								<Container
									className='msg-section'
									style={{
										marginTop: '32px',
									}}>
									<Text
										style={{
											fontSize: '16px',
											fontWeight: 800,
											color: '#ffffff',
											fontFamily:
												'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
											letterSpacing: '-0.02em',
											margin: 0,
										}}>
										How committed are you to your personal transformation
									</Text>
									<Container
										style={{
											marginTop: '4px',
											border: '1px solid #383838',
											borderRadius: '8px',
											padding: '8px 16px',
											backgroundColor: '#0a0a0a',
										}}>
										<Text
											style={{
												fontSize: '16px',
												fontFamily:
													'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
												letterSpacing: '-0.02em',
												color: '#B2B2B2',
												margin: 0,
											}}>
											{committed}
										</Text>
									</Container>
								</Container>
							)}

							{consciously_creating && (
								<Container
									className='msg-section'
									style={{
										marginTop: '32px',
									}}>
									<Text
										style={{
											fontSize: '16px',
											fontWeight: 800,
											color: '#ffffff',
											fontFamily:
												'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
											letterSpacing: '-0.02em',
											margin: 0,
										}}>
										What are you consciously creating or manifesting in your life
										right now?
									</Text>
									<Container
										style={{
											marginTop: '4px',
											border: '1px solid #383838',
											borderRadius: '8px',
											padding: '8px 16px 70px 16px',
											backgroundColor: '#0a0a0a',
										}}>
										<Text
											style={{
												fontSize: '16px',
												fontFamily:
													'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
												letterSpacing: '-0.02em',
												color: '#B2B2B2',
												margin: 0,
											}}>
											{consciously_creating}
										</Text>
									</Container>
								</Container>
							)}

							{join && (
								<Container
									className='msg-section'
									style={{
										marginTop: '32px',
									}}>
									<Text
										style={{
											fontSize: '16px',
											fontWeight: 800,
											color: '#ffffff',
											fontFamily:
												'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
											letterSpacing: '-0.02em',
											margin: 0,
										}}>
										Why do you want to join the limitless community?
									</Text>
									<Container
										style={{
											marginTop: '4px',
											border: '1px solid #383838',
											borderRadius: '8px',
											padding: '8px 16px 70px 16px',
											backgroundColor: '#0a0a0a',
										}}>
										<Text
											style={{
												fontSize: '16px',
												fontFamily:
													'-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
												letterSpacing: '-0.02em',
												color: '#B2B2B2',
												margin: 0,
											}}>
											{join}
										</Text>
									</Container>
								</Container>
							)}
						</Section>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}
