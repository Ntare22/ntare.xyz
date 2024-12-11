import mailjet from "node-mailjet";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface MailjetResponse {
  body: {
    Messages: {
      Status: string;
    }[];
  };
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body: ContactFormData = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
      });
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
    }) as MailjetResponse; // Cast response to the defined type

    // Check response status
    if (request.body.Messages[0].Status === "success") {
      return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
        status: 200,
      });
    } else {
      throw new Error("Failed to send email.");
    }
  } catch (error) {
    console.error("Mailjet error:", error);
    return new Response(
      JSON.stringify({ error: "Error sending email. Try again later." }),
      { status: 500 }
    );
  }
}
