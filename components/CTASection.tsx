"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Calendar, Clock, Gift } from "lucide-react";
import { useModal } from "@/components/ModalContext";
import { siteConfig } from "@/lib/data/content";

export default function CTASection() {
  const { openModal } = useModal();

  return (
    <section className="py-28 bg-navy-950 text-sand-100 relative overflow-hidden">
      {/* Warm Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-gold-500/10 via-sage-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-8">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-500 text-xs font-semibold uppercase tracking-widest"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>YOUR STEP TOWARDS LASTING FREEDOM</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="editorial-heading text-4xl sm:text-6xl text-sand-100 max-w-3xl"
        >
          Ready to Begin Your <span className="text-gold-gradient italic font-serif">Transformation Journey?</span>
        </motion.h2>

        {/* Copy */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl text-sand-200/80 font-light leading-relaxed max-w-2xl"
        >
          Do not let emotional baggage, past regrets, or overthinking dictate your future. Experience live guided Ho'oponopono healing and step into emotional clarity.
        </motion.p>

        {/* Next Workshop Detail Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-gold-500/30 backdrop-blur-md max-w-xl w-full flex flex-col items-center gap-4 shadow-2xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-sand-100">
            <div className="flex items-center gap-1.5 bg-navy-950/70 px-3.5 py-2 rounded-xl border border-navy-700/60">
              <Calendar className="w-4 h-4 text-gold-500" />
              <span>Next Workshop: {siteConfig.workshop.date}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-navy-950/70 px-3.5 py-2 rounded-xl border border-navy-700/60">
              <Clock className="w-4 h-4 text-gold-500" />
              <span>Time: {siteConfig.workshop.time}</span>
            </div>
          </div>

          <button
            onClick={openModal}
            className="group w-full py-4 px-8 rounded-full text-sm font-semibold tracking-wider text-navy-950 bg-gradient-to-r from-gold-500 via-sand-200 to-gold-400 hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-xl shadow-gold-500/20 flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            <span>REGISTER FOR FREE NOW</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-2 text-xs text-gold-400/90 font-light">
            <Gift className="w-4 h-4 text-gold-500" />
            <span>Includes Free Inner Child Healing Meditation (Worth ₹999) for first 11 registrants</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
