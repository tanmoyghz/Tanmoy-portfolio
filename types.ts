export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  thesis: string;
  supervisor: string;
}

export interface Project {
  title: string;
  period: string;
  focus: string;
  application: string;
  tools: string;
  supervisor: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  status: string;
  link?: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  details?: string[];
}

export interface TestScoreBreakdown {
  skill: string;
  score: string;
}

export interface TestScores {
  exam: string;
  date: string;
  overall: string;
  breakdown: TestScoreBreakdown[];
}

export interface PersonalDetails {
  passport: string;
  dob: string;
  birthPlace: string;
  nationality: string;
  gender: string;
  phone: string;
  address: string;
}

export interface PersonalInfo {
  name: string;
  subtitle: string;
  bio: string;
  email: string;
  linkedin: string;
  orcid: string;
  researchgate: string;
  cvLink: string;
}