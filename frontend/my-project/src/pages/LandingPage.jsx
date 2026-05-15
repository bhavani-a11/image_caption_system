// src/pages/LandingPage.jsx

import { Link } from "react-router-dom";
import {
  Sparkles,
  ImageIcon,
  Zap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 lg:px-20 py-6 border-b border-white/10 backdrop-blur-lg">
        
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl">
            <Sparkles size={22} />
          </div>

          <h1 className="text-2xl font-bold tracking-wide">
            VisionCaption AI
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/30"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20 py-24 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div>

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <Sparkles size={18} className="text-indigo-400" />
            <p className="text-sm text-indigo-300">
              AI Powered Caption Generator
            </p>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
            Transform Images Into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              {" "}Smart Captions
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl">
            Upload any image and generate intelligent, accurate,
            and creative captions instantly using powerful AI models.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/signup"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-2xl font-semibold transition shadow-xl shadow-indigo-500/30"
            >
              Start Free
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/login"
              className="px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition"
            >
              Login
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12">
            <div>
              <h2 className="text-3xl font-bold">10K+</h2>
              <p className="text-slate-400">Captions Generated</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">99%</h2>
              <p className="text-slate-400">AI Accuracy</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">24/7</h2>
              <p className="text-slate-400">Cloud Access</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative">

          <div className="absolute -top-10 -right-10 bg-indigo-500/20 blur-3xl w-72 h-72 rounded-full"></div>

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-6 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
              alt="AI"
              className="rounded-3xl h-[450px] w-full object-cover"
            />

            <div className="mt-6 bg-slate-900/80 border border-white/10 rounded-2xl p-5">
              <p className="text-sm text-slate-400 mb-2">
                AI Generated Caption
              </p>

              <p className="text-lg font-medium leading-relaxed">
                “An advanced AI system analyzing image content
                and generating contextual captions in real time.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 lg:px-20 pb-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose VisionCaption AI?
          </h2>

          <p className="text-slate-400">
            Powerful AI tools designed for modern developers and creators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 hover:bg-white/10 transition border border-white/10 rounded-3xl p-8">
            <ImageIcon className="text-indigo-400 mb-5" size={40} />

            <h3 className="text-2xl font-bold mb-4">
              Smart Vision
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Deep learning models understand images with incredible accuracy.
            </p>
          </div>

          <div className="bg-white/5 hover:bg-white/10 transition border border-white/10 rounded-3xl p-8">
            <Zap className="text-yellow-400 mb-5" size={40} />

            <h3 className="text-2xl font-bold mb-4">
              Ultra Fast
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Generate captions in seconds with optimized AI inference.
            </p>
          </div>

          <div className="bg-white/5 hover:bg-white/10 transition border border-white/10 rounded-3xl p-8">
            <ShieldCheck className="text-green-400 mb-5" size={40} />

            <h3 className="text-2xl font-bold mb-4">
              Secure Cloud
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Safe uploads with secure processing and cloud scalability.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}