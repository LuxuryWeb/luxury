import { Resend } from "resend";
import { NextRequest } from "next/server";
import EmailAdmin from "../../../components/Emails/EmailAdmin";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: NextRequest) {
  const { name } = await request.json();

  try {
    await resend.emails.send({
      from: "admin@luxurygold.click",
      to: ["luxurygoldweb@gmail.com"],
      subject: `${name} se ha unido a Luxury gold!`,
      react: EmailAdmin({
        user: name,
      }),
    });

    return Response.json({ message: "Email Sent" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error", error }, { status: 500 });
  }
}
