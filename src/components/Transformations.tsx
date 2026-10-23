import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TRANSFORMATIONS, GYM_INFO } from '../data/gymData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Flame, 
  Trophy, 
  TrendingUp, 
  TrendingDown, 
  ArrowRight, 
  Clock, 
  UserCheck, 
  Sparkles,
  Award
} from 'lucide-react';

interface TransformationsProps {
  onStartTransformation: (clientCategory?: string) => void;
  onOpenConsultation: () => void;
}

const ROTATION_INTERVAL_MS = 5000;

export const Transformations: React.FC<TransformationsProps> = ({ 
  onStartTransformation, 
  onOpenConsultation 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Swipe gesture tracking
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);
  const dragStartX = useRef<number | null>(null);

  const totalSlides = TRANSFORMATIONS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // 5-second automatic rotation with visual progress ticker
  useEffect(() => {
    if (isPaused) return;

    const stepMs = 50;
    const increment = (stepMs / ROTATION_INTERVAL_MS) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Previous
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Desktop Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const distance = dragStartX.current - e.clientX;
    const minDragDistance = 50;

    if (distance > minDragDistance) {
      nextSlide();
    } else if (distance < -minDragDistance) {
      prevSlide();
    }
    isDragging.current = false;
    dragStartX.current = null;
  };

  const current = TRANSFORMATIONS[currentIndex];

  const getDeltaBadge = (type: string, delta: string) => {
    switch (type) {
      case 'loss':
        return (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/60 text-red-400 text-xs font-bold font-mono">
            <TrendingDown className="w-4 h-4 text-red-500" />
            <span>{delta}</span>
          </div>
        );
      case 'gain':
        return (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/60 text-emerald-400 text-xs font-bold font-mono">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
            <span>{delta}</span>
          </div>
        );
      case 'award':
      default:
        return (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/60 text-amber-400 text-xs font-bold">
            <Trophy className="w-4 h-4 text-amber-500" fill="#F59E0B" />
            <span>{delta}</span>
          </div>
        );
    }
  };

  return (
    <section 
      id="transformations" 
      className="py-24 bg-[#070707] border-t border-neutral-900 relative overflow-hidden select-none"
      aria-label="Client Transformations"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span>REAL ATHLETES · PROVEN PROTOCOLS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
              Client Transformations
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Real results built by discipline, progressive overload, and custom nutrition frameworks at APEX BODY HOUSE BY SACHU.
            </p>
          </div>

          {/* Autoplay status, timer controls & Slide counters */}
          <div className="flex items-center gap-4 bg-neutral-900/80 border border-neutral-800 rounded-2xl px-4 py-2.5 backdrop-blur-sm self-start md:self-end">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label={isPaused ? "Play 5s rotation" : "Pause 5s rotation"}
              title={isPaused ? "Resume 5-second automatic rotation" : "Pause automatic rotation"}
            >
              {isPaused ? <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" /> : <Pause className="w-4 h-4 text-amber-400 fill-amber-400" />}
            </button>

            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                {isPaused ? "Rotation Paused" : "Auto-Rotating (5s)"}
              </span>
              <span className="text-xs font-mono font-bold text-white">
                Client 0{currentIndex + 1} / 0{totalSlides}
              </span>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-neutral-800">
              <button
                onClick={prevSlide}
                className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous transformation"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Next transformation"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 5-Second Interval Progress Bar */}
        <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden mb-8 border border-neutral-800">
          <div 
            className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-75 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic Carousel / Swipe Stage */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="relative bg-neutral-950 border border-neutral-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing"
        >
          {/* Subtle watermarked athletic backdrop */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Transformation Poster (Central visual photo) */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-2 border-red-600/40 bg-neutral-900 group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                  draggable={false}
                />
                
                {/* Visual swipe hint badge on mobile */}
                <div className="absolute top-3 right-3 sm:hidden px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-semibold text-neutral-300 border border-white/10">
                  Swipe ← →
                </div>
              </div>
            </div>

            {/* Right Column: Case Details, Metrics, and Quote */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Category & Delta badge */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  {current.category}
                </span>
                {getDeltaBadge(current.deltaType, current.delta)}
              </div>

              {/* Title */}
              <div>
                <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase text-white tracking-wide leading-tight">
                  {current.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-neutral-400 mt-2 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-red-500" />
                    <span>Duration: {current.duration}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-red-500" />
                    <span>Mentored by {current.coach}</span>
                  </span>
                </div>
              </div>

              {/* Before vs After Metric Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                    Baseline (Before)
                  </span>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-white font-mono mt-1">
                    {current.beforeStat}
                  </p>
                  <span className="text-[11px] text-neutral-500">Starting Point</span>
                </div>

                <div className="bg-neutral-900/90 border border-red-950/70 rounded-xl p-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-red-400">
                    Achieved (After)
                  </span>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-red-500 font-mono mt-1">
                    {current.afterStat}
                  </p>
                  <span className="text-[11px] text-neutral-400 font-medium">Transform Result</span>
                </div>
              </div>

              {/* Client Quote */}
              <div className="bg-neutral-900/50 border-l-2 border-red-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              {/* Key Transformation Highlights */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Key Transformation Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.keyHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onStartTransformation(current.category)}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-950/50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start Your Transformation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="py-3.5 px-6 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Free Consultation
                </button>
              </div>

            </div>

          </div>

          {/* Large Floating Carousel Navigation Arrows (Desktop) */}
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-neutral-900/90 hover:bg-red-600 text-neutral-300 hover:text-white border border-neutral-800 items-center justify-center transition-all duration-200 shadow-xl cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-neutral-900/90 hover:bg-red-600 text-neutral-300 hover:text-white border border-neutral-800 items-center justify-center transition-all duration-200 shadow-xl cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Selector & Interactive Dot Navigation */}
        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
          {TRANSFORMATIONS.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col sm:flex-row items-center gap-3 cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900/90 border-red-500 shadow-lg shadow-red-950/40 ring-1 ring-red-500'
                    : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/40'
                }`}
              >
                <div className="w-12 h-16 sm:w-14 sm:h-18 rounded-lg overflow-hidden shrink-0 border border-neutral-800 bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-center sm:text-left overflow-hidden">
                  <span className={`text-[10px] font-bold uppercase tracking-wider block ${isActive ? 'text-red-400' : 'text-neutral-500'}`}>
                    0{index + 1} · {item.duration}
                  </span>
                  <p className="text-xs font-bold text-white truncate max-w-full">
                    {item.delta}
                  </p>
                  <p className="hidden sm:block text-[11px] text-neutral-400 truncate">
                    {item.category}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile Swipe Instructions Footer */}
        <div className="mt-4 text-center text-xs text-neutral-500 flex items-center justify-center gap-2">
          <span>Tip: Swipe horizontally or use arrow buttons to browse transformations</span>
        </div>

      </div>
    </section>
  );
};
