"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, XCircle, ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/data/content";

export default function TransformationSection() {
  return (
    <section className="py-28 bg-navy-950 text-sand-100 relative overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-navy-800/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PART 1: DO YOU OFTEN FEEL... ("IS THIS YOU?") */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-500 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SUB-SURFACE EMOTIONAL INVENTORY</span>
          </span>
          <h2 className="editorial-heading text-4xl sm:text-6xl text-sand-100">
            Do You Often <span className="text-gold-gradient italic font-serif">Feel...</span>
          </h2>
          <p className="text-sand-200/70 text-sm sm:text-base font-light">
            Emotional challenges manifest silently in everyday life. Recognize any of these subconscious patterns?
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {siteConfig.problems.map((problem, idx) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-navy-900/60 border border-navy-800/80 hover:border-gold-500/30 transition-all flex flex-col gap-3 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-navy-800 border border-navy-700 flex items-center justify-center text-gold-500/80 shrink-0">
                  <XCircle className="w-4 h-4 text-gold-500/80" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-sand-100 group-hover:text-gold-400 transition-colors">
                  {problem.title}
                </h3>
              </div>
              <p className="text-xs text-sand-200/70 font-light leading-relaxed pl-11">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Reassurance Message */}
        <div className="text-center py-6 px-8 max-w-xl mx-auto rounded-full bg-navy-900/80 border border-gold-500/20 text-sand-200 text-xs sm:text-sm font-light mb-24">
          <strong className="text-gold-500 font-semibold">You're not alone.</strong> Hundreds of people have felt exactly this way before experiencing Ho'oponopono.
        </div>

        {/* PART 2: BEFORE → AFTER TRANSFORMATION */}
        <div className="pt-12 border-t border-navy-800/80">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage-500">
              INNER STATE SPECTRUM
            </span>
            <h2 className="editorial-heading text-3xl sm:text-5xl text-sand-100">
              Your Journey: <span className="text-sage-gradient italic font-serif">Before & After</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* BEFORE State */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 sm:p-10 rounded-3xl bg-navy-900/40 border border-navy-800/80 flex flex-col justify-between gap-6"
            >
              <div className="flex items-center justify-between pb-6 border-b border-navy-800">
                <span className="text-xs uppercase tracking-widest font-semibold text-sand-200/50">
                  CURRENT STATE
                </span>
                <span className="px-3 py-1 rounded-full bg-navy-800 text-sand-200/60 text-xs font-mono">
                  BEFORE WORKSHOP
                </span>
              </div>

              <ul className="space-y-4">
                {siteConfig.beforeAfter.before.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-sand-200/70 font-light">
                    <XCircle className="w-4 h-4 text-navy-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* AFTER State */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-navy-800 via-navy-800/90 to-navy-900 border border-gold-500/30 shadow-2xl shadow-navy-950 flex flex-col justify-between gap-6"
            >
              <div className="flex items-center justify-between pb-6 border-b border-gold-500/20">
                <span className="text-xs uppercase tracking-widest font-semibold text-gold-500">
                  TRANSFORMED STATE
                </span>
                <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono font-semibold">
                  AFTER WORKSHOP
                </span>
              </div>

              <ul className="space-y-4">
                {siteConfig.beforeAfter.after.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-sand-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
