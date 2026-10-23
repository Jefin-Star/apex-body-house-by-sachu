import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CoachProfileCard } from './components/CoachProfileCard';
import { Programs } from './components/Programs';
import { Membership } from './components/Membership';
import { RegistrationForm } from './components/RegistrationForm';
import { BmiCalculator } from './components/BmiCalculator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { GYM_INFO } from './data/gymData';
import { Crown, Sparkles, MessageCircle, Phone } from 'lucide-react';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('3-months');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProgram = (programTitle: string) => {
    // Map program title to plan or scroll to register with prefilled note
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyBmiGoal = (goalText: string) => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappDirectUrl = `https://wa.me/91${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello APEX BODY HOUSE BY SACHU! I would like to join the gym."
  )}`;

  return (
    <div className="min-h-screen bg-[#080808] text-neutral-100 selection:bg-red-600 selection:text-white">
      
      {/* 3-Zone Top Navigation */}
      <Navbar
        onSelectPlan={handleSelectPlan}
        onOpenConsultation={() => setConsultationModalOpen(true)}
      />

      {/* 1. Hero Section */}
      <Hero
        onJoinClick={() => scrollToSection('register')}
        onViewPlansClick={() => scrollToSection('membership')}
        onConsultationClick={() => setConsultationModalOpen(true)}
      />

      {/* 2. About Our Gym Section (Includes Why Choose ABHSAC & Facility showcase) */}
      <About
        onOpenConsultation={() => setConsultationModalOpen(true)}
        onExplorePrograms={() => scrollToSection('programs')}
      />

      {/* 6. Coach Sachu Profile Section (The central portrait card with glowing moving red light border) */}
      <section id="coach" className="py-24 bg-[#090909] border-t border-neutral-900 relative overflow-hidden">
        {/* Atmospheric lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
              <Crown className="w-4 h-4 text-amber-400" fill="#F59E0B" />
              <span>THE VISIONARY BEHIND THE IRON</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              Meet Coach Sachu
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Certified master coach, hypertrophy specialist, and founder of APEX BODY HOUSE. 
              Dedicated to sculpting elite physique standards through scientific periodization and strict form mastery.
            </p>
          </div>

          {/* Dedicated Profile Card Enclosed in Glowing Moving Red Light Border */}
          <CoachProfileCard onBookPT={() => handleSelectPlan('personal-training')} />
        </div>
      </section>

      {/* Our Programs */}
      <Programs onSelectProgram={handleSelectProgram} />

      {/* 3. Membership Plans (Includes Admission Fee ₹999, 1M, 3M, 6M, 1Y, and Personal Training ₹5,999/-) */}
      <Membership onSelectPlan={handleSelectPlan} />

      {/* Interactive Tool: BMI & Calorie Calculator */}
      <BmiCalculator onApplyGoalToRegistration={handleApplyBmiGoal} />

      {/* 4. Membership Registration Form */}
      <RegistrationForm
        preselectedPlanId={selectedPlanId}
        onResetPreselectedPlan={() => setSelectedPlanId('3-months')}
      />

      {/* 5. Contact Us Section (WhatsApp, Email, Instagram, and Google Map Embed) */}
      <Contact />

      {/* 7. Footer */}
      <Footer />

      {/* Free Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />

      {/* Floating Quick WhatsApp Action Button (Mobile-friendly affordance) */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-2xl shadow-emerald-950/70 border border-emerald-400/40 hover:scale-105 transition-all duration-200 group"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Chat with Gym</span>
        </a>
      </div>

    </div>
  );
}
