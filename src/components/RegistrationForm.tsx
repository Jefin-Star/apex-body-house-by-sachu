import React, { useState, useEffect } from 'react';
import { GYM_INFO, MEMBERSHIP_PLANS, PERSONAL_TRAINING_DETAILS } from '../data/gymData';
import { RegistrationFormData } from '../types';
import { CheckCircle2, MessageSquare, Mail, AlertCircle, ArrowRight, Calendar, User, Phone, Dumbbell, RotateCcw } from 'lucide-react';

interface RegistrationFormProps {
  preselectedPlanId?: string;
  onResetPreselectedPlan?: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  preselectedPlanId,
  onResetPreselectedPlan,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    phone: '',
    email: '',
    planId: '3-months',
    startDate: '',
    fitnessGoals: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationFormData | null>(null);

  // Set default start date to tomorrow if not set
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setFormData((prev) => ({
      ...prev,
      startDate: prev.startDate || dateStr,
    }));
  }, []);

  // Update plan if preselected from pricing cards
  useEffect(() => {
    if (preselectedPlanId) {
      setFormData((prev) => ({ ...prev, planId: preselectedPlanId }));
    }
  }, [preselectedPlanId]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RegistrationFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.planId) {
      newErrors.planId = 'Please select a membership plan.';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Please choose your preferred starting date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getPlanName = (id: string) => {
    if (id === 'personal-training') return `Personal Training with Sachu (₹${PERSONAL_TRAINING_DETAILS.price}/mo)`;
    if (id === 'free-consultation') return 'Free Initial Fitness Consultation';
    const plan = MEMBERSHIP_PLANS.find((p) => p.id === id);
    return plan ? `${plan.name} Membership (₹${plan.price})` : id;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmittedData({ ...formData });
    setIsSubmitted(true);

    // Save to localStorage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('abhsac_registrations') || '[]');
      existing.unshift({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('abhsac_registrations', JSON.stringify(existing));
    } catch {
      // Ignore localStorage issues
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      planId: '3-months',
      startDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      fitnessGoals: '',
    });
    setErrors({});
    if (onResetPreselectedPlan) onResetPreselectedPlan();
  };

  // WhatsApp formatted link
  const createWhatsAppLink = () => {
    if (!submittedData) return `https://wa.me/91${GYM_INFO.whatsappNumber}`;
    const text = `*NEW GYM REGISTRATION - APEX BODY HOUSE BY SACHU*
---------------------------------------
*Name:* ${submittedData.fullName}
*Phone:* ${submittedData.phone}
*Email:* ${submittedData.email}
*Selected Plan:* ${getPlanName(submittedData.planId)}
*Preferred Start Date:* ${submittedData.startDate}
*Fitness Goals / Notes:* ${submittedData.fitnessGoals || 'None specified'}
---------------------------------------
Please confirm my registration and slot timing!`;
    return `https://wa.me/91${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  // Email formatted link
  const createEmailLink = () => {
    if (!submittedData) return `mailto:${GYM_INFO.email}`;
    const subject = `New Registration: ${submittedData.fullName} - ${getPlanName(submittedData.planId)}`;
    const body = `Hello Coach Sachu & Apex Body House Team,

I have submitted my membership registration via the website:

Full Name: ${submittedData.fullName}
Phone Number: ${submittedData.phone}
Email Address: ${submittedData.email}
Selected Membership Plan: ${getPlanName(submittedData.planId)}
Preferred Start Date: ${submittedData.startDate}
Fitness Goals: ${submittedData.fitnessGoals || 'None specified'}

Looking forward to hearing from you.

Best regards,
${submittedData.fullName}`;
    return `mailto:${GYM_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="register" className="py-24 bg-[#0a0a0a] border-t border-neutral-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500">
            SECURE YOUR SPOT ON THE FLOOR
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Membership Registration
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Fill out the form below to lock in your enrollment. We will confirm your slot and prepare your custom fitness profile.
          </p>
        </div>

        {/* Card Container */}
        <div className="rounded-3xl bg-neutral-950 border border-neutral-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Red glow on the top right */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          {isSubmitted && submittedData ? (
            /* Clear Success State with WhatsApp and Email connect */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-red-950/60 border border-red-600/40 text-red-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-red-950/50">
                <CheckCircle2 className="w-10 h-10 text-red-500" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                  REGISTRATION SUBMITTED SUCCESSFULLY
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                  Welcome to Apex Body House, {submittedData.fullName}!
                </h3>
                <p className="text-sm text-neutral-300 max-w-lg mx-auto">
                  Your registration for <span className="text-white font-semibold">{getPlanName(submittedData.planId)}</span> starting on <span className="text-white font-semibold">{submittedData.startDate}</span> has been logged.
                </p>
              </div>

              {/* Summary Box */}
              <div className="max-w-md mx-auto bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 text-left text-xs space-y-2 text-neutral-300">
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">Applicant:</span>
                  <span className="font-semibold text-white">{submittedData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">Contact Phone:</span>
                  <span className="font-semibold text-white font-mono">{submittedData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">Email:</span>
                  <span className="font-semibold text-white">{submittedData.email}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">Membership Tier:</span>
                  <span className="font-semibold text-red-400">{getPlanName(submittedData.planId)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Preferred Start Date:</span>
                  <span className="font-semibold text-white font-mono">{submittedData.startDate}</span>
                </div>
              </div>

              {/* Instant WhatsApp & Email Action Buttons */}
              <div className="max-w-md mx-auto pt-2 space-y-3">
                <p className="text-xs text-neutral-400 font-medium">
                  Connect instantly to expedite your enrollment and receive payment details:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </a>

                  <a
                    href={createEmailLink()}
                    className="flex-1 py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs uppercase tracking-wider border border-neutral-700 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="text-xs text-neutral-400 hover:text-white flex items-center justify-center gap-1.5 mx-auto transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit another registration</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Active Registration Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Nair"
                      className={`w-full pl-10 pr-4 py-3 bg-neutral-900 border rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                        errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-800 focus:border-neutral-600'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Phone Number (WhatsApp) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className={`w-full pl-10 pr-4 py-3 bg-neutral-900 border rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-800 focus:border-neutral-600'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Preferred Start Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className={`w-full pl-10 pr-4 py-3 bg-neutral-900 border rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-800 focus:border-neutral-600'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Preferred Start Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      value={formData.startDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-neutral-900 border rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                        errors.startDate ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-800 focus:border-neutral-600'
                      }`}
                    />
                  </div>
                  {errors.startDate && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.startDate}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Membership Plan Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Select Membership Plan <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.planId}
                    onChange={(e) => setFormData({ ...formData, planId: e.target.value })}
                    className="w-full pl-10 pr-10 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-neutral-600 transition-colors appearance-none cursor-pointer"
                  >
                    <optgroup label="General Training Plans (+ ₹999 One-Time Admission Fee)">
                      {MEMBERSHIP_PLANS.map((plan) => (
                        <option key={plan.id} value={plan.id}>
                          {plan.name} — ₹{plan.price.toLocaleString('en-IN')} ({plan.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Private Mentorship">
                      <option value="personal-training">
                        Personal Training with Sachu — ₹{PERSONAL_TRAINING_DETAILS.price.toLocaleString('en-IN')}/mo (1-on-1)
                      </option>
                    </optgroup>
                    <optgroup label="Consultation">
                      <option value="free-consultation">
                        Free Initial Consultation &amp; Body Assessment (₹0)
                      </option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Message / Fitness Goals */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Message / Fitness Goals <span className="text-neutral-500">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.fitnessGoals}
                  onChange={(e) => setFormData({ ...formData, fitnessGoals: e.target.value })}
                  placeholder="Tell us about your goals (e.g. fat loss, muscle hypertrophy, strength conditioning, rehab from past injury, etc.)"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-neutral-600 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 active:bg-red-700 shadow-xl shadow-red-950/60 hover:shadow-red-600/50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-center text-[11px] text-neutral-400">
                Admission fee is payable at the studio or via WhatsApp UPI verification. We never share your personal data.
              </p>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
