"use client";

import React from "react";
import { siteData } from "@/lib/siteData";

export default function Footer() {
  const { footer } = siteData;

  return (
    <footer className="bg-brand-950 text-slate-400 py-14 px-4 sm:px-6 lg:px-8 border-t border-brand-900 text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto space-y-6 text-center">
        
        {/* Disclaimer Text */}
        <p className="leading-relaxed text-slate-400 max-w-4xl mx-auto">
          {footer.disclaimer}
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-brand-800 mx-auto" />

        {/* Copyright */}
        <p className="text-slate-300 font-semibold tracking-wide">
          {footer.copyright}
        </p>

      </div>
    </footer>
  );
}
