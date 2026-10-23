import React, { useState } from 'react';
import { PROGRAMS } from '../data/gymData';
import { FitnessProgram } from '../types';
import { Dumbbell, Flame, Sparkles, Activity, Apple, UserCheck, Heart, Zap, ArrowRight } from 'lucide-react';

interface ProgramsProps {
  onSelectProgram: (programTitle: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  const [selectedProgram, setSelectedProgram] = useState<FitnessProgram>(PROGRAMS[0]);

  const getProgramIcon = (id: string) => {
    switch (id) {
      case 'general':
        return <Dumbbell className="w-5 h-5 text-red-500" />;
      case 'muscle':
        return <Activity className="w-5 h-5 text-red-500" />;
      case 'fatloss':
        return <Flame className="w-5 h-5 text-red-500" />;
      case 'strength':
        return <Zap className="w-5 h-5 text-red-500" />;
      case 'nutrition':
        return <Apple className="w-5 h-5 text-red-500" />;
      case 'personal':
        return <UserCheck className="w-5 h-5 text-red-500" />;
      case 'women':
        return <Heart className="w-5 h-5 text-red-500" />;
      case 'functional':
        return <Sparkles className="w-5 h-5 text-red-500" />;
      default:
        return <Dumbbell className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section id="programs" className="py-24 bg-[#0a0a0a] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">
              CUSTOM PROTOCOLS · TARGETED RESULTS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              Our Programs
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Every training blueprint is grounded in progressive overload, metabolic science, and individualized biomechanics.
            </p>
          </div>
          <div className="text-xs text-neutral-400">
            <span>8 Specialized Tracks</span>
            <span className="mx-2">·</span>
            <span>All Fitness Levels</span>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((prog) => {
            const isSelected = selectedProgram.id === prog.id;
            return (
              <div
                key={prog.id}
                onClick={() => setSelectedProgram(prog)}
                className={`relative rounded-2xl p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-neutral-900 border-red-500 shadow-xl shadow-red-950/40 -translate-y-1'
                    : 'bg-neutral-950/80 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/60'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
                      {getProgramIcon(prog.id)}
                    </div>
                    {prog.isNew && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-red-600 text-white shadow-sm">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                    {prog.title}
                  </h3>
                  <p className="text-xs font-semibold text-red-400 mt-1 uppercase tracking-wider">
                    {prog.subtitle}
                  </p>

                  <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                    {prog.description}
                  </p>

                  {/* Key focus bullet points */}
                  <div className="mt-4 pt-4 border-t border-neutral-800/80 space-y-1.5">
                    {prog.focus.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-300">
                        <span className="w-1 h-1 rounded-full bg-red-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Enroll Action */}
                <div className="mt-6 pt-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProgram(prog.title);
                    }}
                    className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-800/90 hover:bg-red-600 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Register for This Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
