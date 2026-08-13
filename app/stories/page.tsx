"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Quote, ArrowRight, CheckCircle2, Target, HelpCircle } from "lucide-react";
import { transformationStories } from "@/lib/data/stories";
import { siteConfig } from "@/lib/data/content";
import { useModal } from "@/components/ModalContext";

export default function StoriesPage() {
  const { openModal } = useModal();

  return (
    <div className="pt-28 pb-20 bg-navy-900 text-sand-100 min-h-screen">
      {/* Background Lighting */}
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
            <span>REAL LIVES • REAL HEALINGS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="editorial-heading text-4xl sm:text-6xl text-sand-100"
          >
            Transformation <span className="text-gold-gradient italic font-serif">Stories</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sand-200/80 text-base sm:text-lg font-light leading-relaxed"
          >
            Read authentic case studies from everyday people who cleared subconscious emotional resistance with Ho'oponopono under Mohiniraj's guidance.
          </motion.p>
        </section>

        {/* Story Case Studies List */}
        <section className="space-y-16">
          {transformationStories.map((story, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-8 sm:p-12 rounded-3xl bg-navy-800/40 border border-navy-700/60 shadow-2xl relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-navy-700/80 shadow-xl">
                      <Image
                        src={story.image}
                        alt={`${story.name} — Transformation Story`}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
                      
                      <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-navy-900/90 backdrop-blur-md border border-gold-500/20">
                        <div className="flex items-center justify-between">
                          <h3 className="font-serif text-lg font-bold text-sand-100">
                            {story.name} {story.age && <span className="text-sage-400 font-sans text-xs">({story.age} yrs)</span>}
                          </h3>
                          <span className="text-[10px] text-gold-500 uppercase font-semibold">Verified Case Study</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Narrative Details Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <h2 className="font-serif text-2xl sm:text-4xl text-sand-100 leading-tight font-semibold">
                      {story.headline}
                    </h2>

                    {/* Challenges Block */}
                    <div className="p-4 rounded-xl bg-navy-950/60 border border-navy-800 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400">
                        <HelpCircle className="w-4 h-4" />
                        <span>The Initial Challenge</span>
                      </div>
                      <p className="text-xs sm:text-sm text-sand-200/80 font-light leading-relaxed">
                        {story.challenges}
                      </p>
                    </div>

                    {/* Goals Block */}
                    <div className="p-4 rounded-xl bg-navy-950/60 border border-navy-800 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                        <Target className="w-4 h-4" />
                        <span>The Desired Goal</span>
                      </div>
                      <p className="text-xs sm:text-sm text-sand-200/80 font-light leading-relaxed">
                        {story.goals}
                      </p>
                    </div>

                    {/* Transformation Block */}
                    <div className="p-4 rounded-xl bg-navy-950/60 border border-gold-500/20 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>The Healing Transformation</span>
                      </div>
                      <p className="text-xs sm:text-sm text-sand-100 font-light leading-relaxed">
                        {story.transformation}
                      </p>
                    </div>

                    {/* Direct Quote */}
                    {story.quote && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs italic text-gold-300">
                        <Quote className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                        <span>"{story.quote}"</span>
                      </div>
                    )}
                  </div>

                </div>
              </motion.article>
            );
          })}
        </section>

        {/* CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-navy-800 via-navy-800 to-navy-700 border border-gold-500/30 text-center space-y-6 shadow-2xl">
          <h2 className="editorial-heading text-3xl sm:text-4xl text-sand-100">
            Write Your Own Transformation Story
          </h2>
          <p className="text-sm sm:text-base text-sand-200/80 max-w-2xl mx-auto font-light">
            Clear your subconscious baggage and step into freedom. Join the free live workshop on {siteConfig.workshop.date} at {siteConfig.workshop.time}.
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
