"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Star, Quote, ShieldCheck, ArrowRight } from "lucide-react";
import { testimonialsData } from "@/lib/data/testimonials";
import { siteConfig } from "@/lib/data/content";
import { useModal } from "@/components/ModalContext";

export default function TestimonialsPage() {
  const { openModal } = useModal();

  return (
    <div className="pt-28 pb-20 bg-navy-900 text-sand-100 min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Page Hero Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800 border border-gold-500/20 text-gold-500 text-xs font-semibold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AUTHENTIC CLIENT FEEDBACK</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="editorial-heading text-4xl sm:text-6xl text-sand-100"
          >
            Client Reviews & <span className="text-gold-gradient italic font-serif">Testimonials</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sand-200/80 text-base sm:text-lg font-light leading-relaxed"
          >
            Real feedback from individuals who unlocked inner peace, emotional freedom, and clarity through Ho'oponopono healing with Mohiniraj.
          </motion.p>
        </section>

        {/* Verified Stats Strip */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-navy-800/40 border border-navy-700/50 text-center">
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-500 block">4.9 / 5</span>
            <span className="text-xs text-sand-200/70 font-light mt-1 block">Average Client Rating</span>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-500 block">5,000+</span>
            <span className="text-xs text-sand-200/70 font-light mt-1 block">Webinar Attendees</span>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-500 block">400+</span>
            <span className="text-xs text-sand-200/70 font-light mt-1 block">Trained & Guided</span>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-500 block">6+</span>
            <span className="text-xs text-sand-200/70 font-light mt-1 block">Years Experience</span>
          </div>
        </section>

        {/* Testimonial Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-navy-800/50 border border-navy-700/60 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group hover:border-gold-500/30 transition-colors"
            >
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Highlight Quote */}
                <h3 className="font-serif text-lg font-bold text-sand-100 italic leading-snug">
                  "{item.highlight}"
                </h3>

                {/* Body Text */}
                <p className="text-xs sm:text-sm text-sand-200/80 font-light leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-navy-700/60">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold-500/30 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-sand-100">{item.name}</h4>
                  <p className="text-xs text-sage-400 font-light">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Final CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-navy-800 via-navy-800 to-navy-700 border border-gold-500/30 text-center space-y-6 shadow-2xl">
          <h2 className="editorial-heading text-3xl sm:text-4xl text-sand-100">
            Join Thousands of Transformed Individuals
          </h2>
          <p className="text-sm sm:text-base text-sand-200/80 max-w-2xl mx-auto font-light">
            Reserve your free spot for the live Ho'oponopono session on {siteConfig.workshop.date} at {siteConfig.workshop.time}.
          </p>
          <button
            onClick={openModal}
            className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-500 to-sand-200 hover:from-gold-400 hover:to-gold-500 shadow-xl shadow-gold-500/20 inline-flex items-center gap-2"
          >
            <span>REGISTER FOR FREE NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
}
