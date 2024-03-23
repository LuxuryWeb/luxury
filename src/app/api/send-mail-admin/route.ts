import { Resend } from "resend";
import { NextRequest } from "next/server";
import EmailAdmin from "../../../components/Emails/EmailAdmin";
import EmailUser from "@/components/Emails/EmailUser";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: NextRequest) {
  // const { name, email, dni } = await request.json();

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["luxurygoldweb@gmail.com"],
      subject: `Juan se ha unido a Luxury gold!`,
      react: `<h1>Hola</h1>`,
    });

    return Response.json({ message: "Email Sent" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error", error }, { status: 500 });
  }
}
