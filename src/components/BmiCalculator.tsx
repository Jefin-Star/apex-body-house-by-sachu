import React, { useState } from 'react';
import { Calculator, ArrowRight, Activity } from 'lucide-react';

interface BmiCalculatorProps {
  onApplyGoalToRegistration: (goal: string) => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onApplyGoalToRegistration }) => {
  const [height, setHeight] = useState<string>('175');
  const [weight, setWeight] = useState<string>('72');
  const [age, setAge] = useState<string>('26');
  const [activity, setActivity] = useState<string>('moderate');
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    calories: number;
    recommendedProgram: string;
  } | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) return;

    // BMI = weight(kg) / (height(m))^2
    const heightInMeters = h / 100;
    const bmiVal = parseFloat((w / (heightInMeters * heightInMeters)).toFixed(1));

    let cat = 'Normal Weight';
    let prog = 'PREMIUM GENERAL TRAINING';

    if (bmiVal < 18.5) {
      cat = 'Underweight (Mass Focus)';
      prog = 'MUSCLE BUILDING & BULKING';
    } else if (bmiVal < 25) {
      cat = 'Healthy Range';
      prog = 'STRENGTH & FUNCTIONAL TRAINING';
    } else if (bmiVal < 30) {
      cat = 'Overweight (Cutting Focus)';
      prog = 'FAT LOSS & METABOLIC CONDITIONING';
    } else {
      cat = 'Obese Class (Recomposition)';
      prog = 'FAT LOSS & WEIGHT MANAGEMENT';
    }

    // Basal Metabolic Rate estimation (Mifflin-St Jeor formula baseline)
    const bmr = 10 * w + 6.25 * h - 5 * (a || 25) + 5;
    const multipliers: Record<string, number> = {
      sedentary: 1.2,
      moderate: 1.55,
      intense: 1.75,
    };
    const tdee = Math.round(bmr * (multipliers[activity] || 1.55));

    setResult({
      bmi: bmiVal,
      category: cat,
      calories: tdee,
      recommendedProgram: prog,
    });
  };

  return (
    <section className="py-20 bg-[#070707] border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Intro */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
              <Calculator className="w-4 h-4" />
              <span>INTERACTIVE ASSESSMENT TOOL</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white tracking-wide">
              Calculate Your BMI &amp; Daily Fuel Needs
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Before setting foot on the platform, know your numbers. Input your height and weight to receive instant body mass index and estimated maintenance calories.
            </p>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300 space-y-1">
              <p className="font-semibold text-white">Coach Sachu’s Rule:</p>
              <p className="text-neutral-400">
                &ldquo;The scale tells only part of the story. Muscle mass is denser than fat—use this as a starting marker, not your limit.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Interactive Form & Result */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <form onSubmit={calculate} className="space-y-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="250"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-red-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    min="30"
                    max="250"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-red-500 font-mono"
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    min="14"
                    max="90"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-red-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Activity Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setActivity('sedentary')}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all ${
                      activity === 'sedentary'
                        ? 'bg-red-600 text-white border-red-500'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                    }`}
                  >
                    Sedentary
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivity('moderate')}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all ${
                      activity === 'moderate'
                        ? 'bg-red-600 text-white border-red-500'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                    }`}
                  >
                    Moderate (3-4x)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivity('intense')}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all ${
                      activity === 'intense'
                        ? 'bg-red-600 text-white border-red-500'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                    }`}
                  >
                    Athlete (5-7x)
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-neutral-800 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Compute Metrics
              </button>
            </form>

            {/* Results display */}
            {result && (
              <div className="mt-6 pt-6 border-t border-neutral-800 space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800">
                    <span className="text-[10px] uppercase text-neutral-400 tracking-wider">Your BMI</span>
                    <p className="font-display text-2xl font-bold text-red-500 font-mono tabular-nums">
                      {result.bmi}
                    </p>
                    <span className="text-[11px] text-white font-medium">{result.category}</span>
                  </div>

                  <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800">
                    <span className="text-[10px] uppercase text-neutral-400 tracking-wider">Est. Maintenance</span>
                    <p className="font-display text-2xl font-bold text-white font-mono tabular-nums">
                      {result.calories}
                    </p>
                    <span className="text-[11px] text-neutral-400">kcal / day</span>
                  </div>

                  <div className="col-span-2 sm:col-span-1 p-3 bg-neutral-900 rounded-xl border border-neutral-800 flex flex-col justify-center">
                    <span className="text-[10px] uppercase text-neutral-400 tracking-wider">Recommended Track</span>
                    <p className="font-display text-xs font-bold text-red-400 mt-1 uppercase leading-tight">
                      {result.recommendedProgram}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => onApplyGoalToRegistration(`Goal based on BMI ${result.bmi}: ${result.recommendedProgram}`)}
                    className="text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Pre-fill Registration with this Goal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
