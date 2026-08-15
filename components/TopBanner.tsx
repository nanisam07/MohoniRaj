"use client";

import React from "react";
import { siteData } from "@/lib/siteData";

export default function TopBanner() {
  return (
    <div className="bg-brand-900 text-brand-50 text-xs sm:text-sm py-2.5 px-4 text-center font-medium tracking-wide relative z-20 border-b border-brand-800">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
        <p>{siteData.topAnnouncement}</p>
      </div>
    </div>
  );
}
