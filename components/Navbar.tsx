"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/components/ModalContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ho-oponopono", label: "Ho'oponopono" },
  { href: "/stories", label: "Stories" },
  { href: "/workshop", label: "Workshop" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy-900/85 backdrop-blur-md border-b border-navy-700/50 py-3.5 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gold-600 via-gold-500 to-sand-200 p-[1px] transition-transform duration-500 group-hover:scale-105">
              <div className="w-full h-full bg-navy-900 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-gold-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-sand-100 group-hover:text-gold-500 transition-colors">
                MOHINIRAJ
              </span>
              <span className="text-[10px] uppercase tracking-widest text-sage-500 -mt-1 font-medium">
                Holistic Healer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-navy-800/40 border border-navy-700/40 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 relative ${
                    isActive
                      ? "text-gold-500 bg-navy-700/60"
                      : "text-sand-200/80 hover:text-sand-100 hover:bg-navy-700/30"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full border border-gold-500/30 pointer-events-none"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={openModal}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider text-navy-950 bg-gradient-to-r from-gold-500 via-sand-200 to-gold-400 hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-md shadow-gold-500/10 hover:shadow-gold-500/25 hover:scale-[1.02]"
            >
              <span>REGISTER FOR FREE</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-navy-800/80 border border-navy-700/60 text-sand-100 hover:text-gold-500 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-navy-950/95 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6"
          >
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-500 px-3">
                Navigation
              </span>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-lg font-serif transition-colors ${
                          isActive
                            ? "bg-navy-800 text-gold-500 border border-gold-500/20"
                            : "text-sand-100/90 hover:bg-navy-800/50 hover:text-gold-400"
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && <div className="w-2 h-2 rounded-full bg-gold-500" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-navy-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full text-center py-3.5 rounded-xl font-semibold text-sm tracking-wider text-navy-950 bg-gradient-to-r from-gold-500 to-sand-200 shadow-lg shadow-gold-500/10"
              >
                REGISTER FOR FREE WORKSHOP
              </button>
              <div className="text-center text-xs text-sage-500">
                Live Experiential Workshop • 15th Aug 2pm IST
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
