"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { transformationStories } from "@/lib/data/stories";

export default function TransformationStoriesPreview() {
  // Featured 3 stories on homepage
  const featuredStories = transformationStories.slice(0, 3);

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sage-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVED EXPERIENCES & RESULTS</span>
            </span>
            <h2 className="editorial-heading text-3xl sm:text-5xl text-sand-100">
              Real Stories. <span className="text-gold-gradient italic font-normal">Real Transformations.</span>
            </h2>
          </div>

          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-500 hover:text-gold-400 transition-colors group"
          >
            <span>VIEW ALL STORIES</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Featured Editorial Storytelling Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredStories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="flex flex-col bg-navy-800/50 border border-navy-700/60 rounded-3xl overflow-hidden hover:border-gold-500/40 transition-all duration-500 group shadow-xl"
            >
              {/* Photo & Badge */}
              <div className="relative w-full aspect-[4/3] bg-navy-950 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="px-3.5 py-1 rounded-full bg-navy-900/80 backdrop-blur-md border border-navy-700/80 text-sand-100 text-xs font-serif font-bold">
                    {story.name} {story.age && `(${story.age})`}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 text-[10px] font-semibold tracking-wide uppercase">
                    Verified Outcome
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-sand-100 font-semibold leading-snug group-hover:text-gold-400 transition-colors">
                    {story.headline}
                  </h3>

                  <div className="space-y-3 text-xs text-sand-200/80 font-light leading-relaxed">
                    <p>
                      <strong className="text-sand-100 font-medium">Challenge: </strong>
                      {story.challenges}
                    </p>
                    <p>
                      <strong className="text-gold-400 font-medium">Transformation: </strong>
                      {story.transformation}
                    </p>
                  </div>
                </div>

                {/* Quote Box */}
                {story.quote && (
                  <div className="pt-4 border-t border-navy-700/60 flex items-start gap-2.5 text-xs italic text-sage-300">
                    <Quote className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>"{story.quote}"</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
