import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "process.env.GOOGLE_ID ",
      clentSecrect: "process.GOOGLE_CLIENT_SECRECT",
    }),
  ],

  async session({ session }) {},
  async signIn({ profile }) {},
});


export {handler as GET , handler as POST};