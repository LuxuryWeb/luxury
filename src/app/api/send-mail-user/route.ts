import { Resend } from "resend";
import EmailUser from "../../../components/Emails/EmailUser";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email } = await request.json();

  try {
    await resend.emails.send({
      from: "admin@luxurygold.click",
      to: [email],
      subject: `Hola ${name}, Fuiste aceptado en Luxury gold!`,
      react: EmailUser({
        user: name,
      }),
    });

    return Response.json({ message: "Email Sent" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error", error }, { status: 500 });
  }
}
