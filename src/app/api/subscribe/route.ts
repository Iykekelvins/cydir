import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const { email } = await request.json();

		// Validate email
		if (!email || !email.includes('@')) {
			return NextResponse.json(
				{ error: 'Valid email is required' },
				{ status: 400 }
			);
		}

		// Step 1: Create or get the profile
		const profileResponse = await fetch('https://a.klaviyo.com/api/profiles/', {
			method: 'POST',
			headers: {
				Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_KEY}`,
				revision: '2024-10-15',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				data: {
					type: 'profile',
					attributes: {
						email: email,
					},
				},
			}),
		});

		const profileText = await profileResponse.text();
		let profileData = null;

		if (profileText) {
			try {
				profileData = JSON.parse(profileText);
			} catch (e) {
				console.error('Failed to parse profile response:', profileText);
			}
		}

		if (!profileResponse.ok) {
			console.error('Profile creation error:', profileResponse.status, profileData);
			return NextResponse.json(
				{ error: 'You are already subscribed' },
				{ status: profileResponse.status }
			);
		}

		const profileId = profileData?.data?.id;

		if (!profileId) {
			console.error('No profile ID returned');
			return NextResponse.json(
				{ error: 'Failed to get profile ID' },
				{ status: 500 }
			);
		}

		// Step 2: Subscribe the profile to the list
		const subscribeResponse = await fetch(
			`https://a.klaviyo.com/api/lists/${process.env.KLAVIYO_LIST_ID}/relationships/profiles/`,
			{
				method: 'POST',
				headers: {
					Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_KEY}`,
					revision: '2024-10-15',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					data: [
						{
							type: 'profile',
							id: profileId,
						},
					],
				}),
			}
		);

		const subscribeText = await subscribeResponse.text();
		let subscribeData = null;

		if (subscribeText) {
			try {
				subscribeData = JSON.parse(subscribeText);
			} catch (e) {
				console.error('Failed to parse subscribe response:', subscribeText);
				console.log(e);
			}
		}

		// Success cases
		if (subscribeResponse.ok || subscribeResponse.status === 204) {
			return NextResponse.json({ success: true });
		}

		// Check for duplicate/conflict errors
		if (subscribeResponse.status === 409 || subscribeResponse.status === 400) {
			const errorDetail = subscribeData?.errors?.[0]?.detail?.toLowerCase() || '';
			if (errorDetail.includes('already') || errorDetail.includes('duplicate')) {
				return NextResponse.json(
					{ error: 'This email is already subscribed' },
					{ status: 409 }
				);
			}
		}

		console.error('Subscribe error:', subscribeResponse.status, subscribeData);
		return NextResponse.json(
			{ error: 'Failed to subscribe' },
			{ status: subscribeResponse.status }
		);
	} catch (error) {
		console.error('Subscription error:', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
