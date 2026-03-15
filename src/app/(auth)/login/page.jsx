import React from 'react';

const login = () => {
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
        <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="max-w-md mx-auto">
            <div className="mb-8 text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-800">Login</h2>
              <p className="text-slate-500 mt-2">
                Sign in to continue to your dashboard
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="rounded border-slate-300" />
                  Remember me
                </label>
                <a href="/" className="text-indigo-600 font-medium hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="button"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg shadow-indigo-200"
              >
                Sign In
              </button>

              {/* Loading Button Design Only */}
              <button
                type="button"
                className="w-full bg-slate-900 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 opacity-90"
              >
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Loading...
              </button>
            </form>

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