import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onSelectPlan?: (planId: string) => void;
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectPlan, onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-white/10 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark / Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
          >
            <img
              src={GYM_INFO.logoPath}
              alt="APEX BODY HOUSE Logo"
              className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase whitespace-nowrap leading-none">
                APEX BODY HOUSE
              </span>
              <span className="text-[11px] tracking-[0.25em] text-red-500 font-semibold uppercase">
                BY SACHU
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-red-600 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('programs')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-red-600 cursor-pointer"
            >
              Programs
            </button>
            <button
              onClick={() => scrollTo('membership')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-red-600 cursor-pointer"
            >
              Membership
            </button>
            <button
              onClick={() => scrollTo('coach')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-red-600 cursor-pointer"
            >
              Coach Sachu
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-red-600 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded-md transition-colors whitespace-nowrap shrink-0 border border-white/10"
              >
                Free Consultation
              </button>
            )}
            <button
              onClick={() => scrollTo('register')}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-md shadow-lg shadow-red-900/30 hover:shadow-red-700/50 transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => scrollTo('register')}
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-red-600 rounded"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/98 border-b border-neutral-800 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium">
            <button
              onClick={() => scrollTo('about')}
              className="text-left text-neutral-200 hover:text-red-500 py-1"
            >
              About Our Gym
            </button>
            <button
              onClick={() => scrollTo('programs')}
              className="text-left text-neutral-200 hover:text-red-500 py-1"
            >
              Our Programs
            </button>
            <button
              onClick={() => scrollTo('membership')}
              className="text-left text-neutral-200 hover:text-red-500 py-1"
            >
              Membership Plans
            </button>
            <button
              onClick={() => scrollTo('coach')}
              className="text-left text-neutral-200 hover:text-red-500 py-1"
            >
              Meet Coach Sachu
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left text-neutral-200 hover:text-red-500 py-1"
            >
              Location & Contact
            </button>
          </div>
          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2.5">
            {onOpenConsultation && (
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
                className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-neutral-200 bg-neutral-900 border border-neutral-700 rounded"
              >
                Book Free Consultation
              </button>
            )}
            <button
              onClick={() => scrollTo('register')}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded shadow-md"
            >
              Join Now & Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
