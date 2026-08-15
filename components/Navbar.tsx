"use client";

import React, { useState, useEffect } from "react";
import { useModal } from "./ModalContext";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const { openModal } = useModal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "apple-glass border-b border-slate-200/80 py-2.5 shadow-sm"
            : "bg-transparent py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 sm:h-11">
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-brand-900 text-white flex items-center justify-center font-serif font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-brand-900 tracking-tight leading-none">
                Mohiniraj
              </span>
              <span className="text-[9px] font-semibold text-brand-500 uppercase tracking-widest mt-0.5">
                Ho'oponopono Master
              </span>
            </div>
          </a>

          {/* Nav Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              <a href="#transformations" className="hover:text-brand-900 transition-colors">Stories</a>
              <a href="#secrets" className="hover:text-brand-900 transition-colors">3 Secrets</a>
              <a href="#outcomes" className="hover:text-brand-900 transition-colors">Outcomes</a>
              <a href="#about" className="hover:text-brand-900 transition-colors">About</a>
              <a href="#faq" className="hover:text-brand-900 transition-colors">FAQ</a>
            </div>

            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-900 hover:bg-brand-800 text-white text-[11px] font-bold tracking-wide shadow-sm hover:shadow transition-all"
            >
              <span>REGISTER FREE</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
