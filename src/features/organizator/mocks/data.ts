import type { TournamentStats, Competition } from '../types';

export const mockTournamentStats: TournamentStats = {
  competitors: 156,
  competitions: 24,
  mats: 6,
  referees: 18,
};

export const mockCompetitions: Competition[] = [
  { id: '1', name: 'Kata Indywidualne Dzieci M', type: 'kata', gender: 'M', ageMin: 8, ageMax: 11, participants: 12 },
  { id: '2', name: 'Kata Indywidualne Dzieci K', type: 'kata', gender: 'K', ageMin: 8, ageMax: 11, participants: 10 },
  { id: '3', name: 'Kata Indywidualne Junior M', type: 'kata', gender: 'M', ageMin: 14, ageMax: 17, participants: 15 },
  { id: '4', name: 'Kata Indywidualne Junior K', type: 'kata', gender: 'K', ageMin: 14, ageMax: 17, participants: 11 },
  { id: '5', name: 'Kata Indywidualne Senior M', type: 'kata', gender: 'M', ageMin: 18, ageMax: 35, participants: 18 },
  { id: '6', name: 'Kata Indywidualne Senior K', type: 'kata', gender: 'K', ageMin: 18, ageMax: 35, participants: 14 },
  { id: '7', name: 'Kumite Dzieci M -30kg', type: 'kumite', gender: 'M', ageMin: 8, ageMax: 11, weightMin: 20, weightMax: 30, participants: 8 },
  { id: '8', name: 'Kumite Dzieci M +30kg', type: 'kumite', gender: 'M', ageMin: 8, ageMax: 11, weightMin: 30, weightMax: 45, participants: 9 },
  { id: '9', name: 'Kumite Dzieci K -30kg', type: 'kumite', gender: 'K', ageMin: 8, ageMax: 11, weightMin: 20, weightMax: 30, participants: 7 },
  { id: '10', name: 'Kumite Junior M -60kg', type: 'kumite', gender: 'M', ageMin: 14, ageMax: 17, weightMin: 50, weightMax: 60, participants: 12 },
  { id: '11', name: 'Kumite Junior M +60kg', type: 'kumite', gender: 'M', ageMin: 14, ageMax: 17, weightMin: 60, weightMax: 80, participants: 10 },
  { id: '12', name: 'Kumite Junior K -55kg', type: 'kumite', gender: 'K', ageMin: 14, ageMax: 17, weightMin: 45, weightMax: 55, participants: 8 },
  { id: '13', name: 'Kumite Senior M -75kg', type: 'kumite', gender: 'M', ageMin: 18, ageMax: 35, weightMin: 65, weightMax: 75, participants: 14 },
  { id: '14', name: 'Kumite Senior M +75kg', type: 'kumite', gender: 'M', ageMin: 18, ageMax: 35, weightMin: 75, weightMax: 100, participants: 11 },
  { id: '15', name: 'Kumite Senior K -61kg', type: 'kumite', gender: 'K', ageMin: 18, ageMax: 35, weightMin: 50, weightMax: 61, participants: 9 },
];
