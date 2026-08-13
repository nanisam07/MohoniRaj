"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";
import { testimonialsData } from "@/lib/data/testimonials";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-28 bg-navy-900 text-sand-100 relative overflow-hidden">
      {/* Soft Ambient Light */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500 flex items-center gap-2">
              <Quote className="w-3.5 h-3.5" />
              <span>HEARING FROM REAL PARTICIPANTS</span>
            </span>
            <h2 className="editorial-heading text-3xl sm:text-5xl text-sand-100">
              Reviews & <span className="text-gold-gradient italic font-serif">Client Experiences</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-navy-800 border border-navy-700/80 hover:border-gold-500/40 text-sand-100 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-navy-800 border border-navy-700/80 hover:border-gold-500/40 text-sand-100 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Editorial Carousel Card */}
        <div className="relative min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-navy-800/50 border border-navy-700/70 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Image & Details */}
              <div className="lg:col-span-4 flex flex-col items-center text-center gap-4 border-b lg:border-b-0 lg:border-r border-navy-700/60 pb-6 lg:pb-0 lg:pr-8">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-gold-500/40 shadow-xl">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    sizes="128px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-sand-100">
                    {current.name}
                  </h3>
                  <span className="text-xs text-sage-500 font-medium block mt-0.5">
                    {current.role}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
              </div>

              {/* Right Column: Quote & Highlight */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <blockquote className="font-serif text-xl sm:text-2xl text-sand-100 leading-relaxed font-normal italic">
                  "{current.highlight}"
                </blockquote>

                <p className="text-xs sm:text-sm text-sand-200/80 font-light leading-relaxed">
                  {current.text}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-navy-700/60 text-xs text-sand-200/50">
                  <span>Verified Workshop Participant</span>
                  <Link
                    href="/testimonials"
                    className="text-gold-500 hover:text-gold-400 font-semibold uppercase tracking-wider flex items-center gap-1"
                  >
                    <span>Read all reviews</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
