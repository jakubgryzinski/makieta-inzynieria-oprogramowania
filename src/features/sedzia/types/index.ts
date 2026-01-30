export type MatchStatus = 'oczekujacy' | 'w_trakcie' | 'zakonczony';

export interface Match {
  id: string;
  time: string;
  mat: number;
  competition: string;
  competitor1: string;
  competitor2: string;
  status: MatchStatus;
}

export type CompetitionType = 'kumite' | 'kata';

export interface KumiteCompetition {
  id: string;
  name: string;
  competitor1: string;
  competitor2: string;
}

export interface KumiteResult {
  competitionId: string;
  competitor1Points: number;
  competitor2Points: number;
  winnerId: 'competitor1' | 'competitor2';
}

export interface KumiteResultResponse {
  success: boolean;
  message: string;
}
