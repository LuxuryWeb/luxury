import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      image: string;
      email: ReactNode;
      name: string;
      role: string;
      status: string;
      id: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    token: any;
    user: any;
    trigger: any;
    session: any;
  }
}
