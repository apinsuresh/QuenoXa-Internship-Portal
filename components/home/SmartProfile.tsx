"use client";

import { motion } from "framer-motion";
import { SparkleDoodle } from "@/components/ui/Doodles";

export function SmartProfile({ progress }: { progress: number }) {
  const achievements = [
    { label: "Profile 25% Complete", done: progress > 0 },
    { label: "Resume Uploaded", done: progress >= 75 },
    { label: "Portfolio Added", done: progress === 100 }
  ];

  return (
    <motion.div 
      className="bg-[#FFF4C2] p-6 shadow-md w-56 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      {/* Tape */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-zinc-300 -rotate-2 opacity-90 mix-blend-multiply"></div>
      
      <div className="flex items-center gap-2 mb-4 relative">
        <SparkleDoodle className="w-5 h-5 text-brand-black" />
        <h3 className="font-heading font-bold text-lg text-brand-black">Your Progress</h3>
        <svg className="w-6 h-6 absolute -right-2 -top-2 text-brand-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </div>

      <div className="space-y-4 font-sans text-sm text-brand-black">
        {achievements.map((ach, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full border border-brand-black flex items-center justify-center ${ach.done ? 'bg-[#6DFF33]/30' : 'bg-transparent'}`}>
              {ach.done && <span className="font-sans text-xs font-bold text-brand-black">✓</span>}
            </div>
            <span className={ach.done ? 'text-brand-black' : 'text-zinc-500'}>{ach.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
