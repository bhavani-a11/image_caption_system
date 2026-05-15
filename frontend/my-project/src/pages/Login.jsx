// src/pages/LoginPage.jsx

import { Link } from "react-router-dom";
import { Sparkles, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-2xl">

        <div className="text-center mb-10">

          <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Sparkles size={28} />
          </div>

          <h1 className="text-4xl font-black text-white mb-3">
            Welcome Back
          </h1>

          <p className="text-slate-400">
            Login to continue using VisionCaption AI
          </p>
        </div>

        <form className="space-y-6">

          <div>
            <label className="text-slate-300 mb-2 block">
              Email Address
            </label>

            <div className="flex items-center bg-slate-800/70 border border-white/10 rounded-2xl px-4">
              <Mail size={18} className="text-slate-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-4 text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-slate-300 mb-2 block">
              Password
            </label>

            <div className="flex items-center bg-slate-800/70 border border-white/10 rounded-2xl px-4">
              <Lock size={18} className="text-slate-400" />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent px-3 py-4 text-white outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-400">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Forgot Password?
            </button>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-500 transition py-4 rounded-2xl font-bold text-white shadow-xl shadow-indigo-500/30">
            Login
          </button>

        </form>

        <p className="text-center text-slate-400 mt-8">
          Don’t have an account?{" "}

          <Link
            to="/signup"
            className="text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}