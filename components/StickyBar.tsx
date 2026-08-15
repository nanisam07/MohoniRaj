"use client";

import React, { useState, useEffect } from "react";
import { siteData } from "@/lib/siteData";
import { useModal } from "./ModalContext";
import { Clock, ArrowRight } from "lucide-react";

export default function StickyBar() {
  const { openModal } = useModal();
  const { stickyBar } = siteData;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 4,
    minutes: 32,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-900/95 backdrop-blur-md text-white border-t border-brand-800 shadow-2xl py-3 px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        
        {/* Info & Date */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-9 h-9 rounded-full bg-brand-800 border border-brand-700 text-brand-400 flex items-center justify-center shrink-0 hidden md:flex">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-brand-100 text-xs font-semibold uppercase tracking-wider block">
              {stickyBar.title}
            </span>
            <span className="editorial-heading text-lg sm:text-xl font-bold text-white">
              {stickyBar.datetime}
            </span>
          </div>
        </div>

        {/* Digital Countdown Timer */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-white">
          <div className="flex flex-col items-center bg-brand-950 px-3 py-1 rounded-xl border border-brand-800 min-w-[48px]">
            <span className="text-lg text-white font-mono">{String(timeLeft.days).padStart(2, "0")}</span>
            <span className="text-[9px] text-slate-400 font-sans font-normal uppercase">Days</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center bg-brand-950 px-3 py-1 rounded-xl border border-brand-800 min-w-[48px]">
            <span className="text-lg text-white font-mono">{String(timeLeft.hours).padStart(2, "0")}</span>
            <span className="text-[9px] text-slate-400 font-sans font-normal uppercase">Hours</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center bg-brand-950 px-3 py-1 rounded-xl border border-brand-800 min-w-[48px]">
            <span className="text-lg text-white font-mono">{String(timeLeft.minutes).padStart(2, "0")}</span>
            <span className="text-[9px] text-slate-400 font-sans font-normal uppercase">Mins</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center bg-brand-950 px-3 py-1 rounded-xl border border-brand-800 min-w-[48px]">
            <span className="text-lg text-white font-mono">{String(timeLeft.seconds).padStart(2, "0")}</span>
            <span className="text-[9px] text-slate-400 font-sans font-normal uppercase">Secs</span>
          </div>
        </div>

        {/* Quick CTA */}
        <button
          onClick={openModal}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-brand-50 text-brand-900 font-bold text-sm shadow-md transition-all shrink-0"
        >
          <span>{stickyBar.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
}
