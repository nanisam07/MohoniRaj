"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Clock, Video, Gift, CheckCircle2, ShieldCheck, ArrowRight, Star } from "lucide-react";
import { siteConfig } from "@/lib/data/content";
import { useModal } from "@/components/ModalContext";
import FAQAccordion from "@/components/FAQAccordion";

export default function WorkshopPage() {
  const { openModal } = useModal();
  const [timeLeft, setTimeLeft] = useState({
    days: "02",
    hours: "14",
    minutes: "35",
    seconds: "18",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date("2026-08-15T14:00:00+05:30").getTime();
      const diff = target - now;

      if (diff > 0) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({
          days: d < 10 ? `0${d}` : `${d}`,
          hours: h < 10 ? `0${h}` : `${h}`,
          minutes: m < 10 ? `0${m}` : `${m}`,
          seconds: s < 10 ? `0${s}` : `${s}`,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-28 pb-20 bg-navy-900 text-sand-100 min-h-screen">
      {/* Ambient background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Hero Header */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800 border border-gold-500/30 text-gold-500 text-xs font-semibold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIVE EXPERIENTIAL MASTERCLASS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="editorial-heading text-4xl sm:text-6xl text-sand-100 leading-tight"
          >
            Live Ho'oponopono Healing <span className="text-gold-gradient italic font-serif">Workshop</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sand-200/80 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            No meditation, therapy, or complicated steps — just an easy and effective way to clear emotional baggage and unlock true inner peace.
          </motion.p>

          {/* Timing Cards & Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 rounded-3xl bg-navy-800/80 border border-gold-500/30 backdrop-blur-xl shadow-2xl space-y-6 max-w-3xl mx-auto"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-sand-100">
              <div className="flex items-center gap-2 bg-navy-900/80 px-4 py-2 rounded-xl border border-navy-700/60">
                <Calendar className="w-4 h-4 text-gold-500" />
                <span>Date: <strong>{siteConfig.workshop.date}</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-navy-900/80 px-4 py-2 rounded-xl border border-navy-700/60">
                <Clock className="w-4 h-4 text-gold-500" />
                <span>Time: <strong>{siteConfig.workshop.time}</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-navy-900/80 px-4 py-2 rounded-xl border border-navy-700/60">
                <Video className="w-4 h-4 text-sage-400" />
                <span>Format: <strong>Live on Zoom</strong></span>
              </div>
            </div>

            {/* Countdown */}
            <div className="flex items-center justify-center gap-3">
              <div className="bg-navy-950 border border-navy-700/80 rounded-2xl p-3 sm:p-4 min-w-[75px]">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-500 block leading-none">{timeLeft.days}</span>
                <span className="text-[10px] text-sand-200/60 uppercase tracking-widest mt-1 block">Days</span>
              </div>
              <div className="bg-navy-950 border border-navy-700/80 rounded-2xl p-3 sm:p-4 min-w-[75px]">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-500 block leading-none">{timeLeft.hours}</span>
                <span className="text-[10px] text-sand-200/60 uppercase tracking-widest mt-1 block">Hours</span>
              </div>
              <div className="bg-navy-950 border border-navy-700/80 rounded-2xl p-3 sm:p-4 min-w-[75px]">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-500 block leading-none">{timeLeft.minutes}</span>
                <span className="text-[10px] text-sand-200/60 uppercase tracking-widest mt-1 block">Mins</span>
              </div>
              <div className="bg-navy-950 border border-navy-700/80 rounded-2xl p-3 sm:p-4 min-w-[75px]">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-500 block leading-none">{timeLeft.seconds}</span>
                <span className="text-[10px] text-sand-200/60 uppercase tracking-widest mt-1 block">Secs</span>
              </div>
            </div>

            {/* Free Bonus Callout */}
            <div className="p-4 rounded-2xl bg-gold-500/10 border border-gold-500/20 text-xs sm:text-sm text-gold-300 flex items-center justify-center gap-2">
              <Gift className="w-5 h-5 text-gold-400 shrink-0" />
              <span>(Limited Spots!) Get Inner Child Healing Meditation Worth ₹999 FREE for first 11 registrants</span>
            </div>

            <button
              onClick={openModal}
              className="w-full sm:w-auto px-10 py-4 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-500 via-sand-200 to-gold-400 hover:from-gold-400 hover:to-gold-500 transition-all shadow-xl shadow-gold-500/20 inline-flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <span>CLAIM YOUR FREE SEAT NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </section>

        {/* Who is this workshop for? */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">TAILORED TRANSFORMATION</span>
            <h2 className="editorial-heading text-3xl sm:text-5xl text-sand-100">
              This Workshop is Specially Designed For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.targetAudience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-navy-800/40 border border-navy-700/60 flex flex-col gap-4 hover:border-gold-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-navy-900 border border-navy-700 flex items-center justify-center p-2.5">
                  <Image
                    src={item.icon}
                    alt={item.role}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-sand-100">{item.role}</h3>
                <p className="text-xs text-sand-200/70 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Workshop Agenda & Outcomes */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">WHAT YOU WILL EXPERIENCE</span>
            <h2 className="editorial-heading text-3xl sm:text-5xl text-sand-100">
              6 Modules of <span className="text-gold-gradient italic font-serif">Subconscious Healing</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.outcomes.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-3xl bg-navy-800/50 border border-navy-700/60 space-y-4 hover:border-gold-500/30 transition-colors"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-navy-700/50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-navy-950/90 text-gold-500 font-serif font-bold text-sm flex items-center justify-center border border-gold-500/30">
                    {item.number}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-sand-100">{item.title}</h3>
                <p className="text-xs text-sand-200/70 font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Workshop FAQ Accordion */}
        <section className="space-y-8 pt-8 border-t border-navy-800">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">GOT QUESTIONS?</span>
            <h2 className="editorial-heading text-3xl sm:text-4xl text-sand-100">Workshop FAQs</h2>
          </div>
          <FAQAccordion />
        </section>

        {/* Final CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-navy-800 via-navy-800 to-navy-700 border border-gold-500/30 text-center space-y-6 shadow-2xl">
          <h2 className="editorial-heading text-3xl sm:text-4xl text-sand-100">
            Spots Are 100% Free — Reserve Yours Today
          </h2>
          <p className="text-sm sm:text-base text-sand-200/80 max-w-2xl mx-auto font-light">
            Don't miss the upcoming live experience on {siteConfig.workshop.date} at {siteConfig.workshop.time}.
          </p>
          <button
            onClick={openModal}
            className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-500 to-sand-200 hover:from-gold-400 hover:to-gold-500 shadow-xl shadow-gold-500/20 inline-flex items-center gap-2"
          >
            <span>CONFIRM FREE REGISTRATION NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
}
