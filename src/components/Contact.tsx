import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { MessageSquare, Mail, Instagram, MapPin, Clock, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/91${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello APEX BODY HOUSE BY SACHU! I want to inquire about gym membership and training."
  )}`;

  return (
    <section id="contact" className="py-24 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500">
            CONNECT WITH US
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Contact &amp; Location
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Visit our training studio, drop us a direct message on WhatsApp, or connect on Instagram.
          </p>
        </div>

        {/* 3 Contact Cards (WhatsApp, Email, Instagram) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* WhatsApp Card */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Direct Messaging
              </span>
              <h3 className="font-display text-xl font-bold text-white uppercase mt-1">
                WhatsApp
              </h3>
              <p className="text-xs text-neutral-400 mt-2">
                Fastest response for membership questions, payment verification, and appointment bookings.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
              <span className="font-mono">{GYM_INFO.formattedPhone}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${GYM_INFO.email}`}
            className="group p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-red-500/60 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-800/50 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Official Inquiries
              </span>
              <h3 className="font-display text-xl font-bold text-white uppercase mt-1">
                Email
              </h3>
              <p className="text-xs text-neutral-400 mt-2">
                Send formal questions, corporate fitness partnerships, or detailed personal training inquiries.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-bold text-red-400 group-hover:text-red-300">
              <span className="truncate pr-2">{GYM_INFO.email}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href={GYM_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-pink-500/60 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-950/60 border border-pink-800/50 text-pink-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Community &amp; Highlights
              </span>
              <h3 className="font-display text-xl font-bold text-white uppercase mt-1">
                Instagram
              </h3>
              <p className="text-xs text-neutral-400 mt-2">
                Follow daily transformation reels, PR lifts, coach form breakdowns, and athlete spotlights.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-bold text-pink-400 group-hover:text-pink-300">
              <span>{GYM_INFO.instagramHandle}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

        </div>

        {/* Map & Location Detail Container */}
        <div className="rounded-3xl bg-neutral-900/80 border border-neutral-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Location Info */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-red-500 mb-2">
                    <MapPin className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Studio Location
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase text-white leading-tight">
                    APEX BODY HOUSE FITNESS STUDIO
                  </h3>
                  <p className="text-xs text-red-400 font-semibold tracking-wider uppercase mt-1">
                    ABHSAC BY SACHU
                  </p>
                </div>

                <div className="text-sm text-neutral-300 leading-relaxed bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80">
                  <p className="font-medium text-white mb-1">Studio Address:</p>
                  <p className="text-neutral-400 text-xs">
                    ABHSAC [APEX BODY HOUSE BY SACHU] FITNESS STUDIO
                  </p>
                  <p className="text-neutral-400 text-xs mt-1">
                    Kerala, India
                  </p>
                </div>

                {/* Hours Box */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-neutral-300 font-bold uppercase">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span>Operating Hours</span>
                  </div>
                  <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80 space-y-1.5 text-neutral-300">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Monday – Saturday:</span>
                      <span className="font-semibold text-white font-mono text-[11px]">5:00AM – 10:00AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Evening Shift:</span>
                      <span className="font-semibold text-white font-mono text-[11px]">4:30PM – 10:00PM</span>
                    </div>
                    <div className="flex justify-between border-t border-neutral-800 pt-1.5 mt-1.5">
                      <span className="text-neutral-400">Sunday:</span>
                      <span className="font-semibold text-red-400 uppercase">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={GYM_INFO.googleMapsEmbedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-neutral-700 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Map Embed (Google Maps Iframe as specified) */}
            <div className="lg:col-span-7 min-h-[380px] lg:min-h-full bg-neutral-900 border-t lg:border-t-0 lg:border-l border-neutral-800 relative">
              <iframe
                src={GYM_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="APEX BODY HOUSE BY SACHU Location Map"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
