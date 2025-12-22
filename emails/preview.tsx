import { Html } from '@react-email/html';
import { Head } from '@react-email/head';
import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import { Img } from '@react-email/img';
import { Column, Font, Heading, Link, Row } from '@react-email/components';

export default function Preview() {
	return (
		<Html>
			<Head>
				<Font
					fontFamily='Inter'
					fallbackFontFamily='Arial'
					webFont={{
						url: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
						format: 'woff2',
					}}
					fontWeight={400}
				/>
				<style>{`
    @media only screen and (max-width: 480px) {
      .main-heading {
        font-size: 16px !important
      }
      .main-title {
        font-size: 14px !important;
				margin-top: 12px !important
        }
      .desktop-row{
        display: none    
        }
        .msg-section{
				margin-top: 16px !important
				}
    }
    
    @media only screen and (min-width: 490px) {
            .mobile-list {
              display: none
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
							borderTop: '8px solid #E42926',
							padding: '23px 32px',
							backgroundImage:
								'url(https://images.prismic.io/del-property/aLHHGWGNHVfTOcwi_email-header.jpg?auto=format,compress)',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							height: '110px',
							backgroundPosition: 'center',
							position: 'relative',
							overflow: 'hidden',
						}}>
						<Link
							href='https://del-property.vercel.app'
							target='_blank'
							style={{
								position: 'relative',
								zIndex: 2,
							}}>
							<Img
								src='https://images.prismic.io/del-property/aLQ3aWGNHVfTOd_Q_PrimaryLogo-01.jpg?auto=format,compress'
								width={64}
								height={64}
							/>
						</Link>
						<Container
							style={{
								backgroundColor: '#00000099',
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
								pointerEvents: 'none',
							}}
						/>
					</Section>

					<Section
						style={{
							marginTop: '40px',
							padding: '0 32px',
						}}>
						<Row>
							<Column>
								<Heading
									as='h1'
									className='main-heading'
									style={{
										fontSize: '24px',
										fontWeight: 800,
										color: '#ffffff',
										fontFamily: 'Inter, Arial, sans-serif',
										letterSpacing: '-0.04em',
										margin: 0,
									}}>
									Contact Us form Submission
								</Heading>
							</Column>
							<Column>
								<Text
									style={{
										fontSize: '12px',
										color: '#B2B2B2',
										letterSpacing: '-0.02em',
										fontFamily: 'Inter, Arial, sans-serif',
										margin: 0,
									}}>
									23rd August
								</Text>
							</Column>
						</Row>

						<Heading
							as='h1'
							className='main-heading'
							style={{
								fontSize: '24px',
								fontWeight: 800,
								color: '#ffffff',
								fontFamily: 'Inter, Arial, sans-serif',
								letterSpacing: '-0.04em',
								margin: 0,
							}}>
							Contact Us form Submission
						</Heading>
						<Text
							style={{
								fontSize: '12px',
								color: '#B2B2B2',
								letterSpacing: '-0.02em',
								fontFamily: 'Inter, Arial, sans-serif',
								marginTop: '12px',
							}}>
							23rd August
						</Text>

						<Text
							className='main-title'
							style={{
								fontSize: '16px',
								color: '#B2B2B2',
								letterSpacing: '-0.02em',
								fontFamily: 'Inter, Arial, sans-serif',
								lineHeight: 1.5,
								marginTop: '20px',
							}}>
							A new submission has been made to the form. Kindly find attached the
							submitted information
						</Text>
					</Section>

					<Container
						style={{
							marginTop: '12px',
							padding: '0 32px',
						}}>
						<Section
							style={{
								backgroundColor: '#2d2d2d',
								borderRadius: '8px',
								padding: '20px',
							}}>
							<Section>
								<Row className='desktop-row'>
									<Column
										className='grid-column'
										style={{
											width: '50%',
											paddingRight: '7px',
										}}>
										<Text
											style={{
												fontSize: '16px',
												fontWeight: 800,
												color: '#ffffff',
												fontFamily: 'Inter, Arial, sans-serif',
												letterSpacing: '-0.02em',
												margin: 0,
											}}>
											Title
										</Text>
										<Container
											style={{
												marginTop: '4px',
												border: '1px solid #FFFFFF38',
												borderRadius: '8px',
												padding: '8px 16px',
												backgroundColor: '#00000073',
											}}>
											<Text
												style={{
													fontSize: '16px',
													fontFamily: 'Inter, Arial, sans-serif',
													letterSpacing: '-0.02em',
													color: '#B2B2B2',
													margin: 0,
												}}>
												Response
											</Text>
										</Container>
									</Column>
									<Column
										className='grid-column'
										style={{
											width: '50%',
											paddingRight: '7px',
										}}>
										<Text
											style={{
												fontSize: '16px',
												fontWeight: 800,
												color: '#ffffff',
												fontFamily: 'Inter, Arial, sans-serif',
												letterSpacing: '-0.02em',
												margin: 0,
											}}>
											Title
										</Text>
										<Container
											style={{
												marginTop: '4px',
												border: '1px solid #FFFFFF38',
												borderRadius: '8px',
												padding: '8px 16px',
												backgroundColor: '#00000073',
											}}>
											<Text
												style={{
													fontSize: '16px',
													fontFamily: 'Inter, Arial, sans-serif',
													letterSpacing: '-0.02em',
													color: '#B2B2B2',
													margin: 0,
												}}>
												Response
											</Text>
										</Container>
									</Column>
								</Row>

								<Container className='mobile-list'>
									<Section>
										<Text
											style={{
												fontSize: '16px',
												fontWeight: 800,
												color: '#ffffff',
												fontFamily: 'Inter, Arial, sans-serif',
												letterSpacing: '-0.02em',
												margin: 0,
											}}>
											Title
										</Text>
										<Container
											style={{
												marginTop: '4px',
												border: '1px solid #FFFFFF38',
												borderRadius: '8px',
												padding: '8px 16px',
												backgroundColor: '#00000073',
											}}>
											<Text
												style={{
													fontSize: '16px',
													fontFamily: 'Inter, Arial, sans-serif',
													letterSpacing: '-0.02em',
													color: '#B2B2B2',
													margin: 0,
												}}>
												Response
											</Text>
										</Container>
									</Section>

									<Section
										style={{
											marginTop: '16px',
										}}>
										<Text
											style={{
												fontSize: '16px',
												fontWeight: 800,
												color: '#ffffff',
												fontFamily: 'Inter, Arial, sans-serif',
												letterSpacing: '-0.02em',
												margin: 0,
											}}>
											Title
										</Text>
										<Container
											style={{
												marginTop: '4px',
												border: '1px solid #FFFFFF38',
												borderRadius: '8px',
												padding: '8px 16px',
												backgroundColor: '#00000073',
											}}>
											<Text
												style={{
													fontSize: '16px',
													fontFamily: 'Inter, Arial, sans-serif',
													letterSpacing: '-0.02em',
													color: '#B2B2B2',
													margin: 0,
												}}>
												Response
											</Text>
										</Container>
									</Section>
								</Container>
							</Section>

							<Section
								style={{
									marginTop: '32px',
								}}
								className='msg-section'>
								<Text
									style={{
										fontSize: '16px',
										fontWeight: 800,
										color: '#ffffff',
										fontFamily: 'Inter, Arial, sans-serif',
										letterSpacing: '-0.02em',
										margin: 0,
									}}>
									Message
								</Text>
								<Container
									style={{
										marginTop: '4px',
										border: '1px solid #383838',
										borderRadius: '8px',
										padding: '8px 16px 70px 16px',
										backgroundColor: '#0a0a0a',
										// height: '105px',
									}}>
									<Text
										style={{
											fontSize: '16px',
											fontFamily: 'Inter, Arial, sans-serif',
											letterSpacing: '-0.02em',
											color: '#B2B2B2',
											margin: 0,
										}}>
										Message
									</Text>
								</Container>
							</Section>
						</Section>
					</Container>
				</Container>
			</Body>
		</Html>
	);
}
