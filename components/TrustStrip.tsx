import { Award, Users, Video, Star, Heart } from "lucide-react";
import { siteConfig } from "@/lib/data/content";

export default function TrustStrip() {
  const stats = [
    {
      icon: Award,
      value: siteConfig.stats.experienceYears,
      label: "Years of Experience",
      detail: "In holistic healing & mentoring",
    },
    {
      icon: Users,
      value: siteConfig.stats.trainedPeople,
      label: "People Trained Directly",
      detail: "Transformed through 1-on-1 & groups",
    },
    {
      icon: Video,
      value: siteConfig.stats.webinarAttendees,
      label: "Webinar Attendees",
      detail: "Experienced live Ho'oponopono",
    },
    {
      icon: Star,
      value: siteConfig.stats.rating,
      label: "Client Rating",
      detail: "Verified participant feedback",
    },
    {
      icon: Heart,
      value: siteConfig.stats.caseStudiesCount,
      label: "Documented Case Studies",
      detail: "Real life breakthroughs",
    },
  ];

  return (
    <section className="py-16 bg-navy-950/60 border-y border-navy-800/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-navy-900/40 border border-navy-800/50 hover:border-gold-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center mb-3 text-gold-500 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-sand-100 group-hover:text-gold-500 transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-sand-200 mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-sage-500 font-light mt-0.5">
                  {stat.detail}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
