import type { TournamentStats, Competition, Equipment, Award, MatScheduleRow, CompetitionBracket } from '../types';

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

export const mockMatSchedule: MatScheduleRow[] = [
  { id: '1', time: '09:00', mat1: 'Kata Dzieci M', mat2: 'Kata Dzieci K', mat3: 'Kumite Dzieci M -30kg', mat4: 'Kumite Dzieci K -30kg', mat5: '-', mat6: '-', referees: 'Nowak, Wiśniewski, Kowalczyk' },
  { id: '2', time: '10:00', mat1: 'Kata Dzieci M', mat2: 'Kata Dzieci K', mat3: 'Kumite Dzieci M +30kg', mat4: 'Kumite Dzieci K -30kg', mat5: 'Kata Junior M', mat6: '-', referees: 'Nowak, Wiśniewski, Zieliński' },
  { id: '3', time: '11:00', mat1: 'Kata Junior M', mat2: 'Kata Junior K', mat3: 'Kumite Junior M -60kg', mat4: 'Kumite Junior K -55kg', mat5: 'Kata Senior M', mat6: 'Kata Senior K', referees: 'Wójcik, Kowalczyk, Kamiński' },
  { id: '4', time: '12:00', mat1: 'Kata Senior M', mat2: 'Kata Senior K', mat3: 'Kumite Junior M +60kg', mat4: 'Kumite Junior K -55kg', mat5: 'Kumite Senior M -75kg', mat6: 'Kumite Senior K -61kg', referees: 'Lewandowski, Dąbrowski, Zieliński' },
  { id: '5', time: '13:00', mat1: '-', mat2: '-', mat3: '-', mat4: '-', mat5: '-', mat6: '-', referees: 'Przerwa obiadowa' },
  { id: '6', time: '14:00', mat1: 'Kata Senior M (półf.)', mat2: 'Kata Senior K (półf.)', mat3: 'Kumite Senior M -75kg', mat4: 'Kumite Senior M +75kg', mat5: 'Kumite Senior K -61kg', mat6: '-', referees: 'Nowak, Wójcik, Kamiński' },
  { id: '7', time: '15:00', mat1: 'Kata Senior M (finał)', mat2: 'Kata Senior K (finał)', mat3: 'Kumite Senior M -75kg (półf.)', mat4: 'Kumite Senior M +75kg (półf.)', mat5: '-', mat6: '-', referees: 'Lewandowski, Wiśniewski, Dąbrowski' },
  { id: '8', time: '16:00', mat1: '-', mat2: '-', mat3: 'Kumite Senior M -75kg (finał)', mat4: 'Kumite Senior M +75kg (finał)', mat5: 'Kumite Senior K -61kg (finał)', mat6: '-', referees: 'Nowak, Wójcik, Kowalczyk' },
];

export const mockBrackets: CompetitionBracket[] = [
  {
    competitionId: '5',
    competitionName: 'Kata Indywidualne Senior M',
    nodes: [
      { id: 'q1', round: 'quarterfinals', match: 1, competitor1: 'Jan Nowak', competitor2: 'Piotr Wiśniewski', winner: 'Jan Nowak' },
      { id: 'q2', round: 'quarterfinals', match: 2, competitor1: 'Adam Kowalski', competitor2: 'Marcin Zieliński', winner: 'Adam Kowalski' },
      { id: 'q3', round: 'quarterfinals', match: 3, competitor1: 'Tomasz Wójcik', competitor2: 'Krzysztof Kamiński', winner: 'Tomasz Wójcik' },
      { id: 'q4', round: 'quarterfinals', match: 4, competitor1: 'Michał Lewandowski', competitor2: 'Paweł Dąbrowski', winner: 'Michał Lewandowski' },
      { id: 's1', round: 'semifinals', match: 1, competitor1: 'Jan Nowak', competitor2: 'Adam Kowalski', winner: 'Jan Nowak' },
      { id: 's2', round: 'semifinals', match: 2, competitor1: 'Tomasz Wójcik', competitor2: 'Michał Lewandowski', winner: 'Michał Lewandowski' },
      { id: 'f1', round: 'final', match: 1, competitor1: 'Jan Nowak', competitor2: 'Michał Lewandowski', winner: null },
    ],
  },
  {
    competitionId: '13',
    competitionName: 'Kumite Senior M -75kg',
    nodes: [
      { id: 'q1', round: 'quarterfinals', match: 1, competitor1: 'Robert Mazur', competitor2: 'Andrzej Krawczyk', winner: 'Robert Mazur' },
      { id: 'q2', round: 'quarterfinals', match: 2, competitor1: 'Jakub Piotrowski', competitor2: 'Grzegorz Grabowski', winner: 'Jakub Piotrowski' },
      { id: 'q3', round: 'quarterfinals', match: 3, competitor1: 'Mateusz Pawłowski', competitor2: 'Łukasz Michalski', winner: 'Mateusz Pawłowski' },
      { id: 'q4', round: 'quarterfinals', match: 4, competitor1: 'Szymon Zając', competitor2: 'Filip Król', winner: 'Filip Król' },
      { id: 's1', round: 'semifinals', match: 1, competitor1: 'Robert Mazur', competitor2: 'Jakub Piotrowski', winner: null },
      { id: 's2', round: 'semifinals', match: 2, competitor1: 'Mateusz Pawłowski', competitor2: 'Filip Król', winner: null },
      { id: 'f1', round: 'final', match: 1, competitor1: null, competitor2: null, winner: null },
    ],
  },
];
