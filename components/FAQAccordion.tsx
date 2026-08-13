"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData, FAQItem } from "@/lib/data/faq";

interface FAQAccordionProps {
  items?: FAQItem[];
}

export default function FAQAccordion({ items = faqData }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-navy-800/80 border-gold-500/40 shadow-xl"
                : "bg-navy-900/50 border-navy-800 hover:border-navy-700"
            }`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg sm:text-xl font-semibold text-sand-100 flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-gold-500 shrink-0" />
                <span>{item.question}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gold-500 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-sand-200/80 font-light leading-relaxed border-t border-navy-700/40 mt-1">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
