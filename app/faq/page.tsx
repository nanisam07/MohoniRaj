"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Search, ChevronDown, ArrowRight } from "lucide-react";
import { faqData } from "@/lib/data/faq";
import { siteConfig } from "@/lib/data/content";
import { useModal } from "@/components/ModalContext";

export default function FAQPage() {
  const { openModal } = useModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("what-is-hooponopono");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "General Practice", "Results & Process", "Workshop Info"];

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-navy-900 text-sand-100 min-h-screen">
      {/* Background Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <section className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800 border border-gold-500/20 text-gold-500 text-xs font-semibold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>HELP & CLARITY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="editorial-heading text-4xl sm:text-6xl text-sand-100"
          >
            Frequently Asked <span className="text-gold-gradient italic font-serif">Questions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sand-200/80 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto"
          >
            Find answers to common questions about Ho'oponopono healing practice and the free live workshop.
          </motion.p>
        </section>

        {/* Search & Category Filter */}
        <section className="space-y-6">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-sand-300/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or topics..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-navy-800/80 border border-navy-700/60 text-sand-100 placeholder-sand-300/40 text-sm focus:outline-none focus:border-gold-500/60 transition-colors shadow-lg"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-gold-500/20 text-gold-400 border border-gold-500/40"
                    : "bg-navy-800/40 text-sand-200/70 border border-navy-700/40 hover:text-sand-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Accordion List */}
        <section className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-navy-800/40 border border-navy-700/60 overflow-hidden transition-colors hover:border-gold-500/30"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-semibold text-sand-100 focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-500 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-sand-200/80 font-light leading-relaxed border-t border-navy-700/40 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-sage-400 text-sm">
              No matching questions found. Try another search term.
            </div>
          )}
        </section>

        {/* Final CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-navy-800 via-navy-800 to-navy-700 border border-gold-500/30 text-center space-y-6 shadow-2xl">
          <h2 className="editorial-heading text-3xl sm:text-4xl text-sand-100">
            Have More Questions? Join the Live Q&A
          </h2>
          <p className="text-sm sm:text-base text-sand-200/80 max-w-2xl mx-auto font-light">
            Mohiniraj answers audience questions live during the workshop on {siteConfig.workshop.date} at {siteConfig.workshop.time}.
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
