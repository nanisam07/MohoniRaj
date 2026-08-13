"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, Heart } from "lucide-react";
import { siteConfig } from "@/lib/data/content";

export default function AboutPreview() {
  return (
    <section className="py-28 bg-navy-900 text-sand-100 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-navy-700/60 shadow-2xl group">
              <Image
                src="/images/MohiniRaj-About.jpg"
                alt="Mohiniraj — Guide to Healing & Transformation"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Quote Card */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-navy-800/90 backdrop-blur-md border border-gold-500/30 max-w-xs shadow-xl">
              <Heart className="w-5 h-5 text-gold-500 shrink-0" />
              <p className="text-[11px] text-sand-200/90 font-light italic">
                "Self-healing becomes simple when you align with your subconscious."
              </p>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800 border border-gold-500/20 text-gold-500 text-xs font-semibold uppercase tracking-widest w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>YOUR GUIDE TO HEALING & TRANSFORMATION</span>
            </div>

            <h2 className="editorial-heading text-4xl sm:text-5xl text-sand-100 leading-tight">
              {siteConfig.about.heading}
            </h2>

            <p className="text-sand-200/80 text-sm sm:text-base font-light leading-relaxed">
              {siteConfig.about.bio}
            </p>

            <ul className="space-y-3 pt-2">
              {siteConfig.about.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-sand-200/90 font-light">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Mission & Vision Callout */}
            <div className="p-6 rounded-2xl bg-navy-950/60 border border-navy-800 flex flex-col sm:flex-row gap-6 mt-2">
              <div className="flex-1 flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-500">
                  MY MISSION
                </span>
                <p className="text-xs text-sand-200/70 font-light leading-relaxed">
                  {siteConfig.about.mission}
                </p>
              </div>

              <div className="w-full sm:w-[1px] h-[1px] sm:h-auto bg-navy-800" />

              <div className="flex-1 flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-sage-500">
                  MY VISION
                </span>
                <p className="text-xs text-sand-200/70 font-light leading-relaxed">
                  {siteConfig.about.vision}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider text-navy-950 bg-gradient-to-r from-gold-500 to-sand-200 hover:from-gold-400 hover:to-gold-500 transition-all shadow-md shadow-gold-500/10 group"
              >
                <span>MEET MOHINIRAJ</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
