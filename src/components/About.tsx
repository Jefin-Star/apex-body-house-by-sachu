import React from 'react';
import { GYM_INFO, WHY_CHOOSE_ITEMS } from '../data/gymData';
import { Check, ShieldCheck, Sparkles, ArrowRight, Dumbbell } from 'lucide-react';
import strengthFacilityImg from '../assets/images/facility_heavy_strength_1792689707050.jpg';
import functionalTurfImg from '../assets/images/facility_functional_turf_1792689707478.jpg';

interface AboutProps {
  onOpenConsultation: () => void;
  onExplorePrograms: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation, onExplorePrograms }) => {
  const strengthImageSrc = strengthFacilityImg || GYM_INFO.strengthFacilityImage || '/src/assets/images/facility_heavy_strength_1792689707050.jpg';
  const functionalTurfImageSrc = functionalTurfImg || GYM_INFO.functionalTurfImage || '/src/assets/images/facility_functional_turf_1792689707478.jpg';
  return (
    <section id="about" className="py-24 bg-neutral-950 border-t border-neutral-900 relative">
      {/* Background ambient lighting */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
            <span>DISCIPLINE · STRENGTH · TRANSFORMATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            About Our Gym
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            APEX BODY HOUSE BY SACHU is more than a fitness club—it is a purpose-built training studio
            designed to forge physical resilience, technical excellence, and sustainable health.
          </p>
        </div>

        {/* Narrative & Visual Facility Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase leading-tight">
                Where Science Meets Heavy Iron
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Founded on the uncompromising principle of progressive overload and biomechanical precision, 
                APEX BODY HOUSE provides a supportive, high-energy environment free of distraction. 
                Whether you are stepping into a weight room for the first time or prepping for an advanced strength cycle,
                every lifter receives master-level instruction.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Our facility is equipped with competition-grade Olympic barbells, specialized selectorized machines, 
                high-tensile dumbbell batteries, and an all-black functional turf sprint lane for conditioning. 
                No crowding, no guesswork—just pure, unfiltered dedication.
              </p>
            </div>

            {/* Quick Consultation Callout Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                  Zero Obligation
                </span>
                <h4 className="font-display text-xl font-bold text-white uppercase">
                  Claim Your Free Consultation
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Discuss body goals, posture analysis, and custom training roadmaps with Coach Sachu.
                </p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Free Consultation
              </button>
            </div>
          </div>

          {/* Dual Facility Imagery */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-neutral-800 shadow-xl group">
              <img
                src={strengthImageSrc}
                alt="Heavy dumbbell rack at Apex Body House"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-bold uppercase tracking-wider text-white">Strength &amp; Free Weights</span>
                <p className="text-[11px] text-neutral-400">Heavy urethane dumbbells up to 50kg+</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-neutral-800 shadow-xl group translate-y-4">
              <img
                src={functionalTurfImageSrc}
                alt="Functional turf area at Apex Body House"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-bold uppercase tracking-wider text-white">Functional Sprint Turf</span>
                <p className="text-[11px] text-neutral-400">Sled pulls, kettlebells &amp; battle ropes</p>
              </div>
            </div>
          </div>

        </div>

        {/* WHY CHOOSE ABHSAC? */}
        <div className="pt-12 border-t border-neutral-900">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase">
              Why Choose ABHSAC?
            </h3>
            <p className="text-neutral-400 text-sm mt-2">
              The eight pillars that make Apex Body House the gold standard in strength and body transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {WHY_CHOOSE_ITEMS.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-red-600/40 hover:bg-neutral-900 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-red-950/60 border border-red-900/40 flex items-center justify-center text-red-500 mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <h4 className="font-display text-base font-bold text-white uppercase tracking-wide group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onExplorePrograms}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-500 hover:text-red-400 group cursor-pointer"
            >
              <span>Explore All 8 Specialized Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
