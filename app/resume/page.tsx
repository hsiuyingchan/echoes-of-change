// ============================================================
// HSIU YING CHAN'S DIGITAL RESUME
// ============================================================

import { Logo } from "@/components/Icons";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer group">
            <a href="/" className="flex items-center gap-3">
              <Logo className="w-8 h-8 group-hover:rotate-180 transition-transform duration-1000" />
              <span className="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
                Hsiu Ying Chan
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#experience" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#skills" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#education" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Education</a>
            <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-grow">
                <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-2">
                  Hsiu Ying Chan
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-4">
                  AI-Driven Initiative Enthusiast
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hsiu.ying.chan@gmail.com
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  A former Custom Home Builder and Construction Manager, now studying Artificial Intelligence with a focus on innovative AI-driven initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-12 flex items-center gap-3">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Professional Experience
            </h2>

            <div className="space-y-12">
              <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Career Break</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Focused on Family</p>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full h-fit">
                    January 2020 to December 2025
                  </span>
                </div>
                <div className="mb-4 text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  Dedicated time to family responsibilities and personal development.
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
                <div className="absolute w-4 h-4 bg-slate-300 dark:bg-slate-700 rounded-full -left-[9px] top-1"></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">S S K BUILDER, INC.</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">California General Building Contractor</p>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full h-fit">
                    February 2006 to December 2019
                  </span>
                </div>
                <div className="mb-4">
                    <p className="text-slate-700 dark:text-slate-300 font-semibold mb-2">Custom Home Builder & Construction Manager:</p>
                    <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                        New Home Construction
                    </li>
                    <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                        Residential Home Construction Services
                    </li>
                    <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                        Home Additions / Renovations
                    </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-12 flex items-center gap-3">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">California Science And Technology University</h3>
                    <p className="text-blue-600 dark:text-blue-400">Student</p>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-full border border-slate-100 dark:border-slate-700 h-fit">
                    2026
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Coursework (Completed & Ongoing):</p>
                  <ul className="grid grid-cols-1 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <div><span className="font-medium text-slate-900 dark:text-slate-200">CSE/MB 600: Python for AI</span> <span className="text-xs opacity-70 ml-1">(2025 Fall / Term 2)</span></div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <div><span className="font-medium text-slate-900 dark:text-slate-200">CSE 590: Advanced AI Technologies: Physics-Guided AI, Agentic Systems, and Explainability</span> <span className="text-xs opacity-70 ml-1">(2025 Fall / Term 2)</span></div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <div><span className="font-medium text-slate-900 dark:text-slate-200">MB/CSE 638: Deep Learning with TensorFlow</span> <span className="text-xs opacity-70 ml-1">(2026 Spring / Term 2)</span></div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <div><span className="font-medium text-slate-900 dark:text-slate-200">MB/CSE 692: Digital Content Creation: Video Production & Editing</span> <span className="text-xs opacity-70 ml-1">(2026 Spring / Term 2)</span></div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <div><span className="font-medium text-slate-900 dark:text-slate-200">CSE/MB 604: Machine Learning Fundamentals</span> <span className="text-xs opacity-70 ml-1">(2026 Spring / Term 1)</span></div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <div><span className="font-medium text-slate-900 dark:text-slate-200">CSE 612: Computer Vision and Multimodal (Includes VLA Models)</span> <span className="text-xs opacity-70 ml-1">(2026 Spring / Term 1)</span></div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 flex-shrink-0 animate-pulse"></span>
                      <div><span className="font-bold text-slate-900 dark:text-slate-200">CSE 642: Agentic AI with Opencode & Openclaw</span> <span className="text-xs text-amber-600 dark:text-amber-400 font-bold ml-1">(2026 Summer / Term 1 - Ongoing)</span></div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 flex-shrink-0 animate-pulse"></span>
                      <div><span className="font-bold text-slate-900 dark:text-slate-200">CSE 552: Full Stack Software Development in the Age of AI Agents</span> <span className="text-xs text-amber-600 dark:text-amber-400 font-bold ml-1">(2026 Summer / Term 1 - Ongoing)</span></div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Bachelor of Science, Applied Data Processing Science</h3>
                <p className="text-blue-600 dark:text-blue-400">Northern Illinois University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Hsiu Ying Chan. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
