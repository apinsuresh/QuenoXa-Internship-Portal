"use client";

import { motion } from "framer-motion";

export function WhyIntern() {
  const benefits = [
    "Real-world Projects",
    "Mentorship",
    "Skill Development",
    "Certificate",
    "Placement Support"
  ];

  return (
    <motion.div 
      className="bg-[#D1C2F7] p-6 shadow-md w-56 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      {/* Tape */}
      <div className="absolute -top-3 right-4 w-8 h-4 bg-[#6DFF33] rotate-6 opacity-80 mix-blend-multiply"></div>
      
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-caveat text-3xl font-bold text-brand-black leading-tight">Why Intern<br/>at Quenoxa?</h3>
        <svg className="w-8 h-8 text-brand-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      </div>

      <ul className="space-y-2 font-sans text-sm text-brand-black">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            {benefit}
          </li>
        ))}
      </ul>
      
      <svg className="absolute bottom-2 right-2 w-8 h-8 text-brand-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
    </motion.div>
  );
}
