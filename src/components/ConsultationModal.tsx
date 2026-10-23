import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { X, CheckCircle2, MessageSquare, Sparkles, Calendar, Clock, User, Phone } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning (6:00 AM - 9:00 AM)');
  const [goal, setGoal] = useState('Fat Loss & Conditioning');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `*FREE FITNESS CONSULTATION REQUEST - APEX BODY HOUSE*
---------------------------------------
*Name:* ${name || 'Prospective Member'}
*Phone:* ${phone || 'Not provided'}
*Preferred Slot:* ${preferredSlot}
*Main Goal:* ${goal}
---------------------------------------
Hello Coach Sachu, I would like to schedule my free consultation and gym tour!`;
    return `https://wa.me/91${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 bg-red-950/70 border border-red-600/50 text-red-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                Consultation Request Logged!
              </h3>
              <p className="text-xs text-neutral-300">
                Tap below to send your slot request directly to Coach Sachu on WhatsApp:
              </p>
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirm on WhatsApp</span>
            </a>

            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="text-xs text-neutral-500 hover:text-neutral-300 pt-2 block mx-auto"
            >
              Close this window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-red-500">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Free · 0 Commitment</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                Book Free Consultation
              </h3>
              <p className="text-xs text-neutral-400">
                Get a 1-on-1 body composition, postural check, and tailored roadmap review with Coach Sachu.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full pl-9 pr-3 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  WhatsApp Contact Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full pl-9 pr-3 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                  >
                    <option value="Morning (6:00 AM - 9:00 AM)">Morning (6:00 AM - 9:00 AM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                    <option value="Night (8:00 PM - 9:30 PM)">Night (8:00 PM - 9:30 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Primary Goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                  >
                    <option value="Fat Loss & Conditioning">Fat Loss &amp; Conditioning</option>
                    <option value="Muscle Building & Bulk">Muscle Building &amp; Bulk</option>
                    <option value="Strength & Powerlifting">Strength &amp; Powerlifting</option>
                    <option value="Injury Rehab & Mobility">Injury Rehab &amp; Mobility</option>
                    <option value="General Health & Toning">General Health &amp; Toning</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-950/50 transition-colors"
              >
                Schedule Free Consultation
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
