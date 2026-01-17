import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen font-sans antialiased">
      {/* LEFT SIDE: Branding and Stats */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-700 to-blue-600 p-16 flex-col justify-between text-white relative overflow-hidden">
        {/* Logo */}
        <div className="flex items-center gap-3 z-10">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <FileText size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold leading-none">GrievEase</h1>
            <p className="text-xs opacity-80">Resolution System</p>
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-md z-10">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            AI-Powered Student Grievance Resolution
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            Submit grievances in natural language and let our AI automatically classify, route, and track resolutions across departments.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 z-10">
          {[
            { label: '95%', sub: 'Classification Accuracy' },
            { label: '48h', sub: 'Avg. Resolution Time' },
            { label: '8', sub: 'Departments' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl">
              <div className="text-3xl font-bold mb-1">{stat.label}</div>
              <div className="text-[10px] uppercase tracking-wider opacity-70 leading-tight">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-sm opacity-60 z-10">
          © 2024 University Grievance System. All rights reserved.
        </p>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="w-full lg:w-1/2 bg-gray-50 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Main Login Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-10 mb-8 border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
              <p className="text-gray-500 text-sm mt-1">Sign in to access your dashboard</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="you@university.edu"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-[0.98]">
                Sign In <ArrowRight size={18} />
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              Don't have an account? <a href="#" className="text-blue-600 font-bold hover:underline">Register</a>
            </div>
          </div>

          {/* Demo Credentials Card */}
          <div className="bg-gray-100/50 rounded-2xl p-6 border border-gray-200/60">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Demo Credentials</p>
            <div className="space-y-3">
              {[
                { role: 'Student', email: 'student@university.edu' },
                { role: 'Faculty', email: 'faculty@university.edu' },
                { role: 'Admin', email: 'admin@university.edu' }
              ].map((cred) => (
                <div key={cred.role} className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-sm">
                  <span className="font-bold text-gray-700">{cred.role}:</span>
                  <span className="text-gray-500">{cred.email}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;