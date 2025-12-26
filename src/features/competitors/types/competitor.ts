export interface Competitor {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  weight: number;
  gender: 'M' | 'K';
  club: string;
}

export interface Match {
  id: string;
  competitionName: string;
  date: string;
  time: string;
  matNumber: number;
  round: string;
  opponentId: string;
  opponentName: string;
  status: 'Zaplanowany' | 'WTrakcie' | 'Zakończony';
  result?: 'Wygrana' | 'Przegrana' | 'Remis';
}

export interface RankingPosition {
  position: number;
  change: number;
  points: number;
  updateDate: string;
}

export interface RankingEntry {
  position: number;
  competitorId: string;
  competitorName: string;
  club: string;
  points: number;
}

export interface BracketParticipant {
  id: string;
  name: string;
  club: string;
  seed?: number;
}

export interface BracketMatch {
  id: string;
  round: number;
  matchNumber: number;
  participant1?: BracketParticipant;
  participant2?: BracketParticipant;
  winner?: string;
  score1?: number;
  score2?: number;
}

export interface Competition {
  id: string;
  name: string;
  type: 'kata' | 'kumite';
  category: string;
}
