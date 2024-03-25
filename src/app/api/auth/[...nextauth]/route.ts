import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectMongoDb } from "@/app/lib/mongodb";
import User from "@/models/User.model";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async session({ user, token, session }: any) {
      const { name, email, sub, picture } = token;

      try {
        await connectMongoDb();
        const userExists = await User.findOne({ email });

        if (!userExists) {
          const res = await fetch("https://www.luxurygold.click/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              sub,
              picture,
            }),
          });

          if (res.ok) {
            await fetch("https://www.luxurygold.click/api/send-mail-admin", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email }),
            });
            return user;
          }
        }

        if (session) {
          return {
            ...session,
            user: {
              ...session.user,
              role: userExists?.role ?? "",
              status: userExists?.status ?? "",
              userId: userExists?.userId ?? "",
            },
          };
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  // async jwt({ trigger, token, session, user }:  ) {
  //   if (trigger === "update") {
  //     return { ...token, ...session.user };
  //   }

  //   return { token, user };
  // },
});

export { handler as GET, handler as POST };
