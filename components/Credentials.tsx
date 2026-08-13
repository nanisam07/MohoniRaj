"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, GraduationCap, ArrowRight } from "lucide-react";
import { certificationsData, mentorsData } from "@/lib/data/credentials";

export default function Credentials() {
  return (
    <section className="py-24 bg-navy-950 text-sand-100 border-t border-navy-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-500 flex items-center gap-2">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACADEMIC & PROFESSIONAL CREDENTIALS</span>
          </span>
          <h2 className="editorial-heading text-3xl sm:text-5xl text-sand-100">
            Certifications & <span className="text-gold-gradient italic font-serif">Global Mentorship</span>
          </h2>
          <p className="text-sand-200/70 text-xs sm:text-sm font-light">
            Grounded in academic standards and trained directly by internationally renowned thought leaders.
          </p>
        </div>

        {/* Certifications Logos Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-navy-900/60 border border-navy-800 flex flex-col items-center text-center gap-4 hover:border-gold-500/30 transition-all group"
            >
              <div className="relative w-32 h-16 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={cert.logo}
                  alt={cert.institution}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-sand-100">
                  {cert.institution}
                </h3>
                <span className="text-xs text-gold-500 font-medium block mt-0.5">
                  {cert.name}
                </span>
                <p className="text-[11px] text-sand-200/60 font-light leading-relaxed mt-2">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mentors Grid */}
        <div className="p-8 rounded-3xl bg-navy-900/40 border border-navy-800">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-5 h-5 text-gold-500" />
            <h3 className="font-serif text-xl text-sand-100 font-semibold">
              Mentored & Trained By World-Class Teachers:
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {mentorsData.map((mentor) => (
              <div
                key={mentor.id}
                className="p-4 rounded-xl bg-navy-800/50 border border-navy-700/50 flex flex-col gap-1 text-center hover:border-gold-500/30 transition-colors"
              >
                <span className="font-serif text-sm font-bold text-sand-100">
                  {mentor.name}
                </span>
                <span className="text-[10px] text-sage-500 font-light leading-snug">
                  {mentor.role}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
