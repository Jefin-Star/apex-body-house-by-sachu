import React from 'react';
import { GYM_INFO, HIGHLIGHTS } from '../data/gymData';
import { ArrowRight, ShieldCheck, Dumbbell, Award, Flame, Users } from 'lucide-react';
import heroGymImage from '../assets/images/hero_gym_dark_lighting_1792689706717.jpg';

interface HeroProps {
  onJoinClick: () => void;
  onViewPlansClick: () => void;
  onConsultationClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onViewPlansClick, onConsultationClick }) => {
  const heroImageSrc = heroGymImage || GYM_INFO.heroImage || '/src/assets/images/hero_gym_dark_lighting_1792689706717.jpg';

  const getHighlightIcon = (title: string) => {
    switch (title) {
      case 'EXPERT COACHING':
        return <Award className="w-5 h-5 text-red-500" />;
      case 'MODERN EQUIPMENT':
        return <Dumbbell className="w-5 h-5 text-red-500" />;
      case 'NUTRITION GUIDANCE':
        return <Flame className="w-5 h-5 text-red-500" />;
      case 'PROGRESS TRACKING':
        return <ShieldCheck className="w-5 h-5 text-red-500" />;
      default:
        return <Users className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-neutral-950">
      {/* Background with Dark Scrim and Cinematic Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageSrc}
          alt="APEX BODY HOUSE Gym Facility"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Gradients for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/70" />
        {/* Subtle red ambient light reflection */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          
          {/* Brand Emblem & Welcome Header */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700/60 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-neutral-300">
              KERALA&apos;S PREMIER STRENGTH & CONDITIONING SANCTUARY
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.05]">
              APEX BODY HOUSE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white">
                BY SACHU (A B H S A C)
              </span>
            </h1>

            {/* Powerful fitness tagline */}
            <p className="font-display text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide text-neutral-200 uppercase pt-1">
              BUILT BY DISCIPLINE. DEFINED BY STRENGTH.
            </p>
          </div>

          {/* Value proposition text */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-normal">
            Step into a high-standard athletic facility engineered for serious transformations.
            Under the direct guidance of Master Coach Sachu, unlock proven hypertrophy splits,
            metabolic fat loss systems, and science-backed nutrition protocols.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={onJoinClick}
              className="px-8 py-4 text-sm font-bold tracking-wider uppercase text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-lg shadow-xl shadow-red-900/40 hover:shadow-red-600/50 transition-all duration-200 flex items-center gap-2 group cursor-pointer"
            >
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onViewPlansClick}
              className="px-7 py-4 text-sm font-semibold tracking-wider uppercase text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 rounded-lg backdrop-blur-md transition-all duration-200 cursor-pointer"
            >
              View Membership Plans
            </button>

            <button
              onClick={onConsultationClick}
              className="text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-red-400 underline underline-offset-4 decoration-red-500/50 transition-colors py-2 px-1 cursor-pointer"
            >
              Request Free Consultation →
            </button>
          </div>

          {/* Quick Timing Summary Notice */}
          <div className="pt-2 text-xs text-neutral-400 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Operating Hours: Mon - Sat 5:00AM - 10:00AM & 4:30PM - 10:00PM</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-neutral-500">Sunday Closed</span>
          </div>
        </div>
      </div>

      {/* Highlights Strip (EXPERT COACHING, MODERN EQUIPMENT, NUTRITION GUIDANCE, PROGRESS TRACKING, FRIENDLY ENVIRONMENT) */}
      <div className="relative z-10 border-t border-white/10 bg-neutral-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
            {HIGHLIGHTS.map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                <div className="p-2 rounded bg-red-950/40 border border-red-900/40 shrink-0 mt-0.5">
                  {getHighlightIcon(item.title)}
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold tracking-wide uppercase text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-400 leading-snug mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
