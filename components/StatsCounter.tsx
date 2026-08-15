"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/siteData";

export default function StatsCounter() {
  const { stats } = siteData;

  return (
    <section id="impact" className="py-16 md:py-24 bg-brand-25 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 text-center border border-slate-200/80 shadow-apple hover:shadow-apple-hover transition-all duration-300 space-y-2"
            >
              <div className="editorial-heading text-5xl sm:text-6xl font-bold text-brand-900">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
