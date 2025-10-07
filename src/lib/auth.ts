import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "mock-client-id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "mock-client-secret",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "mock-client-id",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "mock-client-secret",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize() {
        // Mock user for build purposes
        return {
          id: "1",
          email: "test@example.com",
          name: "Test User",
        }
      }
    })
  ],
  session: {
    strategy: "jwt" as const
  },
  callbacks: {
    async jwt({ token, user }: { token: Record<string, unknown>; user: Record<string, unknown> | undefined }) {
      if (user) {
        token.id = (user as Record<string, unknown>).id as string
      }
      return token
    },
    async session({ session, token }: { session: Record<string, unknown>; token: Record<string, unknown> }) {
      if (token) {
        (session.user as Record<string, unknown>).id = token.id as string
      }
      return session
    }
  },
  pages: {
    signIn: "/authentication",
    signUp: "/authentication",
  }
}

const handler = NextAuth(authOptions)
const auth = handler.auth

export { handler as GET, handler as POST, auth }