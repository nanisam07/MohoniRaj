"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Heart, Award, Users, BookOpen, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data/content";
import { certificationsData, mentorsData } from "@/lib/data/credentials";
import { useModal } from "@/components/ModalContext";

export default function AboutPage() {
  const { openModal } = useModal();

  return (
    <div className="pt-28 pb-20 bg-navy-900 text-sand-100 min-h-screen">
      {/* Ambient background lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Page Hero Header */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800 border border-gold-500/20 text-gold-500 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT MOHINIRAJ</span>
            </div>

            <h1 className="editorial-heading text-4xl sm:text-6xl text-sand-100 leading-tight">
              Dedicated to Guiding You Toward <span className="text-gold-gradient italic font-serif">Emotional Freedom</span>
            </h1>

            <p className="text-sand-200/80 text-base sm:text-lg font-light leading-relaxed">
              {siteConfig.about.bio}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={openModal}
                className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-500 to-sand-200 hover:from-gold-400 hover:to-gold-500 shadow-xl shadow-gold-500/10 transition-all flex items-center gap-2"
              >
                <span>ATTEND LIVE WORKSHOP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-navy-700/60 shadow-2xl">
              <Image
                src="/images/MohiniRaj-About.jpg"
                alt="Mohiniraj — Holistic Healer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-navy-800/60 border border-navy-700/60 relative overflow-hidden flex flex-col gap-4 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500">
              <Heart className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">MY MISSION</span>
            <h3 className="font-serif text-2xl text-sand-100 font-semibold">Self-Healing Simple & Accessible</h3>
            <p className="text-sand-200/80 text-sm leading-relaxed font-light">
              {siteConfig.about.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 sm:p-10 rounded-3xl bg-navy-800/60 border border-navy-700/60 relative overflow-hidden flex flex-col gap-4 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-sage-500/10 border border-sage-500/30 flex items-center justify-center text-sage-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-sage-400">MY VISION</span>
            <h3 className="font-serif text-2xl text-sand-100 font-semibold">Lasting Inner Peace for Everyone</h3>
            <p className="text-sand-200/80 text-sm leading-relaxed font-light">
              {siteConfig.about.vision}
            </p>
          </motion.div>
        </section>

        {/* Teaching Philosophy & Mentors */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">GLOBAL WISDOM & MENTORSHIP</span>
            <h2 className="editorial-heading text-3xl sm:text-5xl text-sand-100">
              Trained Under World-Class <span className="text-gold-gradient italic font-serif">Masters</span>
            </h2>
            <p className="text-sand-200/80 text-sm sm:text-base font-light">
              Mohiniraj combines ancient Hawaiian wisdom with practical self-mastery tools acquired from renowned international life coaches and transformational guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentorsData.map((mentor, idx) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-navy-800/40 border border-navy-700/50 hover:border-gold-500/30 transition-colors flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-sand-100">{mentor.name}</h4>
                  <p className="text-xs text-sage-400 font-light">{mentor.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Formal Certifications Section */}
        <section className="space-y-12 pt-8 border-t border-navy-800">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">VERIFIED CREDENTIALS</span>
            <h2 className="editorial-heading text-3xl sm:text-4xl text-sand-100">
              Recognized & Certified Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-8 rounded-3xl bg-navy-800/50 border border-navy-700/60 flex flex-col items-center text-center gap-4 hover:border-gold-500/40 transition-colors"
              >
                <div className="relative w-28 h-28 p-3 rounded-2xl bg-white/95 flex items-center justify-center shadow-lg">
                  <Image
                    src={cert.logo}
                    alt={cert.institution}
                    width={100}
                    height={100}
                    className="object-contain max-h-20"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-sand-100">{cert.institution}</h3>
                  <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider">{cert.name}</p>
                  <p className="text-xs text-sand-200/70 font-light">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final Registration Callout */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-navy-800 via-navy-800 to-navy-700 border border-gold-500/30 text-center space-y-6 shadow-2xl">
          <h2 className="editorial-heading text-3xl sm:text-4xl text-sand-100">
            Experience Healing Guided by Mohiniraj
          </h2>
          <p className="text-sm sm:text-base text-sand-200/80 max-w-2xl mx-auto font-light">
            Reserve your spot for the upcoming live Ho'oponopono session on {siteConfig.workshop.date} at {siteConfig.workshop.time}.
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
