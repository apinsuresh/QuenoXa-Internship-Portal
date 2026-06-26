import Link from "next/link";

export function Footer() {
  const programs = [
    "Artificial Intelligence",
    "Data Science",
    "Machine Learning",
    "Python Development",
    "Java Development",
    "Full Stack Development",
    "Web Development",
    "UI/UX Design",
    "Cyber Security",
    "Data Analysis and Visualization",
    "App Development",
    "Cloud Computing"
  ];

  return (
    <footer className="bg-brand-black text-white pt-10 pb-6 border-t-[4px] border-brand-primary/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 relative z-10">
          
          <div className="col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-heading font-bold text-3xl tracking-tighter">
                QUENOXA<span className="text-brand-primary">.</span>
              </span>
            </Link>
            <p className="text-zinc-400 font-sans text-sm leading-relaxed max-w-xs">
              Empowering the next generation of innovators with real-world projects, mentorship, and enterprise-level experience.
            </p>
            <div className="flex gap-5 pt-2">
              <a href="https://www.linkedin.com/company/quenoxa-global-technologies/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-brand-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.instagram.com/quenoxa_global_technologies" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-brand-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-heading font-bold text-lg mb-5 text-white">Programs</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-zinc-400 font-sans text-sm">
              {programs.map((program) => (
                <li key={program}>
                  <Link href={`#${program.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="hover:text-brand-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-heading font-bold text-lg mb-5 text-white">Contact Us</h4>
            <ul className="space-y-4 text-zinc-400 font-sans text-sm">
              <li className="flex flex-col">
                <span className="text-white mb-1 font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  Email
                </span>
                <a href="mailto:info@quenoxa.in" className="hover:text-brand-primary transition-colors ml-6">info@quenoxa.in</a>
              </li>
              <li className="flex flex-col">
                <span className="text-white mb-1 font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                  WhatsApp
                </span>
                <a href="https://wa.me/916369480281" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors ml-6">+91 63694 80281</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-zinc-500 font-sans text-sm">
            © 2026 Quenoxa Global Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-zinc-500 font-sans text-sm">
            <Link href="#privacy-policy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link href="#terms-of-service" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      {/* Decorative notebook doodle effect on the footer */}
      <div className="absolute top-4 right-10 opacity-5 pointer-events-none z-0">
         <span className="font-kalam text-8xl text-brand-primary -rotate-12 inline-block">Innovate</span>
      </div>
    </footer>
  );
}

