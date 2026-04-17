import { dbConnect } from "@/lib/dbConnect"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

import bcrypt from "bcryptjs";



export const authOptions = {
  providers: [
  Credentials({
    name: "Credentials",

    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" }
    },

    async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) return null 
      await dbConnect() 
      const user=await dbConnect("users").findOne({email:credentials.email}) 
      if(!user) return null

      // const user = userList.find(
      //   (u) => u.email === credentials.email
      // )

      
      const isPassword=await bcrypt.compare(credentials.password,user.password)
      if(!isPassword) return null

      return {
        id: user._id.toString(),
        email: user.email,
        user:user.name
      }
    }
  })
],

  session: {
    strategy: "jwt"
  }
}
const handler =NextAuth(authOptions)

export {handler as GET,handler as POST}