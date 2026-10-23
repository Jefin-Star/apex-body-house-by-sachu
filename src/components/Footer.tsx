import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { MessageSquare, Mail, Instagram, MapPin, Dumbbell, Shield, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-white/10 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={GYM_INFO.logoPath}
                alt="APEX BODY HOUSE Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-display text-xl font-bold tracking-wider text-white uppercase leading-none">
                  APEX BODY HOUSE
                </h3>
                <p className="text-[10px] tracking-[0.25em] text-red-500 font-semibold uppercase mt-0.5">
                  BY SACHU
                </p>
              </div>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              &ldquo;{GYM_INFO.tagline}&rdquo; <br />
              Premium strength training, certified master coaching, and modern gym facility dedicated to serious results in Kerala, India.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/91${GYM_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/50 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-pink-400 hover:border-pink-500/50 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${GYM_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-red-400 hover:border-red-500/50 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-white transition-colors"
                >
                  About Our Gym
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('programs')}
                  className="hover:text-white transition-colors"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('membership')}
                  className="hover:text-white transition-colors"
                >
                  Membership Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('coach')}
                  className="hover:text-white transition-colors"
                >
                  Meet Coach Sachu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('register')}
                  className="hover:text-white transition-colors"
                >
                  Online Registration
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Programs */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Key Programs
            </h4>
            <ul className="space-y-2">
              <li>Premium General Training</li>
              <li>Muscle Building &amp; Bulking</li>
              <li>Fat Loss &amp; Conditioning</li>
              <li>Strength Training</li>
              <li>Personal Training with Sachu</li>
              <li>Women&apos;s Fitness</li>
            </ul>
          </div>

          {/* Col 5: Operating Hours & Address */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Studio Timings
            </h4>
            <div className="space-y-1.5 text-neutral-400">
              <p className="text-white font-medium">Monday to Saturday:</p>
              <p className="font-mono text-[11px]">5:00 AM – 10:00 AM</p>
              <p className="font-mono text-[11px]">4:30 PM – 10:00 PM</p>
              <div className="pt-2 border-t border-neutral-800">
                <p className="text-red-400 font-semibold uppercase">Sunday: Closed</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-[11px] text-center sm:text-left">
            &copy; {new Date().getFullYear()} APEX BODY HOUSE BY SACHU (ABHSAC). All Rights Reserved. Built with discipline, defined by strength.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
