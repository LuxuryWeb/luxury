import { Resend } from "resend";
import EmailUser from "../../../components/Emails/EmailUser";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  console.log("llegue mail");
  // const { name, email } = await request.json();

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["luxurygoldweb@gmail.com"],
      subject: `Hola Juan! Te dejo los links para que nos los pierdas :)`,
      react: EmailUser({
        user: "juan",
      }),
    });

    return Response.json({ message: "Email Sent" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error", error }, { status: 500 });
  }
}
