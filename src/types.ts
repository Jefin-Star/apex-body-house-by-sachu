export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  periodLabel: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isBestValue?: boolean;
  badge?: string;
}

export interface FitnessProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focus: string[];
  isNew?: boolean;
}

export interface RegistrationFormData {
  fullName: string;
  phone: string;
  email: string;
  planId: string;
  startDate: string;
  fitnessGoals: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  preferredTime: string;
  primaryGoal: string;
}

export interface TransformationStory {
  id: string;
  image: string;
  title: string;
  category: string;
  beforeStat: string;
  afterStat: string;
  delta: string;
  deltaType: 'loss' | 'gain' | 'award';
  quote: string;
  duration: string;
  coach: string;
  keyHighlights: string[];
}
