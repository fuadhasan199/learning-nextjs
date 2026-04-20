import { dbConnect } from "@/lib/dbConnect"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
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
      // await dbConnect() 
      const userCollection= await dbConnect("users") 
      const user=await userCollection.findOne({email:credentials.email})

      if(!user) return null

    

      
      const isPassword=await bcrypt.compare(credentials.password,user.password)
      if(!isPassword) return null

      return {
        id: user._id.toString(),
        email: user.email,
        name:user.name ,
        role:user.role
      }
    }
  }) ,
       
       GoogleProvider({
    clientId: process.env.Goggle_Client_ID,
    clientSecret: process.env.Goggle_Client_secret
  })
    

  
],

  session: {
    strategy: "jwt"
  } ,

callbacks: {
  async signIn({ user,account,profile,credentials}) { 

   if(account?.provider==="google"){
    const userCollection=await dbConnect("users") 
    const isExists=await userCollection.findOne({email:user.email}) 
    if(!isExists){
       await userCollection.insertOne({...user,role:"user"})
    }

   }

    return true
  },
  async redirect({ url, baseUrl }) {
    return baseUrl
  },
  async session({ session, token, user }) { 
    if(token){
      session.role=token.role
    }
    return session
  },
  async jwt({ token, user, account, profile, isNewUser }) { 
       if(user) {
       token.email=user.email 
       token.role=user.role
     }
    return token
  }
}






}
const handler =NextAuth(authOptions)

export {handler as GET,handler as POST}