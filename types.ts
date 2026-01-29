
export type Language = 
  | 'en' | 'hi' | 'te' | 'ta' | 'kn' | 'ml' | 'mr' | 'gu' 
  | 'bn' | 'pa' | 'or' | 'as' | 'ur' | 'sa' | 'kok' | 'mni' 
  | 'brx' | 'doi' | 'ks' | 'mai' | 'ne' | 'sat' | 'sd' 
  | 'bho' | 'raj' | 'tcy';

export interface SchemeStep {
  labelKey: string;
}

export interface SchemeFAQ {
  qKey: string;
  aKey: string;
}

export interface Scheme {
  id: string;
  titleKey: string;
  cat: string;
  descKey: string;
  ministryKey: string;
  beneficiaries: string;
  approvalTime: string;
  statesCovered: string;
  impactLabel?: string;
  benefitAmount?: string;
  website?: string;
  helpline?: string;
  eligibilityKeys: string[];
  documentsKeys: string[];
  steps: SchemeStep[];
  faqs?: SchemeFAQ[];
}

export interface UserBadgeState {
  secure: {
    isLoggedIn: boolean;
    lastLogin: string;
    ip: string;
    device: string;
  };
  aadhaar: {
    isLinked: boolean;
    number: string;
    name: string;
    dob: string;
  };
  digilocker: {
    isConnected: boolean;
    docCount: number;
    docs: string[];
    lastSync: string;
  };
  compliance: {
    isCertified: boolean;
    residency: string;
    team: string;
  };
}

export interface ChatMessage {
  text: string;
  sender: 'bot' | 'user';
  timestamp: number;
}

export interface HealthFacility {
  n: string;
  tk: string;
  d: string;
  r: string;
}

export interface HealthCamp {
  id: string;
  tk: string;
  lk: string;
  date: string;
  time: string;
  services: string[];
  coords: { x: number; y: number }; // Percentage based for mockup map
  status: 'Open' | 'Reg Closed';
}
