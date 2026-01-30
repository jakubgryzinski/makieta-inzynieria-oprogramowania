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
