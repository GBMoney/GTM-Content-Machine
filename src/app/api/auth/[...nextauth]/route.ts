import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

const handler = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const valid = await compare(credentials.password, process.env.DEV_PASSWORD_HASH || "$2a$10$3euPcmQFCiblsZeEu5s7pOdAUGgY4xI8odTfdWX5ePwR6phGfQfDW");
        if (!valid) return null;
        return { id: "dev-user", email: credentials.email, name: "Dev User" };
      }
    })
  ],
  pages: { signIn: "/" }
});

export { handler as GET, handler as POST };
