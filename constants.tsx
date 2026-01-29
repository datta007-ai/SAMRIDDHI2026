
import React from 'react';
import { Scheme, HealthCamp } from './types';

export const LANGUAGE_NAMES: Record<string, string> = {
  en: "English", hi: "हिंदी", te: "తెలుగు", ta: "தமிழ்", kn: "ಕನ್ನಡ", ml: "മലയാളം", 
  mr: "मराठी", gu: "ગુજરાતી", bn: "বাংলা", pa: "ਪੰਜਾਬੀ", or: "ଓਡ਼ିଆ", as: "অसमীया", 
  ur: "اردو", sa: "संस्कृत", kok: "कोंकणी", mni: "মণিপूरी", brx: "बर'", doi: "डोगरी", 
  ks: "کٲشُر", mai: "मैथिली", ne: "नेपाली", sat: "ᱥᱟᱱᱛᱟᱲᱤ", sd: "سنڌي", bho: "भोजपुरी", 
  raj: "राजस्थानी", tcy: "ತುಳು"
};

const baseEn = {
  // Header / Navigation
  app_title: "SAMRIDDHI", app_sub_title: "Unified Welfare Platform", gov_india: "Govt. of India",
  nav_home: "Home", nav_schemes: "All Schemes", nav_dashboard: "Dashboard", nav_health: "Health Services",
  nav_identity: "Digital Identity", nav_grievance: "Grievances",
  search_placeholder: "Search schemes, services...", 
  search_input_placeholder: "Search for schemes...",
  profile_name: "Anjali Verma",
  
  // Hero Section
  hero_badge: "Official Citizen Portal",
  hero_title: "National Digital Services",
  hero_desc: "A unified portal for every Indian citizen to discover, compare, and apply for welfare benefits in their own language.",
  hero_cta_browse: "Browse Schemes", hero_cta_aadhaar: "Apply with Aadhaar", hero_cta_elig: "Check Eligibility",
  
  // Trust Strip / Indicators
  trust_secure: "Secure Login", trust_aadhaar: "Aadhaar Linked", trust_digilocker: "DigiLocker Verified", trust_india: "Make In India",
  trust_beneficiaries: "2.5 Cr+ Beneficiaries", trust_schemes: "500+ Active Schemes", trust_languages: "26 Languages",
  trust_tracking: "Real-time Tracking", trust_safe: "100% Secure & Verified", trust_ministries: "All Ministries Covered",

  // Badge Modals
  badge_close: "Close", badge_settings: "View Settings", badge_update: "Update Details",
  badge_status: "Status", badge_verified: "Verified & Linked", badge_not_linked: "Not Linked",
  
  // Secure Login Modal
  m_sec_title: "Secure Access Information",
  m_sec_enc: "End-to-End Encryption", m_sec_enc_d: "Your data is protected with 256-bit SSL encryption.",
  m_sec_mfa: "Multi-Factor Authentication", m_sec_mfa_d: "Biometric and OTP-based verification enabled.",
  m_sec_sess: "Session Management", m_sec_sess_d: "Automatic timeout for your protection.",
  m_sec_last: "Last Login", m_sec_ip: "IP Address", m_sec_dev: "Device",

  // Aadhaar Modal
  m_aad_title: "Aadhaar Identity Details",
  m_aad_num: "Aadhaar Number", m_aad_name: "Name", m_aad_dob: "DOB",
  m_aad_ben: "Benefits",
  m_aad_b1: "Direct Benefit Transfer (DBT)", m_aad_b2: "Auto-fill Application Forms", m_aad_b3: "Paperless Verification",

  // DigiLocker Modal
  m_dig_title: "DigiLocker Integration",
  m_dig_count: "Linked Documents", m_dig_sync: "Last Sync",
  m_dig_btn: "Open DigiLocker", m_dig_add: "Upload New",

  // Make in India Modal
  m_ind_title: "Digital India Initiative",
  m_ind_built: "Built in India", m_ind_built_d: "Engineered by Indian experts for the people of Bharat.",
  m_ind_data: "Local Data Residency", m_ind_data_d: "100% of citizen data is stored in Tier-IV Indian Data Centers.",
  m_ind_law: "Compliance", m_ind_law_d: "Fully compliant with IT Act 2000 and DPDP Act 2023.",

  // Sections
  sec_popular: "Popular Schemes",
  sec_features: "Core Features",
  hiw_title: "How it Works",
  sec_real_impact: "Real-World Impact",
  impact_title: "National Statistics & Impact",

  // Healthcare & Emergency (Critical Fixes)
  emergency_title: "Emergency Services",
  h_emerg_banner: "Quick access to emergency helplines and medical services",
  emergency_call: "Emergency Call",
  emergency_icu: "Emergency ICU",
  h_title: "National Health Services",
  h_desc: "A unified portal for healthcare schemes, nearby facility discovery, and emergency medical support.",
  sec_h_facilities: "Healthcare Facilities",
  fac_desc_verified: "Find verified government and private hospitals nearby.",
  scan_nearby: "Scan Nearby",
  fac_view_maps: "View on Google Maps",
  fac_get_dir: "Get Directions",
  fac_reveal_msg: "Click 'Scan Nearby' to find verified hospitals using your current location.",
  sec_h_camps: "Health Camps & Drives",
  camps_desc_visual: "View upcoming medical camps, vaccination drives, and eye checkup clinics in your region.",
  active_now: "Active Now",
  citizens_helped: "Citizens Helped",
  city_region: "NCR / Delhi Region",
  drive_confirmed: "Drive Confirmed",
  camp_detail_date: "Drive Date",
  camp_detail_time: "Drive Time",
  camp_detail_services: "Included Services",
  secure_slot: "Secure Your Slot",
  doc_not_required: "Prior documentation not mandatory for basic checkups.",
  camps_select_point: "Select a Camp Point",
  camps_interact_msg: "Interactive map shows real-time drives. Click a pin to view details and register.",

  // Dashboard
  dashboard_title: "Platform Dashboard",
  dashboard_welcome: "Real-time insights and usage statistics across the nation.",
  chart_util: "Service Utilization",
  chart_demo: "Language Demographics",
  chart_demo_label: "Active Users by Language",
  stat_visitors: "Daily Visitors",
  stat_active: "Active Sessions",
  stat_reach: "State Reach",
  lang_hindi: "Hindi", lang_english: "English", lang_tamil: "Tamil", lang_telugu: "Telugu", lang_others: "Others",

  // Grievances
  grievance_title: "Grievance Redressal",
  grievance_desc: "Submit your concerns directly to the relevant ministry. We ensure timely resolution and tracking.",
  btn_grievance: "Lodge New Grievance",
  qa_track: "Track Grievance Status",
  track_input: "Registration Number",
  step_1: "Submission Received",
  step_2: "Under Investigation",
  step_3: "Resolution Provided",

  // Eligibility
  elig_title: "Eligibility Checker",
  elig_desc: "Answer a few simple questions to find schemes specifically tailored for your profile.",
  age_group: "Age Group",
  tag_students: "Students", tag_women: "Women", tag_farmers: "Farmers", tag_seniors: "Seniors",
  btn_search: "Check Now",

  // Identity
  identity_title: "Digital Identity Wallet",
  identity_desc: "Manage your government-issued documents securely. Verified documents facilitate instant scheme approval.",
  digilocker_sync: "Last synced with DigiLocker 2 hours ago.",
  connect_now: "Connect Wallet",

  // Common UI
  cat_agri: "Agriculture & Farmers", cat_edu: "Education & Scholarships", cat_health: "Health & Insurance", 
  cat_emp: "Employment & Skills", cat_housing: "Housing & Infrastructure", cat_welfare: "Social Security & Pension", 
  cat_all: "All Categories", btn_apply: "Apply Now", btn_know_more: "Know More", btn_view_all: "View All", btn_begin_app: "Begin Application",
  stat_apps: "Applications Processed Today", stat_benefits: "Total Benefits Distributed", stat_time: "Avg. Processing Time", stat_sat: "User Satisfaction",
  faq_title: "Frequently Asked Questions", 
  faq_1_q: "How do I apply for a scheme?", faq_1_a: "Log in with Aadhaar, browse the scheme, and click 'Apply Now' to start the process.",
  faq_2_q: "What documents are needed?", faq_2_a: "Aadhaar is primary. Other documents like Income or Land records can be fetched via DigiLocker.",
  footer_copy: "A Digital India Initiative. © 2025 NIC.",
  metric_beneficiaries: "Beneficiaries", metric_states: "States Covered", metric_approval: "Avg. Approval Time",
  official_details: "Official Details", core_benefit: "Core Benefit", application_journey: "Application Journey",

  // Bot
  bot_title: "Samriddhi Sahayak", bot_placeholder: "Ask me anything...", bot_live_active: "Live Voice Active", bot_mode_voice: "Listening..."
};

const baseHi = {
  ...baseEn,
  app_title: "समृद्धि", app_sub_title: "एकीकृत कल्याण मंच", gov_india: "भारत सरकार",
  nav_home: "होम", nav_schemes: "सभी योजनाएं", nav_dashboard: "डैशबोर्ड", nav_health: "स्वास्थ्य सेवाएं",
  nav_identity: "डिजिटल पहचान", nav_grievance: "शिकायतें",
  hero_title: "राष्ट्रीय डिजिटल सेवाएं", hero_desc: "हर भारतीय नागरिक के लिए अपनी भाषा में कल्याणकारी लाभों को खोजने, तुलना करने और आवेदन करने के लिए एक एकीकृत पोर्टल।",
  trust_secure: "सुरक्षित लॉगिन", trust_aadhaar: "आधार लिंक्ड", trust_digilocker: "डिजीलॉकर सत्यापित",
  m_sec_title: "सुरक्षित पहुंच जानकारी", m_aad_title: "आधार पहचान विवरण", m_dig_title: "डिजीलॉकर एकीकरण", m_ind_title: "डिजिटल इंडिया पहल",
  emergency_title: "आपातकालीन सेवाएं", h_emerg_banner: "आपातकालीन हेल्पलाइन और चिकित्सा सेवाओं तक त्वरित पहुंच",
  emergency_call: "आपातकालीन कॉल", h_title: "राष्ट्रीय स्वास्थ्य सेवाएं",
  badge_close: "बंद करें", badge_status: "स्थिति", badge_verified: "सत्यापित और लिंक",
  sec_popular: "लोकप्रिय योजनाएं", sec_features: "प्रमुख विशेषताएं",
  cat_agri: "कृषि और किसान", cat_edu: "शिक्षा और छात्रवृत्ति", cat_health: "स्वास्थ्य और बीमा",
  btn_apply: "अभी आवेदन करें", btn_know_more: "अधिक जानें", faq_title: "अक्सर पूछे जाने वाले प्रश्न",
  sec_real_impact: "वास्तविक प्रभाव", metric_beneficiaries: "कुल लाभार्थी", metric_states: "कवर किए गए राज्य", metric_approval: "औसत अनुमोदन समय"
};

const baseTe = {
  ...baseEn,
  app_title: "సమృద్ధి", app_sub_title: "ఏకీకృత సంక్షేమ వేదిక", gov_india: "భారత ప్రభుత్వం",
  nav_home: "హోమ్", nav_schemes: "అన్ని పథకాలు", nav_health: "ఆరోగ్య సేవలు",
  hero_title: "జాతీయ డిజిటల్ సేవలు", hero_desc: "ప్రతి భారతీయ పౌరుడు సంక్షేమ ప్రయోజనాలను తమ స్వంత భాషలో కనుగొనడానికి, పోల్చడానికి మరియు దరఖాస్తు చేసుకోవడానికి ఒక ఏకీకృత పోర్టల్.",
  trust_secure: "సురక్షిత లాగిన్", trust_aadhaar: "ఆధార్ లింక్ చేయబడింది", trust_digilocker: "డిజిలాకర్ ధృవీకరించబడింది",
  m_sec_title: "సురక్షిత యాక్సెస్ సమాచారం", m_aad_title: "ఆధార్ గుర్తింపు వివరాలు", m_dig_title: "డిజిలాకర్ ఇంటిగ్రేషన్", m_ind_title: "డిజిటల్ ఇండియా చొరవ",
  emergency_title: "అత్యవసర సేవలు", h_title: "జాతీయ ఆరోగ్య సేవలు", emergency_call: "ఎమర్జెన్సీ కాల్",
  sec_real_impact: "వాస్తవిక ప్రభావం", metric_beneficiaries: "మొత్తం లబ్ధిదారులు", metric_states: "కవర్ చేయబడిన రాష్ట్రాలు", metric_approval: "సగటు ఆమోదం సమయం"
};

export const DICTIONARY: Record<string, any> = { 
  en: baseEn, hi: baseHi, te: baseTe,
  ta: { ...baseEn, app_title: "சம்ரிதி", nav_home: "முகப்பு" },
  kn: { ...baseEn, app_title: "ಸಮೃದ್ಧಿ", nav_home: "ಮುಖಪುಟ" },
  ml: { ...baseEn, app_title: "സമൃദ്ധി", nav_home: "ഹോം" },
  mr: { ...baseEn, app_title: "समृद्धी", nav_home: "मुख्य पान" },
  gu: { ...baseEn, app_title: "સમૃદ્ધિ", nav_home: "હોમ" },
  bn: { ...baseEn, app_title: "সমৃদ্ধি", nav_home: "হোম" },
  pa: { ...baseEn, app_title: "ਸਮ੍ਰਿਧੀ", nav_home: "ਹੋਮ" },
  or: { ...baseEn, app_title: "ସମୃଦ୍ଧି", nav_home: "ହୋମ୍" },
  as: { ...baseEn, app_title: "সমৃদ্ধি", nav_home: "গৃহ" },
  ur: { ...baseEn, app_title: "سمردھی", nav_home: "ہوم", gov_india: "حکومت ہند", emergency_title: "ہنگامی خدمات", h_title: "قومی صحت کی خدمات" },
  sa: { ...baseEn, app_title: "समृद्धिः", nav_home: "गृहम्" },
  kok: { ...baseEn, nav_home: "घर" },
  mni: { ...baseEn, nav_home: "য়ুম" },
  brx: { ...baseEn, nav_home: "न'खर" },
  doi: { ...baseEn, nav_home: "घर" },
  ks: { ...baseEn, nav_home: "گھر" },
  mai: { ...baseEn, nav_home: "घर" },
  ne: { ...baseEn, nav_home: "घर" },
  sat: { ...baseEn, nav_home: "ओड़ाक" },
  sd: { ...baseEn, nav_home: "گھر" },
  bho: { ...baseEn, nav_home: "घर" },
  raj: { ...baseEn, nav_home: "घर" },
  tcy: { ...baseEn, nav_home: "ಇಲ್ಲ" }
};

export const SCHEMES: Scheme[] = [
  { id: "S1", titleKey: "S1_title", cat: "cat_agri", descKey: "S1_desc", impactLabel: "S1_impact", ministryKey: "ministry_agri", beneficiaries: "11.8 Cr+", approvalTime: "7 Days", statesCovered: "All India", eligibilityKeys: ["elig_resident", "elig_small_farmer"], documentsKeys: ["doc_aadhaar", "doc_bank", "doc_land"], steps: [{ labelKey: "apply_step_1" }, { labelKey: "apply_step_2" }, { labelKey: "apply_step_3" }] },
  { id: "S6", titleKey: "S6_title", cat: "cat_health", descKey: "S6_desc", impactLabel: "S6_impact", ministryKey: "ministry_health", beneficiaries: "55 Cr+", approvalTime: "10 Days", statesCovered: "All India", eligibilityKeys: ["elig_resident", "elig_income_low"], documentsKeys: ["doc_aadhaar", "doc_income"], steps: [{ labelKey: "apply_step_1" }, { labelKey: "apply_step_2" }, { labelKey: "apply_step_4" }] },
  { id: "S15", titleKey: "S15_title", cat: "cat_housing", descKey: "S15_desc", impactLabel: "S15_impact", ministryKey: "ministry_housing", beneficiaries: "3.2 Cr+", approvalTime: "45 Days", statesCovered: "All India", eligibilityKeys: ["elig_resident", "elig_income_low"], documentsKeys: ["doc_aadhaar", "doc_income"], steps: [{ labelKey: "apply_step_1" }, { labelKey: "apply_step_2" }, { labelKey: "apply_step_3" }] },
  { id: "S24", titleKey: "S24_title", cat: "cat_emp", descKey: "S24_desc", impactLabel: "S24_impact", ministryKey: "ministry_agri", beneficiaries: "15 Cr+", approvalTime: "15 Days", statesCovered: "Rural Only", eligibilityKeys: ["elig_resident"], documentsKeys: ["doc_aadhaar"], steps: [{ labelKey: "apply_step_1" }] },
  { id: "S19", titleKey: "S19_title", cat: "cat_women", descKey: "S19_desc", impactLabel: "S19_impact", ministryKey: "ministry_finance", beneficiaries: "9 Cr+", approvalTime: "5 Days", statesCovered: "All India", eligibilityKeys: ["elig_resident", "elig_income_low"], documentsKeys: ["doc_aadhaar"], steps: [{ labelKey: "apply_step_1" }] },
  { id: "S20", titleKey: "S20_title", cat: "cat_edu", descKey: "S20_desc", impactLabel: "S20_impact", ministryKey: "ministry_edu", beneficiaries: "1 Cr+", approvalTime: "15 Days", statesCovered: "All India", eligibilityKeys: ["elig_resident"], documentsKeys: ["doc_aadhaar"], steps: [{ labelKey: "apply_step_1" }] },
];

export const HEALTH_CAMPS: HealthCamp[] = [
  { id: "C1", tk: "Free Eye Checkup Camp", lk: "Community Hall, Ward 4", date: "24 May 2024", time: "09:00 AM - 05:00 PM", services: ["Vision Test", "Cataract Screening", "Free Glasses"], coords: { x: 25, y: 35 }, status: 'Open' },
  { id: "C2", tk: "Maternal Health Drive", lk: "Primary Health Center", date: "26 May 2024", time: "10:00 AM - 02:00 PM", services: ["ANC Checkup", "Iron-Folic Acid", "Nutrition Counseling"], coords: { x: 70, y: 20 }, status: 'Open' },
];
