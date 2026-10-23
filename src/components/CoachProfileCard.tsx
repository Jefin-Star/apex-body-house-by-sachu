import React from 'react';
import { GYM_INFO, PERSONAL_TRAINING_DETAILS } from '../data/gymData';
import { Crown, CheckCircle2, MessageSquare, Award, Sparkles } from 'lucide-react';

interface CoachProfileCardProps {
  onBookPT?: () => void;
}

export const CoachProfileCard: React.FC<CoachProfileCardProps> = ({ onBookPT }) => {
  const whatsappCoachUrl = `https://wa.me/91${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello Coach Sachu! I am interested in One-on-One Personal Training at APEX BODY HOUSE. Could you please share more details?"
  )}`;

  return (
    <div className="relative max-w-xl mx-auto w-full group">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-red-600/30 rounded-[26px] blur-xl opacity-75 group-hover:opacity-100 transition duration-700 animate-pulse-glow" />

      {/* The glowing, moving red light border container */}
      <div className="relative rounded-[24px] p-[3px] overflow-hidden shadow-2xl bg-neutral-900">
        
        {/* Continuous rotating conic gradient creating the moving red light border */}
        <div 
          className="absolute -inset-[150%] animate-spin-slow bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_180deg,#7f1d1d_240deg,#dc2626_280deg,#ef4444_320deg,#ff4444_350deg,#dc2626_360deg)] pointer-events-none"
        />

        {/* Inner Card Content Surface */}
        <div className="relative bg-neutral-950/95 backdrop-blur-xl rounded-[21px] p-6 sm:p-8 flex flex-col items-center text-center border border-white/5">
          
          {/* Top subtle badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-semibold tracking-wider uppercase text-red-400 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>Master Coach & Head of Fitness</span>
          </div>

          {/* Central Portrait Photo */}
          <div className="relative w-56 sm:w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-red-500/40 mb-6 bg-neutral-900">
            <img
              src={GYM_INFO.coachPhotoPath}
              alt="Coach Sachu - Apex Body House"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Subtle photographic vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-neutral-950/20" />
          </div>

          {/* Distinct Box: Gold Crown Icon, Name "Sachu", Title "Coach & Founder" */}
          <div className="w-full max-w-md bg-neutral-900/90 border border-neutral-700/80 rounded-xl p-4 shadow-lg mb-6 backdrop-blur-md">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <Crown className="w-6 h-6 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" fill="#F59E0B" />
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-wider uppercase text-white leading-none">
                Sachu
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-red-500">
              Coach &amp; Founder
            </p>
            <p className="text-[11px] text-neutral-400 mt-1">
              {PERSONAL_TRAINING_DETAILS.trainerBio.handle}
            </p>
          </div>

          {/* Text block listing the requested exact qualifications */}
          <div className="w-full max-w-md bg-neutral-950/80 border border-neutral-800/80 rounded-xl p-5 text-left space-y-3">
            <div className="flex items-center gap-2 border-b border-neutral-800 pb-2.5">
              <Award className="w-4 h-4 text-red-500 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-200">
                Verified Credentials &amp; Certifications
              </span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              {PERSONAL_TRAINING_DETAILS.trainerBio.exactSection6Qualifications.map((qualification, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-white">{qualification}</span>
                </li>
              ))}
              <li className="flex items-start gap-2.5 leading-snug">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-neutral-300">Strength &amp; Conditioning Coach · Rehab &amp; Prehab Specialist</span>
              </li>
            </ul>
          </div>

          {/* Action Callouts */}
          <div className="w-full max-w-md mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappCoachUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-900/30 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat with Coach</span>
            </a>
            {onBookPT && (
              <button
                onClick={onBookPT}
                className="flex-1 py-3 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs uppercase tracking-wider border border-neutral-700 transition-colors"
              >
                1-on-1 PT Details
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
