import type { TournamentStats, Competition, Equipment, Award } from '../types';

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

export const mockEquipment: Equipment[] = [
  { id: '1', name: 'Mata do karate', quantity: 12, status: 'dostepny' },
  { id: '2', name: 'Rękawice kumite', quantity: 50, status: 'w_uzyciu' },
  { id: '3', name: 'Ochraniacze na goleń', quantity: 40, status: 'dostepny' },
  { id: '4', name: 'Ochraniacze na klatkę', quantity: 30, status: 'dostepny' },
  { id: '5', name: 'Stoper elektroniczny', quantity: 8, status: 'w_uzyciu' },
  { id: '6', name: 'Tablica wyników', quantity: 2, status: 'uszkodzony' },
];

export const mockAwards: Award[] = [
  { id: '1', name: 'Złoty medal', competition: 'Kata Indywidualne Senior M', quantity: 1 },
  { id: '2', name: 'Srebrny medal', competition: 'Kata Indywidualne Senior M', quantity: 1 },
  { id: '3', name: 'Brązowy medal', competition: 'Kata Indywidualne Senior M', quantity: 2 },
  { id: '4', name: 'Złoty medal', competition: 'Kumite Senior M -75kg', quantity: 1 },
  { id: '5', name: 'Srebrny medal', competition: 'Kumite Senior M -75kg', quantity: 1 },
  { id: '6', name: 'Brązowy medal', competition: 'Kumite Senior M -75kg', quantity: 2 },
  { id: '7', name: 'Puchar zwycięzcy', competition: 'Ogólna klasyfikacja', quantity: 1 },
  { id: '8', name: 'Dyplom uczestnictwa', competition: 'Wszyscy', quantity: 156 },
];
