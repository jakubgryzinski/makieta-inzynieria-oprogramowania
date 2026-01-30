export interface CoachCompetitor {
  id: string;
  firstName: string;
  lastName: string;
  competitions: string[];
  nextMatch: {
    date: string;
    time: string;
    competitionName: string;
  } | null;
}

export type Gender = 'M' | 'K';
export type AgeCategory = 'dzieci' | 'mlodzik' | 'junior' | 'senior';
export type WeightCategory = 'lekka' | 'srednia' | 'ciezka';

export interface CompetitorRegistration {
  firstName: string;
  lastName: string;
  age: number;
  weight: number;
  gender: Gender;
  medicalExam: boolean;
  kata: boolean;
  kumite: boolean;
  ageCategory: AgeCategory;
  weightCategory?: WeightCategory;
}

export interface CompetitorRegistrationResponse {
  id: string;
  message: string;
}
