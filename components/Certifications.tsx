"use client";

import React from "react";
import Image from "next/image";
import { siteData } from "@/lib/siteData";
import { ShieldCheck } from "lucide-react";

export default function Certifications() {
  const { certifications } = siteData;

  return (
    <section className="py-16 md:py-24 bg-brand-25 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 mb-10 text-brand-900 text-xs sm:text-sm font-bold uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4 text-brand-500" />
          <span>{certifications.title}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {certifications.logos.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex items-center justify-center w-44 h-28 sm:w-52 sm:h-32 relative"
            >
              <div className="relative w-full h-full">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain p-2"
                  sizes="208px"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
