"use client"
import { Postuser } from '@/action/server/auth';
import Link from 'next/link';
import React from 'react';

const register = () => { 

    
     const handleRegister=async (e)=>{
       e.preventDefault() 
       const Form=e.target  

        
      const name=Form.name.value
      const email=Form.email.value 
       const password=Form.password.value  
       
      
      


        
        
     } 
      
  

  


    return (
       <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid md:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/10 backdrop-blur-xl">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center p-10 bg-white/5 text-white">
          <h1 className="text-4xl font-bold leading-tight">
            Create Your Account
          </h1>
          <p className="mt-4 text-slate-300 leading-7">
            Join the platform with a sharp, elegant, and conversion-friendly register page design.
          </p>

          <div className="mt-10 space-y-4">
            <div className="p-5 rounded-2xl bg-white/10 border border-white/10">
              <h3 className="font-semibold text-lg">Modern Layout</h3>
              <p className="text-sm text-slate-300 mt-2">
                Optimized spacing, clean hierarchy, and responsive card structure.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/10 border border-white/10">
              <h3 className="font-semibold text-lg">Professional Design</h3>
              <p className="text-sm text-slate-300 mt-2">
                Crafted for strong UI presentation without unnecessary clutter.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="max-w-md mx-auto">
            <div className="mb-8 text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-800">Register</h2>
              <p className="text-slate-500 mt-2">
                Create a new account to get started
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text" name='name'
                  placeholder="Enter your full name"
                  className="w-full  text-black px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email" name='email'
                  placeholder="Enter your email"
                  className="w-full px-4 text-black py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <input
                  type="password" name='password'
                  placeholder="Create password"
                  className="w-full px-4 py-3 text-black rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

           

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg shadow-indigo-200"
              >
                Create Account
              </button>

              {/* Loading Button Design Only */}
              <button
                type="button"
                className="w-full bg-slate-900 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 opacity-90"
              >
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Creating Account...
              </button>
            </form>

            <p className="text-sm text-center text-slate-500 mt-6">
              Already have an account?{" "}
              <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
                <Link href={'/login'}>Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default register;