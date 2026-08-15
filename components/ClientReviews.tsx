"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { useModal } from "./ModalContext";
import { ArrowRight, Star, MessageSquareQuote, ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientReviews() {
  const { openModal } = useModal();
  const { clientReviews } = siteData;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeRev = clientReviews.reviews[activeIndex];

  return (
    <section className="py-20 md:py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-widest">
            <MessageSquareQuote className="w-4 h-4 text-brand-500" />
            <span>Verified Feedback</span>
          </div>
          <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl font-bold text-brand-900">
            {clientReviews.title}
          </h2>
          <div className="flex items-center justify-center gap-1 text-accentGold-500 pt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
        </div>

        {/* Testimonial Showcase Stage */}
        <div className="max-w-4xl mx-auto bg-brand-25 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-apple mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="relative aspect-[3/4] w-full max-w-sm rounded-2xl overflow-hidden bg-white shadow-apple border border-slate-200">
                <Image
                  src={activeRev.image}
                  alt={activeRev.name}
                  fill
                  className="object-contain p-2"
                  sizes="384px"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-2xl text-brand-900">{activeRev.name}</h3>
                <p className="text-xs font-semibold text-brand-500 uppercase tracking-widest">Verified Client Review</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-200">
            <button
              onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : clientReviews.reviews.length - 1))}
              className="p-3 rounded-full bg-white text-brand-900 border border-slate-200 shadow-sm hover:bg-brand-50 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {clientReviews.reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === idx ? "bg-brand-900 w-8" : "bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveIndex((prev) => (prev < clientReviews.reviews.length - 1 ? prev + 1 : 0))}
              className="p-3 rounded-full bg-brand-900 text-white shadow-sm hover:bg-brand-800 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-base sm:text-lg shadow-apple-hover transition-all transform hover:-translate-y-0.5"
          >
            <span>REGISTER NOW FOR FREE</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
