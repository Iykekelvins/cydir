import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

import EmailTemplate from '../../../../emails/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
	try {
		const { title, ...rest } = await request.json();

		const { error } = await resend.emails.send({
			from: 'Cydir <submissions@cydir.com>',
			to: ['info@cydir.com'],
			react: EmailTemplate({
				title,
				formData: rest.body,
				date: new Date(),
			}),
			subject: `New Limitless Community Form Submission`,
		});

		if (error) {
			console.log(error);

			return NextResponse.json({ error }, { status: 500 });
		}

		return NextResponse.json(
			{ message: "Your message has been sent. We'll get back to you soon." },
			{ status: 201 }
		);
	} catch (error) {
		console.error('Resend error:', error);
		console.log(error);

		return NextResponse.json(
			{ message: 'Failed to send email. Please try again.' },
			{ status: 500 }
		);
	}
}
