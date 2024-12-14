// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import mailjet from 'node-mailjet';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface MailjetResponse {
  body: {
    Messages: {
      Status: string;
      Errors?: string[];
    }[];
  };
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body: ContactFormData = await req.json();

    const { name, email, message } = body;

    // Validate form data
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Initialize Mailjet client
    const mailjetClient = new mailjet({
      apiKey: process.env.MAILJET_API_KEY as string,
      apiSecret: process.env.MAILJET_SECRET_KEY as string,
    });

    // Send email
    const request = await mailjetClient.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL as string,
            Name: "ntare.xyz",
          },
          To: [
            {
              Email: email,
              Name: name,
            },
          ],
          Subject: `New message from ${name}`,
          TextPart: `Message: ${message}\n\nFrom: ${name} (${email})`,
        },
      ],
    }) as MailjetResponse;

    // Log the full response for troubleshooting
    // console.log('Mailjet response:', request.body);

    // Check if the email was sent successfully
    if (request.body.Messages[0].Status === "success") {
      return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } else {
      // Log any errors in the response for debugging
      // console.error('Mailjet Error:', request.body.Messages[0].Errors);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }
  } catch (error) {
    // Log the error details for debugging
    // console.error("Mailjet error:", error);

    return NextResponse.json(
      { error: "Error sending email. Try again later." },
      { status: 500 }
    );
  }
}
