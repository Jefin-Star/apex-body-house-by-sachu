import { MembershipPlan, FitnessProgram, TransformationStory } from '../types';
import heroImageSrc from '../assets/images/hero_gym_dark_lighting_1792689706717.jpg';
import strengthFacilityImageSrc from '../assets/images/facility_heavy_strength_1792689707050.jpg';
import functionalTurfImageSrc from '../assets/images/facility_functional_turf_1792689707478.jpg';

export const GYM_INFO = {
  name: "APEX BODY HOUSE BY SACHU",
  shortName: "ABHSAC",
  tagline: "BUILT BY DISCIPLINE. DEFINED BY STRENGTH.",
  admissionFee: 999,
  whatsappNumber: "7907673544",
  formattedPhone: "+91 79076 73544",
  email: "Sachuthefitnesscoach@gmail.com",
  instagramUrl: "https://www.instagram.com/abhsac_fitness/",
  instagramHandle: "@abhsac_fitness",
  address: "ABHSAC [APEX BODY HOUSE BY SACHU] FITNESS STUDIO, Kerala, India",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.911246614751!2d76.7918772!3d9.0063175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b060b34a3d9ed23%3A0x3495067466c97a5a!2sABHSAC%20%5BAPEX%20BODY%20HOUSE%20BY%20SACHU%5D%20FITNESS%20STUDIO!5e1!3m2!1sen!2sin!4v1792687284670!5m2!1sen!2sin",
  logoPath: "/assets/aistudio/ABHSAC_RED_15a21618.png",
  coachPhotoPath: "/assets/aistudio/IMG_8623.JPG_f9da8400.jpeg",
  heroImage: heroImageSrc,
  strengthFacilityImage: strengthFacilityImageSrc,
  functionalTurfImage: functionalTurfImageSrc,
  heroImagePath: "/src/assets/images/hero_gym_dark_lighting_1792689706717.jpg",
  strengthFacilityImagePath: "/src/assets/images/facility_heavy_strength_1792689707050.jpg",
  functionalTurfImagePath: "/src/assets/images/facility_functional_turf_1792689707478.jpg",
  timings: {
    weekdays: "5:30 AM – 10:00 AM & 4:30 PM – 10:00 PM",
    morningSlot: "5:30 AM – 10:00 AM",
    eveningSlot: "4:30 PM – 10:00 PM",
    days: "Monday to Saturday",
    sunday: "Closed",
  }
};

export const HIGHLIGHTS = [
  { id: '1', title: 'EXPERT COACHING', desc: 'Direct guidance from certified master trainers' },
  { id: '2', title: 'MODERN EQUIPMENT', desc: 'Heavy-duty biomechanically engineered machinery' },
  { id: '3', title: 'NUTRITION GUIDANCE', desc: 'Tailored calorie & macronutrient fuel plans' },
  { id: '4', title: 'PROGRESS TRACKING', desc: 'Periodic biometric measurements & load analysis' },
  { id: '5', title: 'FRIENDLY ENVIRONMENT', desc: 'Motivating, inclusive & respectful community' },
];

export const WHY_CHOOSE_ITEMS = [
  { title: "CERTIFIED FITNESS COACH", desc: "Coached by nationally & internationally certified specialists." },
  { title: "PERSONALIZED WORKOUT PROGRAMS", desc: "Scientific exercise selection engineered for your anatomy." },
  { title: "FAT LOSS PROGRAMS", desc: "High-intensity metabolic conditioning & deficit frameworks." },
  { title: "MUSCLE BUILDING & BULKING", desc: "Hypertrophy protocols focused on progressive overload." },
  { title: "STRENGTH & FUNCTIONAL TRAINING", desc: "Compounds and kinetic chain drills for daily athleticism." },
  { title: "WEIGHT MANAGEMENT", desc: "Sustainable metabolic strategies that preserve lean mass." },
  { title: "NUTRITION GUIDANCE", desc: "Personalized macronutrient splits with real dietary flexibility." },
  { title: "FRIENDLY & MOTIVATING ENVIRONMENT", desc: "A brotherhood & sisterhood of discipline where everyone thrives." },
];

export const PROGRAMS: FitnessProgram[] = [
  {
    id: 'general',
    title: 'PREMIUM GENERAL TRAINING',
    subtitle: 'High-Standard Gym Access & Guidance',
    description: 'Comprehensive access to top-tier free weights, selectorized cables, functional zones, and initial baseline lifting guidance from floor trainers.',
    focus: ['Full Gym Access', 'Floor Coaching Support', 'Locker & Amenities', 'Cardio & Strength Zones'],
    isNew: true,
  },
  {
    id: 'muscle',
    title: 'MUSCLE BUILDING',
    subtitle: 'Hypertrophy & Structured Bulking',
    description: 'Targeted stimulus protocols designed to maximize muscular hypertrophy through optimal training volume, frequency, and progressive tension.',
    focus: ['Hypertrophy Splits', 'Compound Mastery', 'Mass Fueling Protocols', 'Muscle Fatigue Management'],
  },
  {
    id: 'fatloss',
    title: 'FAT LOSS',
    subtitle: 'Metabolic Conditioning & Definition',
    description: 'Caloric-burn circuits integrated with lean-mass retention lifting, helping you shred stubborn body fat while staying strong and energized.',
    focus: ['Metabolic Resistance', 'EPOC Fat Burn', 'Caloric Management', 'Stamina Elevation'],
  },
  {
    id: 'strength',
    title: 'STRENGTH TRAINING',
    subtitle: 'Power, Squat, Bench & Deadlift',
    description: 'Heavy barbell fundamentals and neuromuscular recruitment. Build bone density, core stiffness, and raw mechanical lifting power.',
    focus: ['Barbell Fundamentals', 'Central Nervous Recruitment', 'Periodized Load Jumps', 'Injury Prevention'],
  },
  {
    id: 'nutrition',
    title: 'NUTRITION COACHING',
    subtitle: 'Diploma-Backed Dietary Science',
    description: 'Evidence-based nutrition strategies tailored to your lifestyle. No crash diets—just clean, sustainable macro distribution.',
    focus: ['Calorie Auditing', 'Macro Ratio Balancing', 'Hydration Strategies', 'Supplements Guidance'],
  },
  {
    id: 'personal',
    title: 'PERSONAL TRAINING',
    subtitle: 'One-on-One Custom Coaching',
    description: 'Dedicated one-to-one coaching with Sachu. Every rep, tempo, set, and meal is curated and monitored for accelerated results.',
    focus: ['Dedicated 1-on-1 Sessions', 'Custom Workout Design', 'Weekly Body Composition', 'Form Correction'],
  },
  {
    id: 'women',
    title: "WOMEN'S FITNESS",
    subtitle: 'Empowering Toning & Athleticism',
    description: 'Targeted glute development, core stability, functional posture work, and safe strength training tailored for women of all fitness levels.',
    focus: ['Glute & Posterior Chain', 'Core & Postural Alignment', 'Bone Density Fortification', 'Supportive Atmosphere'],
  },
  {
    id: 'functional',
    title: 'FUNCTIONAL TRAINING',
    subtitle: 'Agility, Sleds & Kettlebells',
    description: 'Movement-based conditioning combining turf sprints, kettlebells, plyometrics, and battle ropes for real-world stamina and joint mobility.',
    focus: ['Athletic Turf Drills', 'Rotational Strength', 'Joint Mobility & Prehab', 'Dynamic Conditioning'],
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: '1-month',
    name: '1 Month',
    duration: '30 Days',
    price: 1499,
    periodLabel: 'per month',
    description: 'Premium general training with full floor equipment access and community support.',
    features: [
      'Full Gym Floor Access',
      'Modern Cardio & Strength Equipment',
      'Free Fitness & Form Assessment',
      'Locker & Shower Facility',
      'Morning & Evening Slot Flexibility'
    ],
    badge: 'Popular Starter',
  },
  {
    id: '3-months',
    name: '3 Months',
    duration: '90 Days',
    price: 3999,
    originalPrice: 4497,
    periodLabel: 'quarterly plan',
    description: 'The ideal duration to establish deep workout habits and witness noticeable body recomposition.',
    features: [
      'Save ₹498 compared to monthly',
      'Full Gym Floor & Functional Turf Access',
      'Personalized Workout Split Sheet',
      'Initial Nutrition & Macro Consultation',
      'Monthly Progress & Weigh-in Reviews'
    ],
    isPopular: true,
    badge: 'Most Popular',
  },
  {
    id: '6-months',
    name: '6 Months',
    duration: '180 Days',
    price: 7499,
    originalPrice: 8994,
    periodLabel: 'half-year commitment',
    description: 'For committed athletes ready for an unmistakable physical transformation.',
    features: [
      'Save ₹1,495 on training fees',
      'Full Access to All Gym Facilities',
      'Advanced Periodized Training Plan',
      'Nutrition & Supplement Guidance',
      'Bi-Weekly Body Composition Tracking',
      'Trainer Priority Assistance'
    ],
    badge: 'Dedicated Athlete',
  },
  {
    id: '1-year',
    name: '1 Year',
    duration: '365 Days',
    price: 13999,
    originalPrice: 17988,
    periodLabel: 'full year membership',
    description: 'Our ultimate transformation commitment with maximum annual savings and VIP priority.',
    features: [
      'Save ₹3,989 (Best Value Tier)',
      'Unrestricted 365-Day Gym Access',
      'Complimentary Fitness Starter Pack',
      'Quarterly Nutrition Restructuring',
      'Complete Transformation Roadmapping',
      'Freeze Membership Privilege (up to 30 days)'
    ],
    isBestValue: true,
    badge: 'Best Value',
  },
];

export const PERSONAL_TRAINING_DETAILS = {
  price: 5999,
  periodLabel: "monthly private package",
  coachName: "Sachu",
  features: [
    "ONE-TO-ONE COACHING",
    "CUSTOMIZED WORKOUT PLAN",
    "DIET & NUTRITION GUIDANCE",
    "PROGRESS TRACKING",
    "GOAL-ORIENTED TRAINING"
  ],
  trainerBio: {
    handle: "Sachuthefitnesscoach",
    credentials: [
      "Ace certified personal trainer",
      "NSQF LEVEL 5 and LEVEL 6",
      "Diploma in nutrition",
      "Strength And Conditioning coach",
      "Master Personal Trainer",
      "Rehab and prehab specialist"
    ],
    exactSection6Qualifications: [
      "Masters in Personal Training & Hypertrophy coach",
      "ACE CPT L4",
      "NSQF Personal Trainer L5 & L6",
      "Diploma in Nutrition"
    ]
  }
};

export const TRANSFORMATIONS: TransformationStory[] = [
  {
    id: 'transformation-1',
    image: '/assets/aistudio/1a4a39d6-67b5-4add-8362-ce18a010f177_34398084.jpg',
    title: 'Fat Loss & Athletic Recomposition',
    category: 'Fat Loss & Conditioning',
    beforeStat: '91.0 KG',
    afterStat: '86.0 KG',
    delta: '-5.0 KG Body Fat',
    deltaType: 'loss',
    quote: 'The personalized deficit plan and progressive compound workouts helped me shed stubborn belly fat while gaining stamina and core stability.',
    duration: '12 Weeks',
    coach: 'Coach Sachu',
    keyHighlights: ['-5 KG Pure Fat Loss', 'Visibly Leaner Waist', 'Enhanced Cardiovascular Stamina', 'Blood Markers Optimized']
  },
  {
    id: 'transformation-2',
    image: '/assets/aistudio/aca2931b-165d-4478-9c68-c9e5bab6f185_cdd1e26e.jpg',
    title: 'Fat Loss & Athletic Conditioning',
    category: 'Fat Loss & Conditioning',
    beforeStat: '77.90 KG',
    afterStat: '70.60 KG',
    delta: '-7.30 KG Body Fat',
    deltaType: 'loss',
    quote: 'Coach Sachu dialed in my workout splits, high-intensity functional training, and deficit nutrition. I dropped 7.3 kg of fat, trimmed my waistline, and leveled up my fitness.',
    duration: '16 Weeks',
    coach: 'Coach Sachu',
    keyHighlights: ['-7.3 KG Pure Fat Loss', 'Dramatic Waistline & Face Slimming', 'Functional Agility & Stamina', 'Personalized Calorie Deficit']
  },
  {
    id: 'transformation-3',
    image: '/assets/aistudio/a6e73e59-0e24-47a3-901c-149d1adb0e9d_f3d50b1b.jpg',
    title: 'Total Body Toning & Achievement Award',
    category: "Women's Fitness & Lifestyle Recomp",
    beforeStat: 'Inconsistent Routine',
    afterStat: 'Apex Award Winner',
    delta: 'Studio Transformation Award',
    deltaType: 'award',
    quote: 'The friendly, disciplined environment at ABHSAC motivated me every single day. I transformed my posture, built confidence, and was honored with the Transformation Award!',
    duration: '20 Weeks',
    coach: 'Coach Sachu',
    keyHighlights: ['Apex Transformation Trophy Winner', 'Postural Alignment & Core Strength', 'Sustainable Healthy Habits', 'Empowering Fitness Routine']
  }
];
