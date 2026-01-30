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
