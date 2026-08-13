"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Gift, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/data/content";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-navy-900 border border-navy-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Ambient Background Light */}
            <div className="absolute -top-24 -left-24 w-60 h-60 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-60 h-60 rounded-full bg-sage-500/10 blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-navy-800 text-sand-300 hover:text-sand-100 hover:bg-navy-700 transition-colors"
              aria-label="Close registration modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Free Live Masterclass</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-sand-100 font-semibold leading-tight">
                    Register for the Live Ho'oponopono Workshop
                  </h3>
                  <p className="text-xs sm:text-sm text-sage-300">
                    Break free from emotional baggage and experience live subconscious healing.
                  </p>
                </div>

                {/* Event Highlights */}
                <div className="grid grid-cols-2 gap-3 p-3.5 bg-navy-800/60 rounded-xl border border-navy-700/50 text-xs">
                  <div className="flex items-center gap-2 text-sand-200">
                    <Calendar className="w-4 h-4 text-gold-500 shrink-0" />
                    <span>{siteConfig.workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sand-200">
                    <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                    <span>{siteConfig.workshop.time}</span>
                  </div>
                </div>

                {/* Free Bonus Alert */}
                <div className="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-start gap-3 text-xs text-gold-300">
                  <Gift className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-sand-100">FREE BONUS:</strong> Get Inner Child Healing Meditation (Worth ₹999) when you complete your free registration today.
                  </p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-sand-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 text-sand-100 placeholder-sand-300/40 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-sand-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your primary email"
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 text-sand-100 placeholder-sand-300/40 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-sand-300 mb-1.5">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter mobile number for workshop link"
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 text-sand-100 placeholder-sand-300/40 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-wider text-navy-950 bg-gradient-to-r from-gold-500 via-sand-200 to-gold-400 hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:scale-[1.01] disabled:opacity-50"
                  >
                    {loading ? "RESERVING YOUR SPOT..." : "CONFIRM FREE REGISTRATION"}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-sage-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-sage-400" />
                    <span>Your privacy is 100% protected. No spam ever.</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-5">
                <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-sand-100 font-semibold">
                    Spot Reserved Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-sage-300 max-w-sm mx-auto">
                    Namaste <strong className="text-sand-100">{formData.name}</strong>! Your seat for the Live Ho'oponopono Workshop on <strong className="text-gold-400">{siteConfig.workshop.date} at {siteConfig.workshop.time}</strong> is confirmed.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-navy-800/80 border border-navy-700/60 text-xs text-sand-200 space-y-1 text-left">
                  <p>• We've sent the Zoom joining link to: <strong>{formData.email}</strong></p>
                  <p>• Check your WhatsApp at <strong>{formData.phone}</strong> for instant updates.</p>
                  <p>• Your free Inner Child Meditation bonus has been sent to your email.</p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-sand-100 bg-navy-800 border border-navy-700 hover:bg-navy-700 transition-colors"
                >
                  Close Confirmation
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
