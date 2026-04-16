import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"



const userList=[
     {   id:1,
      name:"Fuad",
        email:"fuad@gmail.com",
        password:"123456"
     } 
]

export const authOptions = {
  providers: [
  Credentials({
    name: "Credentials",

    credentials: {
      email: { label: "Email", type: "text" },
      password: { label: "Password", type: "password" }
    },

    async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) return null

      const user = userList.find(
        (u) => u.email === credentials.email
      )

      if (!user) return null
      if (user.password !== credentials.password) return null

      return {
        id: user.id,
        email: user.email
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