'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DynamicIcon, Course } from './DynamicIcon';
import { 
  Flame, CheckCircle2, AlertCircle, GraduationCap, 
  Target, Shield, Clock, Layers, Zap, Loader2,
  TrendingUp, BarChart3, Sliders, User, RefreshCw
} from 'lucide-react';

interface DashboardGridProps {
  initialCourses: Course[];
  activeTab: string;
  isDarkMode?: boolean;
}

const extendedSyllabus: Record<string, { topic: string; subtopics: string[]; status: 'Done' | 'Pending' }[]> = {
  "Advanced Next.js Architecture": [
    { topic: "01 . Routing & Layout Core Core Rules", subtopics: ["Parallel Routes & Intercepting Paths Layouts", "Dynamic Route Segments & Advanced Route Handlers Rules", "Global Middleware Setup & Matchers Engine Control"], status: "Done" },
    { topic: "02 . Server Actions & RSC Data Pipelines", subtopics: ["React Server Components (RSC) Fetching Architecture", "Server Actions Forms Validation & Optimistic UI Updates", "Deep Data Caching Layers & Revalidation Tags Logs"], status: "Done" },
    { topic: "03 . Modern Hydration Dynamic Patterns", subtopics: ["Streaming HTML Component Architecture Setup", "Partial Prerendering (PPR) Custom Layout Stitching Flow", "Selective Hydration & Time-to-Interactive Optimization Segments"], status: "Done" },
    { topic: "04 . Build Tools & Production Optimizations", subtopics: ["Native Rust Compiler Configuration Rules (Turbopack Engine)", "Dynamic Code Evaluation & Micro Code-Splitting Compilations", "Production Tree-Shaking Soundness Verification Frameworks"], status: "Pending" }
  ],
  "Framer Motion Masterclass": [
    { topic: "01 . Declarative Animations Layer Specs", subtopics: ["AnimatePresence Component Layout Lifecycle Hooks", "Orchestration using Custom Variants & StaggerChildren Properties", "Custom Spring Physics Parameters Tuning Models"], status: "Done" },
    { topic: "02 . Shared Element Matrix Transitions", subtopics: ["LayoutId Magic Nodes Component Cross-Matching Systems", "Smooth Grid Component Resizing Layout Physics Operations", "Bento Box Border Live Highlight Snapping Vectors Matrix"], status: "Done" },
    { topic: "03 . Hardware-Accelerated Performance", subtopics: ["Will-Change CSS Properties & Explicit GPU Layer Promotions", "Transform & Opacity Exclusive Low-Level Render Loops", "Bypassing Layout Repaints & Browser Cost Metrics Parameters"], status: "Pending" }
  ],
  "Supabase & Postgres Deep Dive": [
    { topic: "01 . Database Schema Foundations", subtopics: ["PostgreSQL Table Constraints, Relations & Foreign Keys", "Database Indexes (B-Tree & GIN) Query Optimization Specs", "SQL Migrations Real-Time Pipelines Tracking Logs System"], status: "Done" },
    { topic: "02 . Row Level Security (RLS) Policies", subtopics: ["Strict Security Policies Configuration Verification Contracts", "Supabase Auth Context Identity Claims Mapping Sequences", "JWT Payload Inspection Inside Native SQL Code Statements"], status: "Done" },
    { topic: "03 . Real-time Architecture Engine", subtopics: ["Postgres Changes CDC Channel Orchestration Methods", "Real-time Broadcast Events & Secured Client Socket Handshakes", "Presence State Sync Engine Implementation Loops Tracking"], status: "Done" }
  ],
  "TypeScript Production Patterns": [
    { topic: "01 . Advanced Type Gymnastics", subtopics: ["Conditional Types & Deeply Nested Type Mappings", "Template Literal Types & Dynamic String Contract Bindings", "Mapped Types, Partial Overrides & Strict Assertion Filters Matrix"], status: "Done" },
    { topic: "02 . Type Inference Engineering", subtopics: ["ReturnType, Awaited & InstanceType Core Utilities", "Infer Keyword Scoping Operations In Deep Nested Framework Layers", "Branded Types For Domain-Driven Compile-Time Safety Rules"], status: "Done" },
    { topic: "03 . Validation & Runtime Contracts", subtopics: ["Zod Runtime Validation Schemas Intersecting TypeScript Interfaces", "Inferring Zod Contracts Into Type-Safe API Communication Payloads", "Strict Compiler Profiles Verification & Soundness Flags Calibration"], status: "Pending" }
  ]
};

export default function DashboardGrid({ initialCourses, activeTab, isDarkMode = true }: DashboardGridProps) {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isSubLoading, setIsSubLoading] = useState<boolean>(false);

  const handleCourseClick = (title: string) => {
    setIsSubLoading(true);
    setSelectedCourse(title);
    setTimeout(() => {
      setIsSubLoading(false);
    }, 450);
  };

  const viewVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10 }
  };

  const currentThemePanel = isDarkMode ? 'border-zinc-800 bg-[#16161f] text-zinc-100' : 'border-zinc-200 bg-white text-zinc-900 shadow-sm';

  return (
    <AnimatePresence mode="wait">
      
      {activeTab === 'dashboard' && (
        <motion.div key="db-tab" variants={viewVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8 max-w-full overflow-hidden">
          <div className={`border-b pb-5 ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
            <h1 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Control Station Overview</h1>
          </div>

          <div className={`p-8 rounded-[24px] border relative overflow-hidden ${currentThemePanel}`}>
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#f4c2c2]/5 blur-3xl pointer-events-none" />
            
            <h3 className="text-3xl font-black tracking-tight">
              Welcome back, <br />
              <span className="bg-gradient-to-r from-[#f4c2c2] via-[#ffdab9] to-[#ffb6c1] bg-clip-text text-transparent">
                Anshu Sharma
              </span>
            </h3>
            <p className={`mt-2 text-sm ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Track your daily programming milestones, curriculum code modules, and platform task checklists logs.</p>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <div className={`px-4 py-2 rounded-xl text-xs font-bold border ${isDarkMode ? 'bg-zinc-950 border-zinc-900 text-orange-400' : 'bg-zinc-50 border-zinc-200 text-orange-600'}`}>15 Days Coding Streak</div>
              <div className={`px-4 py-2 rounded-xl text-xs font-bold border ${isDarkMode ? 'bg-zinc-950 border-zinc-900 text-indigo-400' : 'bg-zinc-50 border-zinc-200 text-indigo-600'}`}>4 Loaded Modules</div>
            </div>
          </div>

          
          <div className={`p-8 rounded-[24px] border flex flex-col gap-6 ${currentThemePanel}`}>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider">Your Daily Coding Activity Log</h4>
              <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Tracks your structural compilation loops achieved across consecutive learning weeks calendar matrix.
              </p>
            </div>

           
            <div className="flex items-start gap-4 justify-start md:justify-center py-4 overflow-x-auto no-scrollbar w-full">
            
              <div className="grid grid-rows-7 gap-2 text-[10px] font-mono font-bold text-zinc-500 uppercase h-full pt-1">
                <span>Mon</span><span className="opacity-0">Tue</span><span>Wed</span><span className="opacity-0">Thu</span><span>Fri</span><span className="opacity-0">Sat</span><span>Sun</span>
              </div>

              <div className="grid grid-rows-7 grid-flow-col gap-2">
                {Array.from({ length: 119 }).map((_, i) => {
                  let bgStyle = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200';

                  if (i % 15 === 0 || i % 19 === 0) {
                    bgStyle = 'bg-[#f4c2c2] border-transparent shadow-[0_0_12px_rgba(244,194,194,0.35)] text-black';
                  } else if (i % 7 === 2 || i % 11 === 0) {
                    bgStyle = isDarkMode ? 'bg-indigo-950 border-indigo-900/50' : 'bg-indigo-50 border-indigo-200';
                  } else if (i % 9 === 0 || i % 13 === 0) {
                    bgStyle = isDarkMode ? 'bg-indigo-800 border-indigo-600/40' : 'bg-indigo-200 border-indigo-400';
                  }

                  return <motion.div key={i} whileHover={{ scale: 1.3, zIndex: 10 }} className={`h-3.5 w-3.5 rounded-[2px] border transition-colors ${bgStyle}`} />;
                })}
              </div>
            </div>

            <div className={`grid grid-cols-2 gap-4 pt-4 border-t text-xs md:grid-cols-4 ${isDarkMode ? 'border-zinc-900' : 'border-zinc-100'}`}>
              <div className="flex items-center gap-2.5"><div className="h-4 w-4 rounded-sm bg-zinc-900 border border-zinc-800" /><span className={isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}>0 Commits (Rest Day)</span></div>
              <div className="flex items-center gap-2.5"><div className="h-4 w-4 rounded-sm bg-indigo-950 border border-indigo-900/50" /><span className={isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}>1-3 Daily Tasks Finished</span></div>
              <div className="flex items-center gap-2.5"><div className="h-4 w-4 rounded-sm bg-indigo-800 border border-indigo-600/40" /><span className={isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}>4-7 Main Changes Added</span></div>
              <div className="flex items-center gap-2.5"><div className="h-4 w-4 rounded-sm bg-[#f4c2c2]" /><span className={isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}>8+ Critical Commits Passed</span></div>
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'courses' && (
        <motion.div key="cr-tab" variants={viewVariants} initial="hidden" animate="visible" exit="exit" className="space-y-10">
          <div className={`border-b pb-5 ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
            <h2 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Training Modules Architecture</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {initialCourses.map((course) => {
              const isSelected = selectedCourse === course.title;
              return (
                <motion.div
                  key={course.id}
                  onClick={() => handleCourseClick(course.title)}
                  whileHover={{ scale: 1.015, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`cursor-pointer relative flex flex-col justify-between overflow-hidden rounded-[24px] p-8 min-h-[220px] border transition-all duration-300 ${
                    isSelected 
                      ? isDarkMode ? 'border-[#f4c2c2] bg-gradient-to-b from-zinc-900 to-black shadow-xl' : 'border-indigo-500 bg-white shadow-md'
                      : isDarkMode ? 'border-zinc-800 bg-zinc-900/10 text-zinc-100' : 'border-zinc-200 bg-white text-zinc-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${isDarkMode ? 'border-zinc-800 bg-zinc-950 text-indigo-400' : 'border-zinc-200 bg-zinc-50 text-indigo-600'}`}>
                      <DynamicIcon name={course.icon_name} className="h-6 w-6" />
                    </div>
                    <span className={`text-[11px] uppercase font-bold tracking-widest px-3 py-1 rounded md border ${course.progress === 100 ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400' : 'border-zinc-500/20 text-zinc-400'}`}>
                      {course.progress === 100 ? 'Passed' : 'Active'}
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-black tracking-tight leading-tight">{course.title}</h3>
                    <div className="mt-5 border-t pt-4 border-zinc-500/10">
                      <div className="flex items-center justify-between text-xs font-bold mb-2">
                        <span className={`${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'} uppercase tracking-wider`}>Module Weight</span>
                        <span className={isSelected ? isDarkMode ? 'text-[#f4c2c2]' : 'text-indigo-600' : 'text-indigo-400'}>{course.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-950/20 rounded-full overflow-hidden border border-zinc-500/10 p-[1px]">
                        <div className={`h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`} style={{ width: `${course.progress}%` }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {selectedCourse && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={`rounded-[32px] p-6 md:p-8 border ${currentThemePanel}`}>
                {isSubLoading ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 backdrop-blur-sm z-20 rounded-[32px]">
                    <Loader2 className="h-6 w-6 text-indigo-500 animate-spin" />
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b pb-4 border-zinc-500/10">
                      <GraduationCap className="h-5 w-5 text-indigo-500" />
                      <h4 className="text-base font-black uppercase tracking-wider">Syllabus Flow Sequence: {selectedCourse}</h4>
                    </div>
                    <div className="flex flex-col gap-6">
                      {extendedSyllabus[selectedCourse]?.map((item, index) => {
                        const isDone = item.status === 'Done';
                        return (
                          <div key={index} className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-zinc-900/30 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                            <div className="flex justify-between items-center border-b pb-3 border-zinc-500/10">
                              <span className="text-sm font-black uppercase">{item.topic}</span>
                              <span className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded border ${isDone ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-rose-500/30 bg-rose-500/10 text-rose-500'}`}>{item.status}</span>
                            </div>
                            <div className="grid grid-cols-1 gap-3 mt-4">
                              {item.subtopics.map((sub, sIdx) => (
                                <div key={sIdx} className={`p-4 rounded-xl border text-sm font-medium flex items-center gap-4 ${isDarkMode ? 'bg-zinc-950/40 border-zinc-900 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700'}`}>
                                  <div className={`h-2 w-2 rounded-full ${isDone ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                                  <span>{sub}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {activeTab === 'analytics' && (
        <motion.div key="an-tab" variants={viewVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
          <div className={`border-b pb-5 ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
            <h2 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Performance Telemetry</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: 'Weekly Practice Volume', value: '4,280 LOC/wk', desc: 'Active component compilation log values' },
              { title: 'Aggregated Progress Score', value: '68.75% Mean', desc: 'Average matching scorecard calculation loops' },
              { title: 'Database Sync Channels', value: '142 Active Loops', desc: 'Secure asynchronous handshake loops setup' }
            ].map((card, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${currentThemePanel}`}>
                <span className="text-[10px] font-bold uppercase text-zinc-500 block">{card.title}</span>
                <div className="text-3xl font-black mt-3">{card.value}</div>
                <span className="text-xs text-zinc-400 mt-1 block font-light">{card.desc}</span>
              </div>
            ))}
          </div>

          <div className={`rounded-[28px] border p-8 space-y-6 ${currentThemePanel}`}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Live Optimization Vector Matrix</h4>
            <div className={`flex h-52 items-end justify-between gap-4 border rounded-2xl p-6 px-8 ${isDarkMode ? 'bg-zinc-950/40 border-zinc-900' : 'bg-zinc-50 border-zinc-200'}`}>
              {[45, 60, 92, 70, 50, 85, 100, 65, 78, 40, 95, 80].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center h-full justify-end group">
                  <div className="w-full rounded-t bg-gradient-to-t from-indigo-600 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(99,102,241,0.15)]" style={{ height: `${h}%` }} />
                  <span className={`text-xs font-mono font-black mt-3 transition-colors ${isDarkMode ? 'text-zinc-200' : 'text-zinc-900'}`}>W{i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'settings' && (
        <motion.div key="st-tab" variants={viewVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
          <div className={`border-b pb-5 ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
            <h2 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>System Preferences</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-start">
            <div className="col-span-1 md:col-span-2 space-y-6">
              
            
              <div className={`p-6 rounded-2xl border space-y-4 ${currentThemePanel}`}>
                <span className="text-xs font-bold uppercase tracking-wider block border-b pb-2 border-zinc-500/10">Developer Identity State Profile</span>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-[10px] font-bold text-zinc-500 uppercase block mb-1">User Name</label>
                    <div className={`text-xs font-bold px-4 py-3 rounded-xl border ${
                      isDarkMode ? 'bg-zinc-950 border-zinc-900 text-zinc-200' : 'bg-zinc-50 border-zinc-200 text-zinc-800 shadow-inner'
                    }`}>Anshu Sharma</div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-zinc-500 uppercase block mb-1">Scope Access Parameter</label>
                    <div className={`text-xs font-bold px-4 py-3 rounded-xl border ${
                      isDarkMode ? 'bg-zinc-950 border-zinc-900 text-indigo-400' : 'bg-zinc-50 border-zinc-200 text-indigo-600 shadow-inner'
                    }`}>Frontend Core Intern Payload</div>
                  </div>
                </div>
              </div>

              
              <div className={`p-6 rounded-2xl border space-y-3 ${currentThemePanel}`}>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block border-b pb-2 border-zinc-500/10">Supabase Sync Webhooks Controls</span>
                {[
                  { t: "Secure Row Level Security (RLS) Identity Tokens", d: "Forces runtime data payload verification loops directly across remote PostgreSQL schemas." },
                  { t: "GPU Layout Transform Orchestration Overrides", d: "Locks physics compiling parameters strictly to transform rules preventing repaints shift variables." }
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-center justify-between p-4 border rounded-xl ${isDarkMode ? 'bg-zinc-950/40 border-zinc-900/60' : 'bg-zinc-50 border-zinc-100'}`}>
                    <div className="pr-4">
                      <span className="text-xs font-bold block">{item.t}</span>
                      <span className="text-[11px] text-zinc-500 block mt-0.5 font-light">{item.d}</span>
                    </div>
                    <div className="h-5 w-10 bg-indigo-600 rounded-full flex items-center justify-end px-1 cursor-pointer"><div className="h-3.5 w-3.5 bg-white rounded-full" /></div>
                  </div>
                ))}
              </div>

            </div>

            {/* Side Environment Metadata Panel Card */}
            <div className={`col-span-1 border rounded-2xl p-6 space-y-4 shadow-md ${isDarkMode ? 'bg-zinc-950/40 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Handshake Manifest</h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                This environment build evaluates structural Next.js components parameters dynamically syncing to live remote endpoints without blocking framework hydration loops.
              </p>
              <div className="pt-3 border-t border-zinc-500/10 font-mono text-[10px] text-zinc-500 space-y-1.5">
                <div>Framework Core: Next.js 16</div>
                <div>Styles Layer: Tailwind CSS v4</div>
                <div>Physics Engine: Framer Motion</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

    </AnimatePresence>
  );
}