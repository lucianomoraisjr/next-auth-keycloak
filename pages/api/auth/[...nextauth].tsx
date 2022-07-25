import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";
export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID || '',
      clientSecret: process.env.KEYCLOAK_SECRET || '',
      issuer: process.env.KEYCLOAK_ISSUER,
    })
  ],
  callbacks: {
    async signIn() {
      return true
    },
    async redirect({ baseUrl }) {
      return baseUrl
    },
    async session({ session}) {
      return session
    },
    async jwt({ token,account }) {
      token.userRole = "admin"
      if(account?.access_token){
        token.token = account.access_token
      }
      return token
    },
  },
})