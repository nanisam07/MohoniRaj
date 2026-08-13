import Link from "next/link";
import { Sparkles, Heart, Mail, Phone, MapPin, Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-sand-100/80 border-t border-navy-800/80 relative overflow-hidden">
      {/* Soft Ambient Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-gold-500/5 via-navy-800/20 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gold-600 via-gold-500 to-sand-200 p-[1px]">
                <div className="w-full h-full bg-navy-900 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-sand-100 group-hover:text-gold-500 transition-colors">
                  MOHINIRAJ
                </span>
                <span className="text-[10px] uppercase tracking-widest text-sage-500 font-medium">
                  Holistic Healer • Life Skills Mentor
                </span>
              </div>
            </Link>
            
            <p className="text-xs text-sand-200/70 leading-relaxed max-w-sm mt-2">
              Dedicated to helping individuals break free from stress, heal deep emotional baggage, and unlock authentic peace & clarity through the powerful practice of Ho'oponopono.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-800/80 border border-navy-700/60 flex items-center justify-center text-sand-200 hover:text-gold-500 hover:border-gold-500/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-800/80 border border-navy-700/60 flex items-center justify-center text-sand-200 hover:text-gold-500 hover:border-gold-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-800/80 border border-navy-700/60 flex items-center justify-center text-sand-200 hover:text-gold-500 hover:border-gold-500/40 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              Explore
            </h4>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  About Mohiniraj
                </Link>
              </li>
              <li>
                <Link href="/ho-oponopono" className="hover:text-gold-400 transition-colors">
                  Ho'oponopono Philosophy
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-gold-400 transition-colors">
                  Transformation Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs & Information */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              Experience
            </h4>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <Link href="/workshop" className="hover:text-gold-400 transition-colors">
                  Live Free Workshop
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-gold-400 transition-colors">
                  Client Reviews & Results
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Workshop Quick Callout */}
          <div className="flex flex-col gap-3 bg-navy-900/60 p-5 rounded-2xl border border-navy-700/40">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sage-500">
              Upcoming Live Session
            </span>
            <h5 className="font-serif text-lg text-sand-100 font-semibold">
              Live Ho'oponopono Masterclass
            </h5>
            <p className="text-xs text-sand-200/70">
              Date: <span className="text-sand-100 font-medium">15th Aug at 2:00 PM IST</span>
            </p>
            <Link
              href="/workshop"
              className="mt-2 text-center py-2 px-4 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-xs transition-all shadow-md shadow-gold-500/10"
            >
              Reserve Free Spot
            </Link>
          </div>
        </div>

        {/* Legal Disclaimer & Meta */}
        <div className="pt-8 pb-4 flex flex-col gap-6 text-[11px] text-sand-200/50 leading-relaxed border-b border-navy-900">
          <p>
            <strong className="text-sand-200/70 font-medium">Disclaimer:</strong> This website is NOT part of the Google Website or Google Inc. or Facebook website or Meta Platforms Inc. Additionally, this site is NOT endorsed by Google or Facebook in any way. Google is a trademark of Google, Inc. Facebook is a trademark of Meta Platforms, Inc.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-200/60 gap-4">
          <p>© 2026 Mohiniraj. All Rights Reserved.</p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with peace & intentionality for deep personal transformation</span>
            <Heart className="w-3.5 h-3.5 text-gold-500 fill-gold-500/30" />
          </div>
        </div>
      </div>
    </footer>
  );
}
