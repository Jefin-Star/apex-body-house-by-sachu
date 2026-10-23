import React from 'react';
import { GYM_INFO, MEMBERSHIP_PLANS, PERSONAL_TRAINING_DETAILS } from '../data/gymData';
import { Check, Crown, Clock, Sparkles, Shield, ArrowRight, Star } from 'lucide-react';

interface MembershipProps {
  onSelectPlan: (planId: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onSelectPlan }) => {
  return (
    <section id="membership" className="py-24 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
            <span>TRANSPARENT PRICING · NO HIDDEN FEES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Membership Plans
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Choose the membership commitment that fits your journey.
            All standard plans include complete gym floor and high-end equipment access.
          </p>

          {/* Admission Fee Notice */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-700/80 shadow-md mt-4">
            <Shield className="w-4 h-4 text-red-500" />
            <span className="text-xs sm:text-sm text-neutral-200">
              One-Time Admission Fee: <span className="font-bold text-white font-mono">₹{GYM_INFO.admissionFee}</span> (Includes registration &amp; induction assessment)
            </span>
          </div>
        </div>

        {/* 4 Standard Membership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isHighlight = plan.isPopular || plan.isBestValue;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between p-6 transition-all duration-300 border ${
                  plan.isBestValue
                    ? 'bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 border-red-500/80 shadow-2xl shadow-red-950/40 lg:-translate-y-2'
                    : plan.isPopular
                    ? 'bg-gradient-to-b from-neutral-900 to-neutral-950 border-neutral-700 shadow-xl lg:-translate-y-1'
                    : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Top Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-md ${
                        plan.isBestValue
                          ? 'bg-red-600 text-white'
                          : plan.isPopular
                          ? 'bg-neutral-100 text-neutral-950'
                          : 'bg-neutral-800 text-neutral-300'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Duration */}
                  <div className="text-center pt-2 pb-4 border-b border-neutral-800">
                    <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">{plan.duration}</p>
                  </div>

                  {/* Price Block */}
                  <div className="py-6 text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-base text-neutral-400 font-sans">₹</span>
                      <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight font-mono tabular-nums">
                        {plan.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    {plan.originalPrice && (
                      <p className="text-xs text-neutral-500 line-through mt-1">
                        ₹{plan.originalPrice.toLocaleString('en-IN')}
                      </p>
                    )}
                    <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1">
                      {plan.periodLabel}
                    </p>
                  </div>

                  {/* Plan Description */}
                  <p className="text-xs text-neutral-400 text-center mb-6 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Join Button */}
                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                    plan.isBestValue
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-red-950/50 hover:shadow-red-600/50'
                      : 'bg-neutral-800 hover:bg-red-600 text-white hover:text-white'
                  }`}
                >
                  <span>Join Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* PERSONAL TRAINING WITH SACHU - Special High-Impact Marquee Card */}
        <div className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-r from-red-600 via-neutral-800 to-red-600 shadow-2xl mb-16">
          <div className="bg-neutral-950 rounded-[22px] p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading & Price */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/50 text-[11px] font-bold tracking-wider uppercase text-red-400">
                  <Crown className="w-3.5 h-3.5 text-amber-400" fill="#F59E0B" />
                  <span>VIP PRIVATE MENTORSHIP</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white tracking-wide">
                  PERSONAL TRAINING WITH SACHU
                </h3>

                <div className="flex items-baseline gap-2 pt-2">
                  <span className="text-xl text-neutral-400">₹</span>
                  <span className="font-display text-5xl font-bold text-white tracking-tight font-mono tabular-nums">
                    {PERSONAL_TRAINING_DETAILS.price.toLocaleString('en-IN')}/-
                  </span>
                  <span className="text-xs uppercase text-neutral-400 tracking-wider">
                    {PERSONAL_TRAINING_DETAILS.periodLabel}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Transform with direct, uncompromising attention from Head Coach Sachu. 
                  Every rep, every nutritional threshold, and every biomechanical adjustment is supervised to guarantee your fastest progress.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectPlan('personal-training')}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-900/40 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Join Personal Training</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Middle Column: PT Features */}
              <div className="lg:col-span-4 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 space-y-3.5">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white border-b border-neutral-800 pb-2">
                  Included In Every PT Package
                </h4>
                <div className="space-y-3">
                  {PERSONAL_TRAINING_DETAILS.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200">
                      <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="font-semibold uppercase tracking-wide">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Coach Credentials Summary */}
              <div className="lg:col-span-3 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-neutral-300 font-bold uppercase tracking-wider">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Coach Credentials</span>
                </div>
                <div className="text-red-400 font-semibold">
                  {PERSONAL_TRAINING_DETAILS.trainerBio.handle}
                </div>
                <ul className="space-y-1.5 text-neutral-400">
                  {PERSONAL_TRAINING_DETAILS.trainerBio.credentials.map((cred, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-red-500">·</span>
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Operating Hours Box */}
        <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-900/50 text-red-500 shrink-0">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                Gym Schedule &amp; Timings
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
                {GYM_INFO.timings.days}
              </h4>
              <p className="text-sm text-neutral-300 mt-1">
                Morning: <span className="text-white font-semibold font-mono">{GYM_INFO.timings.morningSlot}</span>
                <span className="mx-2 text-neutral-500">|</span>
                Evening: <span className="text-white font-semibold font-mono">{GYM_INFO.timings.eveningSlot}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-neutral-800 pt-4 md:pt-0">
            <div className="text-right">
              <span className="text-xs text-neutral-400 block">Sunday Schedule</span>
              <span className="text-sm font-bold text-red-400 uppercase tracking-wider">
                Closed (Deep Clean &amp; Rest)
              </span>
            </div>
            <button
              onClick={() => onSelectPlan('3-months')}
              className="px-5 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
            >
              Choose Plan
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
