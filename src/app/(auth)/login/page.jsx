"use client"
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';

const login = () => { 


 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")
 const [error,setError]=useState("")
 const [loading,setLoading]=useState(false)
 const router=useRouter()

 const handleLogin=async(e)=>{
   e.preventDefault()
   setLoading(true)
   setError("") 

   try{
   const res=await signIn("credentials",{
       email:email,
       password:password,
       redirect:false,
   }) 
   if(res.error){
     setError("Invalid email or password")
     setLoading(false)
   } 
   else{ 
    setLoading(false)
     router.push("/")
   }
 } 
 catch (err) {
            setError("Something went wrong!");
            setLoading(false);
        }
 } 
 











    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid md:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/10 backdrop-blur-xl">
        
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-between p-10 bg-white/5 text-white">
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Welcome Back
            </h1>
            <p className="mt-4 text-slate-300 text-base leading-7">
              Access your account with a clean, modern, and professional login interface.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white/10 border border-white/10">
              <h3 className="text-lg font-semibold">Fast Access</h3>
              <p className="text-sm text-slate-300 mt-2">
                A premium layout designed for a strong first impression.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/10 border border-white/10">
              <h3 className="text-lg font-semibold">Secure Experience</h3>
              <p className="text-sm text-slate-300 mt-2">
                Elegant authentication UI built with modern design standards.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className=" p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="max-w-md mx-auto">
            <div className="mb-8 text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-800">Login</h2>
              <p className="text-slate-500 mt-2">
                Sign in to continue to your dashboard
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Email Address
                </label>
                <input
                  type="email" required onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium  mb-2">
                  Password
                </label>
                <input
                  type="password" onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3  rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="rounded border-slate-300" />
                  Remember me
                </label>
                <Link href="/" className="text-indigo-600 font-medium hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                     type="submit"
                         className="w-full bg-indigo-600 ..."
                          disabled={loading}>

                   {loading ? "Signing In..." : "Sign In"}
</button> 

  <button onClick={()=>signIn('google')} className='w-full bg-indigo-600 ...'>Sign in with Google </button>
            </form>
            {error && (
  <p className="text-red-500 text-sm mt-2">
    {error}
  </p>
)}

            <p className="text-sm text-center text-slate-500 mt-6">
              Don’t have an account?{" "}
              <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default login;