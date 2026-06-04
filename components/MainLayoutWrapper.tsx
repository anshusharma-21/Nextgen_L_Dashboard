'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, BarChart3, Settings, Rocket, LogOut, Sun, Moon } from 'lucide-react';
import DashboardGrid from './DashboardGrid';
import { Course } from './DynamicIcon';

interface MainLayoutWrapperProps {
  courses: Course[];
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function MainLayoutWrapper({ courses }: MainLayoutWrapperProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`flex min-h-screen w-full flex-col md:flex-row transition-colors duration-500 overflow-x-hidden ${
      isDarkMode ? 'bg-[#030303] text-zinc-100' : 'bg-[#faf9f6] text-zinc-900'
    }`}>
      
      <aside className={`fixed bottom-0 left-0 z-50 flex h-16 w-full border-t p-2 backdrop-blur-2xl md:sticky md:top-0 md:h-screen md:w-72 md:flex-col md:border-r md:border-t-0 md:p-6 transition-colors duration-500 shrink-0 ${
        isDarkMode ? 'border-zinc-900 bg-zinc-950/90' : 'border-zinc-200 bg-white/90'
      }`}>
        
        <div className={`hidden items-center justify-between w-full px-2 py-4 md:flex border-b pb-5 mb-6 ${
          isDarkMode ? 'border-zinc-900' : 'border-zinc-100'
        }`}>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 shadow-md">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-base font-black tracking-widest uppercase">NEXUS</span>
          </div>
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2.5 rounded-xl border transition-all active:scale-95 shrink-0 ml-auto block ${
              isDarkMode ? 'border-zinc-800 bg-zinc-900 text-amber-400 hover:bg-zinc-800' : 'border-zinc-200 bg-zinc-100 text-indigo-600 hover:bg-zinc-200'
            }`}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        
        <nav className="flex w-full items-center justify-around gap-1 md:flex-col md:justify-start md:gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`group relative flex items-center gap-4 rounded-xl px-5 py-3.5 text-sm font-bold tracking-wider transition-all duration-300 w-full justify-center md:justify-start ${
                  isActive 
                    ? 'text-white' 
                    : isDarkMode ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebarActiveBubble"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 border border-indigo-400/20 shadow-md"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                
                <Icon className={`h-5 w-5 relative z-10 transition-transform group-hover:scale-110 ${
                  isActive ? 'text-white' : 'text-zinc-400'
                }`} />
                <span className="hidden md:inline relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className={`mt-auto hidden w-full border-t pt-4 md:block ${
          isDarkMode ? 'border-zinc-900' : 'border-zinc-100'
        }`}>
          <button 
            onClick={() => alert('Logout execution completed.')}
            className={`flex w-full items-center gap-4 rounded-xl px-5 py-3.5 text-sm font-bold tracking-wider transition-all border group ${
              isDarkMode ? 'bg-zinc-900/40 border-zinc-900 text-zinc-400 hover:bg-red-950/20 hover:text-red-400' : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:bg-red-50'
            }`}
          >
            <LogOut className="h-4 w-4 text-zinc-500 group-hover:text-red-500" />
            <span>Logout Account</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 w-full min-w-0 px-4 pb-28 pt-6 md:p-8 lg:p-12 transition-all duration-300 overflow-x-hidden">
        <DashboardGrid initialCourses={courses} activeTab={activeTab} isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}