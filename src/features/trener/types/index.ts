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

export type TeamType = 'kata' | 'kumite';

export interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
}

export interface TeamRegistration {
  teamName: string;
  type: TeamType;
  ageCategory: AgeCategory;
  memberIds: string[];
}

export interface TeamRegistrationResponse {
  id: string;
  message: string;
}

export interface FullCompetitor {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  competitions: string[];
  nextMatch: {
    date: string;
    time: string;
    competitionName: string;
  } | null;
  lastResult: {
    competition: string;
    place: number;
    date: string;
  } | null;
}

export type DisciplineStatus = 'aktywna' | 'zakonczona' | 'oczekujaca';

export interface Discipline {
  id: string;
  name: string;
  participantCount: number;
  status: DisciplineStatus;
}

export interface DisciplineParticipant {
  id: string;
  position: number;
  firstName: string;
  lastName: string;
  club: string;
  age: number;
  weight: number;
}
