// src/pages/SignupPage.jsx

import { Link } from "react-router-dom";
import { User, Mail, Lock, Sparkles } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex items-center justify-center px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-indigo-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-600/20 blur-3xl rounded-full"></div>

      <div className="relative w-full max-w-lg bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10 shadow-2xl">

        <div className="text-center mb-10">

          <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-indigo-500/30">
            <Sparkles size={28} />
          </div>

          <h1 className="text-5xl font-black text-white mb-3">
            Create Account
          </h1>

          <p className="text-slate-300">
            Start your AI journey with VisionCaption
          </p>
        </div>

        <form className="space-y-6">

          <div>
            <label className="text-slate-300 block mb-2">
              Full Name
            </label>

            <div className="flex items-center bg-slate-800/70 border border-white/10 rounded-2xl px-4">
              <User size={18} className="text-slate-400" />

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent px-3 py-4 text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-slate-300 block mb-2">
              Email
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
            <label className="text-slate-300 block mb-2">
              Password
            </label>

            <div className="flex items-center bg-slate-800/70 border border-white/10 rounded-2xl px-4">
              <Lock size={18} className="text-slate-400" />

              <input
                type="password"
                placeholder="Create password"
                className="w-full bg-transparent px-3 py-4 text-white outline-none"
              />
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] transition-all duration-300 py-4 rounded-2xl font-bold text-white shadow-2xl shadow-indigo-500/30">
            Create Account
          </button>

        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-400">
            Already have an account?{" "}

            <Link
              to="/login"
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}