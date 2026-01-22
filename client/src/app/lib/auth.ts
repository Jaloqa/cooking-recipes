import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "urlPassword",
      credentials: {
        password: { label: "urlPassword", type: "urlPassword" }
      },
      async authorize(credentials) {
        const password = credentials?.password as string;

        try {
          // Call your Fastify API
          const response = await fetch(
            `${process.env.SERVER_URL}/auth/check?urlPassword=${password}`
          );
          const data = await response.json();

          if (data.authenticated) {
            return { id: "1", name: "User" };
          }
          return null;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: "/login"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    }
  }
});