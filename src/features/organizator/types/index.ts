export interface TournamentStats {
  competitors: number;
  competitions: number;
  mats: number;
  referees: number;
}

export interface TournamentConfig {
  name: string;
  date: string;
  location: string;
  mats: number;
  warmUpStations: number;
  restStations: number;
  referees: number;
  maxCompetitorsPerCoach: number;
}

export interface TournamentConfigResponse {
  success: boolean;
  message: string;
}

export type CompetitionType = 'kata' | 'kumite';
export type CompetitionGender = 'M' | 'K' | 'mixed';

export interface Competition {
  id: string;
  name: string;
  type: CompetitionType;
  gender: CompetitionGender;
  ageMin: number;
  ageMax: number;
  weightMin?: number;
  weightMax?: number;
  participants: number;
}

export interface CompetitionCreate {
  name: string;
  type: CompetitionType;
  gender: CompetitionGender;
  ageMin: number;
  ageMax: number;
  weightMin?: number;
  weightMax?: number;
}

export interface CompetitionResponse {
  success: boolean;
  message: string;
  competition?: Competition;
}

export interface Equipment {
  id: string;
  name: string;
  quantity: number;
  status: 'dostepny' | 'w_uzyciu' | 'uszkodzony';
}

export interface Award {
  id: string;
  name: string;
  competition: string;
  quantity: number;
}

export interface MatScheduleRow {
  id: string;
  time: string;
  mat1: string;
  mat2: string;
  mat3: string;
  mat4: string;
  mat5: string;
  mat6: string;
  referees: string;
}

export interface BracketNode {
  id: string;
  round: string;
  match: number;
  competitor1: string | null;
  competitor2: string | null;
  winner: string | null;
}

export interface CompetitionBracket {
  competitionId: string;
  competitionName: string;
  nodes: BracketNode[];
}
