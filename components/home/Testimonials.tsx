"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Rahul S.",
      role: "Full Stack Intern",
      quote: "The live projects gave me the exact experience I needed to crack my first job. Quenoxa's mentorship is unmatched!",
      rating: 5
    },
    {
      name: "Priya M.",
      role: "AI & ML Intern",
      quote: "I loved the notebook aesthetic of their portal and that creativity shines through their entire internship program.",
      rating: 5
    },
    {
      name: "Amit K.",
      role: "Cyber Security Intern",
      quote: "Working on enterprise-level security protocols during my internship was an eye-opener. Highly recommended.",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="relative py-12">
      <div className="text-center mb-16">
        <h2 className="font-heading text-4xl font-bold text-white mb-4">Student Experiences</h2>
        <div className="w-24 h-1 bg-brand-primary mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-sm shadow-xl relative"
            style={{ borderRadius: "2px 15px 2px 15px" }}
          >
            {/* Binder clip or sketch effect */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-zinc-300 rounded-tr-xl"></div>
            
            <div className="mb-4 text-brand-primary flex gap-1">
              {[...Array(5)].map((_, idx) => (
                <span key={idx}>{idx < t.rating ? "★" : "☆"}</span>
              ))}
            </div>
            
            <p className="font-caveat text-2xl text-zinc-700 mb-6">"{t.quote}"</p>
            
            <div className="border-t border-dashed border-zinc-300 pt-4 mt-auto">
              <h4 className="font-heading font-bold text-brand-black">{t.name}</h4>
              <p className="font-sans text-sm text-zinc-500">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
