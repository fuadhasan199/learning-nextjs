"use server"

import { dbConnect } from "@/lib/dbConnect"
import bcrypt from "bcryptjs";

export const Postuser=async (payload) =>{
     console.log(payload)
 

const isExists=await dbConnect("users").findOne({email:payload.email}) 
if(isExists){
     return {
        success:false,
        message:"User Already Exits" 
     } 
   
} 
const hashPassword=await bcrypt.hash(payload.password,10)
           console.log("hashPassword",hashPassword) 


  



const newUser={
     ...payload,
     password:hashPassword
} 
console.log(newUser) 

const result=await dbConnect("users").insertOne(newUser) 
if(result.acknowledged){
    return{
        success:true,
        message:"user created successfully"
    }
} 
}



