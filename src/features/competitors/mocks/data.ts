import type {
  Competitor,
  Match,
  RankingPosition,
  RankingEntry,
  Competition,
  BracketMatch,
  BracketParticipant,
} from '../types';

export const mockCurrentCompetitor: Competitor = {
  id: 'comp-1',
  firstName: 'Jan',
  lastName: 'Kowalski',
  age: 16,
  weight: 65,
  gender: 'M',
  club: 'Dragon Dojo Warszawa',
};

export const mockUpcomingMatch: Match = {
  id: 'match-1',
  competitionName: 'Męskie kumite -67kg',
  date: '15.01.2025',
  time: '14:30',
  matNumber: 3,
  round: 'Ćwierćfinał',
  opponentId: 'comp-2',
  opponentName: 'Adam Nowak',
  status: 'Zaplanowany',
};

export const mockSchedule: Match[] = [
  {
    id: 'match-1',
    competitionName: 'Męskie kumite -67kg',
    date: '15.01.2025',
    time: '14:30',
    matNumber: 3,
    round: 'Ćwierćfinał',
    opponentId: 'comp-2',
    opponentName: 'Adam Nowak',
    status: 'Zaplanowany',
  },
  {
    id: 'match-2',
    competitionName: 'Męskie kumite -67kg',
    date: '15.01.2025',
    time: '10:00',
    matNumber: 2,
    round: '1/8 finału',
    opponentId: 'comp-3',
    opponentName: 'Piotr Wiśniewski',
    status: 'Zakończony',
    result: 'Wygrana',
  },
  {
    id: 'match-3',
    competitionName: 'Męskie kata indywidualne',
    date: '14.01.2025',
    time: '15:45',
    matNumber: 1,
    round: 'Eliminacje',
    opponentId: 'comp-4',
    opponentName: 'Marcin Lewandowski',
    status: 'Zakończony',
    result: 'Przegrana',
  },
  {
    id: 'match-4',
    competitionName: 'Męskie kumite -67kg',
    date: '14.01.2025',
    time: '09:30',
    matNumber: 4,
    round: '1/16 finału',
    opponentId: 'comp-5',
    opponentName: 'Tomasz Dąbrowski',
    status: 'Zakończony',
    result: 'Wygrana',
  },
  {
    id: 'match-5',
    competitionName: 'Męskie kata indywidualne',
    date: '14.01.2025',
    time: '11:15',
    matNumber: 1,
    round: 'Eliminacje',
    opponentId: 'comp-6',
    opponentName: 'Kamil Zieliński',
    status: 'Zakończony',
    result: 'Wygrana',
  },
];

export const mockRankingPosition: RankingPosition = {
  position: 15,
  change: 3,
  points: 245,
  updateDate: '10.01.2025',
};

export const mockRankingTable: RankingEntry[] = [
  {
    position: 1,
    competitorId: 'comp-10',
    competitorName: 'Paweł Nowak',
    club: 'Tiger Karate Kraków',
    points: 520,
  },
  {
    position: 2,
    competitorId: 'comp-11',
    competitorName: 'Michał Kowalczyk',
    club: 'Samurai Dojo Gdańsk',
    points: 495,
  },
  {
    position: 3,
    competitorId: 'comp-12',
    competitorName: 'Krzysztof Wójcik',
    club: 'Phoenix Karate Wrocław',
    points: 470,
  },
  {
    position: 4,
    competitorId: 'comp-13',
    competitorName: 'Jakub Kamiński',
    club: 'Karate Club Poznań',
    points: 445,
  },
  {
    position: 5,
    competitorId: 'comp-14',
    competitorName: 'Mateusz Lewandowski',
    club: 'Dragon Warriors Łódź',
    points: 420,
  },
  {
    position: 15,
    competitorId: 'comp-1',
    competitorName: 'Jan Kowalski',
    club: 'Dragon Dojo Warszawa',
    points: 245,
  },
  {
    position: 16,
    competitorId: 'comp-15',
    competitorName: 'Szymon Zieliński',
    club: 'Kata Masters Szczecin',
    points: 240,
  },
  {
    position: 17,
    competitorId: 'comp-16',
    competitorName: 'Damian Woźniak',
    club: 'Kumite Elite Bydgoszcz',
    points: 235,
  },
  {
    position: 18,
    competitorId: 'comp-17',
    competitorName: 'Adrian Kozłowski',
    club: 'Shogun Karate Lublin',
    points: 230,
  },
  {
    position: 19,
    competitorId: 'comp-18',
    competitorName: 'Bartosz Jankowski',
    club: 'Warrior Dojo Katowice',
    points: 225,
  },
];

export const mockCompetitions: Competition[] = [
  {
    id: 'comp-kumite-67',
    name: 'Męskie kumite -67kg',
    type: 'kumite',
    category: 'Indywidualne',
  },
  {
    id: 'comp-kata-ind',
    name: 'Męskie kata indywidualne',
    type: 'kata',
    category: 'Indywidualne',
  },
  {
    id: 'comp-kumite-75',
    name: 'Męskie kumite -75kg',
    type: 'kumite',
    category: 'Indywidualne',
  },
];

const createBracketParticipant = (
  id: number,
  name: string,
  club: string,
  seed?: number
): BracketParticipant => ({
  id: `bp-${id}`,
  name,
  club,
  seed,
});

const bracketParticipants: BracketParticipant[] = [
  createBracketParticipant(1, 'Jan Kowalski', 'Dragon Dojo Warszawa', 1),
  createBracketParticipant(2, 'Adam Nowak', 'Tiger Karate Kraków', 2),
  createBracketParticipant(3, 'Piotr Wiśniewski', 'Samurai Dojo Gdańsk', 3),
  createBracketParticipant(4, 'Marcin Lewandowski', 'Phoenix Karate Wrocław', 4),
  createBracketParticipant(5, 'Tomasz Dąbrowski', 'Karate Club Poznań', 5),
  createBracketParticipant(6, 'Kamil Zieliński', 'Dragon Warriors Łódź', 6),
  createBracketParticipant(7, 'Paweł Szymański', 'Kata Masters Szczecin', 7),
  createBracketParticipant(8, 'Michał Kowalczyk', 'Kumite Elite Bydgoszcz', 8),
  createBracketParticipant(9, 'Krzysztof Wójcik', 'Shogun Karate Lublin', 9),
  createBracketParticipant(10, 'Jakub Kamiński', 'Warrior Dojo Katowice', 10),
  createBracketParticipant(11, 'Mateusz Nowicki', 'Karate Centrum Gdynia', 11),
  createBracketParticipant(12, 'Szymon Zieliński', 'Fighter Club Radom', 12),
  createBracketParticipant(13, 'Damian Woźniak', 'Sensei Dojo Kielce', 13),
  createBracketParticipant(14, 'Adrian Kozłowski', 'Champion Karate Olsztyn', 14),
  createBracketParticipant(15, 'Bartosz Jankowski', 'Elite Warriors Rzeszów', 15),
  createBracketParticipant(16, 'Robert Krawczyk', 'Master Dojo Opole', 16),
];

export const mockBracket: BracketMatch[] = [
  // Round 0: 1/8 finału (Round of 16)
  { id: 'bm-1', round: 0, matchNumber: 1, participant1: bracketParticipants[0], participant2: bracketParticipants[15], winner: 'bp-1', score1: 8, score2: 3 },
  { id: 'bm-2', round: 0, matchNumber: 2, participant1: bracketParticipants[7], participant2: bracketParticipants[8], winner: 'bp-8', score1: 6, score2: 4 },
  { id: 'bm-3', round: 0, matchNumber: 3, participant1: bracketParticipants[3], participant2: bracketParticipants[12], winner: 'bp-4', score1: 7, score2: 5 },
  { id: 'bm-4', round: 0, matchNumber: 4, participant1: bracketParticipants[4], participant2: bracketParticipants[11], winner: 'bp-5', score1: 9, score2: 2 },
  { id: 'bm-5', round: 0, matchNumber: 5, participant1: bracketParticipants[2], participant2: bracketParticipants[13], winner: 'bp-3', score1: 8, score2: 6 },
  { id: 'bm-6', round: 0, matchNumber: 6, participant1: bracketParticipants[5], participant2: bracketParticipants[10], winner: 'bp-6', score1: 7, score2: 3 },
  { id: 'bm-7', round: 0, matchNumber: 7, participant1: bracketParticipants[6], participant2: bracketParticipants[9], winner: 'bp-10', score1: 4, score2: 6 },
  { id: 'bm-8', round: 0, matchNumber: 8, participant1: bracketParticipants[1], participant2: bracketParticipants[14], winner: 'bp-2', score1: 10, score2: 1 },

  // Round 1: Ćwierćfinały (Quarterfinals)
  { id: 'bm-9', round: 1, matchNumber: 1, participant1: bracketParticipants[0], participant2: bracketParticipants[7], winner: 'bp-1', score1: 7, score2: 5 },
  { id: 'bm-10', round: 1, matchNumber: 2, participant1: bracketParticipants[3], participant2: bracketParticipants[4], winner: 'bp-5', score1: 3, score2: 6 },
  { id: 'bm-11', round: 1, matchNumber: 3, participant1: bracketParticipants[2], participant2: bracketParticipants[5], winner: 'bp-3', score1: 8, score2: 4 },
  { id: 'bm-12', round: 1, matchNumber: 4, participant1: bracketParticipants[9], participant2: bracketParticipants[1], winner: 'bp-2', score1: 5, score2: 9 },

  // Round 2: Półfinały (Semifinals)
  { id: 'bm-13', round: 2, matchNumber: 1, participant1: bracketParticipants[0], participant2: bracketParticipants[4], winner: 'bp-1', score1: 6, score2: 4 },
  { id: 'bm-14', round: 2, matchNumber: 2, participant1: bracketParticipants[2], participant2: bracketParticipants[1] },

  // Round 3: Finał (Final)
  { id: 'bm-15', round: 3, matchNumber: 1, participant1: bracketParticipants[0] },
];
