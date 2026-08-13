"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Heart, RefreshCw, Sun, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/data/content";
import FourPhrases from "@/components/FourPhrases";
import ThreeSecrets from "@/components/ThreeSecrets";
import { useModal } from "@/components/ModalContext";

export default function HooponoponoPage() {
  const { openModal } = useModal();

  return (
    <div className="pt-28 pb-20 bg-navy-900 text-sand-100 min-h-screen">
      {/* Background Lighting */}
      <div className="absolute top-20 left-1/3 w-[600px] h-[400px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Page Hero Header */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800 border border-gold-500/20 text-gold-500 text-xs font-semibold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ANCIENT HAWAIIAN HEALING METHOD</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="editorial-heading text-4xl sm:text-6xl text-sand-100"
          >
            What is <span className="text-gold-gradient italic font-serif">Ho'oponopono?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sand-200/80 text-base sm:text-xl font-light leading-relaxed max-w-3xl mx-auto"
          >
            Ho'oponopono is an ancient Hawaiian method focused on reconciliation, forgiveness, and clearing subconscious emotional baggage to restore harmony, peace, and inner clarity.
          </motion.p>
        </section>

        {/* Mechanism & Science of the Subconscious */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">SUBCONSCIOUS CLEARING</span>
            <h2 className="editorial-heading text-3xl sm:text-5xl text-sand-100 leading-tight">
              Why Your Mind Keeps Repeating Old Wounds
            </h2>
            <p className="text-sand-200/80 text-sm sm:text-base font-light leading-relaxed">
              Our subconscious mind stores every past emotional pain, regret, belief, and resentment we have ever experienced. When left uncleared, these hidden memories manifest as chronic stress, overthinking, low confidence, and friction in relationships or finances.
            </p>
            <p className="text-sand-200/80 text-sm sm:text-base font-light leading-relaxed">
              Ho'oponopono works at the deepest root level — neutralising stored negative vibrations without requiring years of therapy or difficult meditation.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-sand-200/90 font-light">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-1" />
                <span>No complicated rituals or long hours required</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-sand-200/90 font-light">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-1" />
                <span>Suitable for beginners and experienced seekers alike</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-sand-200/90 font-light">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-1" />
                <span>Clears subconscious blocks affecting money, health & relationships</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-navy-700/60 shadow-2xl">
              <Image
                src="/images/Clarity-Mohini.jpg"
                alt="Ho'oponopono Practice Concept"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-50" />
            </div>
          </motion.div>
        </section>

        {/* The 4 Phrases Component */}
        <section className="pt-6">
          <FourPhrases />
        </section>

        {/* The 3 Secrets Vertical Journey */}
        <section className="pt-6">
          <ThreeSecrets />
        </section>

        {/* Applications in Real Life */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">PRACTICAL APPLICATIONS</span>
            <h2 className="editorial-heading text-3xl sm:text-5xl text-sand-100">
              Healing Every Aspect of Your <span className="text-gold-gradient italic font-serif">Life</span>
            </h2>
            <p className="text-sand-200/80 text-sm sm:text-base font-light">
              Ho'oponopono is not just abstract philosophy — it yields concrete emotional and practical shifts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-navy-800/50 border border-navy-700/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-500 flex items-center justify-center">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-sand-100">Emotional Peace</h3>
              <p className="text-xs text-sand-200/70 font-light leading-relaxed">
                Release years of silent anxiety, overthinking, anger, and grief. Wake up feeling light and unburdened.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-navy-800/50 border border-navy-700/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-500/10 border border-sage-500/30 text-sage-400 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-sand-100">Relationship Harmony</h3>
              <p className="text-xs text-sand-200/70 font-light leading-relaxed">
                Dissolve subconscious resentment between family members, partners, or colleagues without friction.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-navy-800/50 border border-navy-700/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-500 flex items-center justify-center">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-sand-100">Financial Abundance</h3>
              <p className="text-xs text-sand-200/70 font-light leading-relaxed">
                Clear subconscious money blocks, self-sabotage, and fear of scarcity so financial opportunities flow freely.
              </p>
            </div>
          </div>
        </section>

        {/* Workshop Callout Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-navy-800 via-navy-800 to-navy-700 border border-gold-500/30 text-center space-y-6 shadow-2xl">
          <h2 className="editorial-heading text-3xl sm:text-4xl text-sand-100">
            Experience Live Ho'oponopono Guided Healing
          </h2>
          <p className="text-sm sm:text-base text-sand-200/80 max-w-2xl mx-auto font-light">
            Join Mohiniraj's upcoming live masterclass on {siteConfig.workshop.date} at {siteConfig.workshop.time}. Experience real-time healing in a supportive group environment.
          </p>
          <button
            onClick={openModal}
            className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-500 to-sand-200 hover:from-gold-400 hover:to-gold-500 shadow-xl shadow-gold-500/20 inline-flex items-center gap-2"
          >
            <span>REGISTER FOR FREE WORKSHOP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
}
