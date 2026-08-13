"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail, Send, CheckCircle2, ShieldCheck, Calendar, Globe, Heart } from "lucide-react";
import { siteConfig } from "@/lib/data/content";
import { useModal } from "@/components/ModalContext";

export default function ContactPage() {
  const { openModal } = useModal();
  const [formData, setFormData] = useState({ name: "", email: "", topic: "Workshop Inquiry", message: "" });
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

  return (
    <div className="pt-28 pb-20 bg-navy-900 text-sand-100 min-h-screen">
      {/* Background Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800 border border-gold-500/20 text-gold-500 text-xs font-semibold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECT WITH MOHINIRAJ</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="editorial-heading text-4xl sm:text-6xl text-sand-100"
          >
            Get in <span className="text-gold-gradient italic font-serif">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sand-200/80 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto"
          >
            Have a question about the live Ho'oponopono workshop or personal mentorship? Send a message below.
          </motion.p>
        </section>

        {/* Main Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Info & Workshop Trigger */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-navy-800/40 border border-navy-700/60 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-sand-100">
                Mohiniraj Holistic Healing
              </h3>
              <p className="text-xs sm:text-sm text-sand-200/70 font-light leading-relaxed">
                Dedicated to helping individuals clear emotional baggage, heal subconscious blocks, and upgrade their lives through Ho'oponopono and Life Skills mentorship.
              </p>

              <div className="space-y-4 pt-2 text-xs text-sand-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span>Official Website: <strong>go.mohiniraj.in</strong></span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span>Next Live Workshop: <strong>{siteConfig.workshop.date} ({siteConfig.workshop.time})</strong></span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span>Format: <strong>Live Interactive Masterclass (Zoom)</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Workshop Banner */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-navy-800 via-navy-800 to-navy-700 border border-gold-500/30 space-y-4 text-center">
              <h4 className="font-serif text-xl font-bold text-sand-100">
                Looking to Register for the Workshop?
              </h4>
              <p className="text-xs text-sand-200/70 font-light">
                Seats for the upcoming live masterclass are 100% FREE. Reserve your spot instantly.
              </p>
              <button
                onClick={openModal}
                className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-500 to-sand-200 hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg"
              >
                REGISTER FOR FREE NOW
              </button>
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-navy-800/60 border border-navy-700/60 shadow-2xl space-y-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-2xl font-bold text-sand-100">
                    Send an Inquiry
                  </h3>

                  <div>
                    <label className="block text-xs font-medium text-sand-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
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
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 text-sand-100 placeholder-sand-300/40 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-sand-300 mb-1.5">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 text-sand-100 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
                    >
                      <option value="Workshop Inquiry">Live Workshop Inquiry</option>
                      <option value="Ho'oponopono Question">Ho'oponopono Question</option>
                      <option value="Mentorship">1-on-1 Mentorship Inquiry</option>
                      <option value="General">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-sand-300 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 text-sand-100 placeholder-sand-300/40 text-sm focus:outline-none focus:border-gold-500/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-semibold text-xs uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-500 via-sand-200 to-gold-400 hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2"
                  >
                    {loading ? "SENDING MESSAGE..." : "SUBMIT INQUIRY"}
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-sage-400 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-sage-400" />
                    <span>Your information is strictly confidential.</span>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-sand-100 font-semibold">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-sage-300 max-w-sm mx-auto">
                    Thank you <strong className="text-sand-100">{formData.name}</strong>. We have received your message regarding "{formData.topic}" and will respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", topic: "Workshop Inquiry", message: "" });
                    }}
                    className="px-6 py-2 rounded-full text-xs text-sand-200 bg-navy-900 border border-navy-700 hover:bg-navy-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
