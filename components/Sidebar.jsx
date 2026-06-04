'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, BarChart3, Settings, Rocket } from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <aside className="fixed bottom-0 left-0 z-50 flex h-16 w-full border-t border-zinc-800/80 bg-zinc-950/80 p-2 backdrop-blur-xl md:sticky md:top-0 md:h-screen md:w-64 md:flex-col md:border-r md:border-t-0 md:p-6">
      {}
      <div className="hidden items-center gap-3 px-2 py-4 md:flex">
        <Rocket className="h-6 w-6 text-indigo-500 animate-pulse" />
        <span className="text-lg font-bold tracking-wider bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          NEXUS
        </span>
      </div>

      {}
      <nav className="flex w-full items-center justify-around gap-1 md:mt-8 md:flex-col md:justify-start md:gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`group relative flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-300 w-full justify-center md:justify-start ${
                isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {}
              {isActive && (
                <motion.div
                  layoutId="activeTabBackground"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.05)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              <Icon className={`h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-indigo-400' : ''}`} />
              <span className="hidden md:inline relative z-10">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {}
      <div className="hidden mt-auto items-center gap-3 border-t border-zinc-900 pt-4 md:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-900/40 border border-indigo-500/20 text-xs font-bold text-indigo-300">
          AN
        </div>
        <div className="text-left">
          <div className="text-xs font-semibold text-zinc-200">Anshu Sharma</div>
          <div className="text-[10px] text-zinc-500">Student Account</div>
        </div>
      </div>
    </aside>
  );
}


