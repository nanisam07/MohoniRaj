"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Clock, Video, Gift, ArrowRight } from "lucide-react";
import { useModal } from "@/components/ModalContext";
import { siteConfig } from "@/lib/data/content";

export default function WorkshopBanner() {
  const { openModal } = useModal();
  // Simple countdown calculation to target date (15th August 2:00 PM)
  const [timeLeft, setTimeLeft] = useState({
    days: "02",
    hours: "14",
    minutes: "35",
    seconds: "18",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      // Target: Next upcoming date
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
    <section className="relative z-20 -mt-8 sm:-mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-navy-800/90 border border-gold-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-navy-950/80 bg-gradient-to-r from-navy-800 via-navy-800 to-navy-700">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Information & Timing Details */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold-500 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-ping" />
              <span>LIVE EXPERIENTIAL MASTERCLASS</span>
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl text-sand-100 font-semibold">
              Live Ho'oponopono Healing Workshop
            </h3>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-sand-200/80">
              <div className="flex items-center gap-1.5 bg-navy-900/60 px-3 py-1.5 rounded-lg border border-navy-700/50">
                <Calendar className="w-4 h-4 text-gold-500" />
                <span>{siteConfig.workshop.date}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-navy-900/60 px-3 py-1.5 rounded-lg border border-navy-700/50">
                <Clock className="w-4 h-4 text-gold-500" />
                <span>{siteConfig.workshop.time}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-navy-900/60 px-3 py-1.5 rounded-lg border border-navy-700/50">
                <Video className="w-4 h-4 text-sage-500" />
                <span>Live on Zoom</span>
              </div>
            </div>
          </div>

          {/* Elegant Countdown Timer */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
              <div className="bg-navy-900/90 border border-navy-700/60 rounded-xl p-2.5 sm:p-3 min-w-[64px]">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-500 block leading-none">
                  {timeLeft.days}
                </span>
                <span className="text-[10px] text-sand-200/60 uppercase tracking-wider mt-1 block">
                  Days
                </span>
              </div>
              <div className="bg-navy-900/90 border border-navy-700/60 rounded-xl p-2.5 sm:p-3 min-w-[64px]">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-500 block leading-none">
                  {timeLeft.hours}
                </span>
                <span className="text-[10px] text-sand-200/60 uppercase tracking-wider mt-1 block">
                  Hours
                </span>
              </div>
              <div className="bg-navy-900/90 border border-navy-700/60 rounded-xl p-2.5 sm:p-3 min-w-[64px]">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-500 block leading-none">
                  {timeLeft.minutes}
                </span>
                <span className="text-[10px] text-sand-200/60 uppercase tracking-wider mt-1 block">
                  Mins
                </span>
              </div>
              <div className="bg-navy-900/90 border border-navy-700/60 rounded-xl p-2.5 sm:p-3 min-w-[64px]">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-500 block leading-none">
                  {timeLeft.seconds}
                </span>
                <span className="text-[10px] text-sand-200/60 uppercase tracking-wider mt-1 block">
                  Secs
                </span>
              </div>
            </div>
          </div>

          {/* Action & Bonus Callout */}
          <div className="lg:col-span-3 flex flex-col gap-3 justify-center">
            <button
              onClick={openModal}
              className="group w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-gold-500 to-sand-200 text-navy-950 font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/10"
            >
              <span>REGISTER FOR FREE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-start gap-2 bg-gold-500/10 border border-gold-500/20 p-2.5 rounded-xl text-[11px] text-gold-400 leading-snug">
              <Gift className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              <span>Includes Inner Child Healing Meditation Worth ₹999 FREE for first 11 registrants.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
