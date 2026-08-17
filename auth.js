import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import pool from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const result = await pool.query(
          "SELECT id, name, email, password_hash FROM users WHERE email = $1",
          [credentials.email]
        );
        const user = result.rows[0];
        if (!user || !user.password_hash) return null;

        const valid = await bcrypt.compare(credentials.password, user.password_hash);
        if (!valid) return null;

        return { id: String(user.id), name: user.name, email: user.email };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        await pool.query(
          `INSERT INTO users (email, name, google_id)
           VALUES ($1, $2, $3)
           ON CONFLICT (email) DO UPDATE SET google_id = EXCLUDED.google_id, name = EXCLUDED.name`,
          [user.email, user.name, account.providerAccountId]
        );
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (account && user?.email) {
        const result = await pool.query("SELECT id FROM users WHERE email = $1", [user.email]);
        if (result.rows[0]) token.id = result.rows[0].id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
