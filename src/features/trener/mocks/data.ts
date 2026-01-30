import type { CoachCompetitor, Discipline, DisciplineParticipant, FullCompetitor, TeamMember } from '../types';

export const mockTeamMembers: TeamMember[] = [
  { id: 'tm-1', firstName: 'Jan', lastName: 'Kowalski' },
  { id: 'tm-2', firstName: 'Anna', lastName: 'Nowak' },
  { id: 'tm-3', firstName: 'Piotr', lastName: 'Wiśniewski' },
  { id: 'tm-4', firstName: 'Maria', lastName: 'Lewandowska' },
  { id: 'tm-5', firstName: 'Tomasz', lastName: 'Zieliński' },
  { id: 'tm-6', firstName: 'Katarzyna', lastName: 'Wójcik' },
  { id: 'tm-7', firstName: 'Michał', lastName: 'Kamiński' },
  { id: 'tm-8', firstName: 'Ewa', lastName: 'Szymańska' },
  { id: 'tm-9', firstName: 'Adam', lastName: 'Dąbrowski' },
  { id: 'tm-10', firstName: 'Zofia', lastName: 'Kozłowska' },
];

export const mockCoachCompetitors: CoachCompetitor[] = [
  {
    id: 'cc-1',
    firstName: 'Jan',
    lastName: 'Kowalski',
    competitions: ['Kumite -67kg', 'Kata indywidualne'],
    nextMatch: {
      date: '15.01.2025',
      time: '14:30',
      competitionName: 'Kumite -67kg',
    },
  },
  {
    id: 'cc-2',
    firstName: 'Anna',
    lastName: 'Nowak',
    competitions: ['Kata indywidualne', 'Kata drużynowe'],
    nextMatch: {
      date: '15.01.2025',
      time: '15:00',
      competitionName: 'Kata indywidualne',
    },
  },
  {
    id: 'cc-3',
    firstName: 'Piotr',
    lastName: 'Wiśniewski',
    competitions: ['Kumite -75kg'],
    nextMatch: {
      date: '16.01.2025',
      time: '10:00',
      competitionName: 'Kumite -75kg',
    },
  },
  {
    id: 'cc-4',
    firstName: 'Maria',
    lastName: 'Lewandowska',
    competitions: ['Kumite -55kg', 'Kata indywidualne'],
    nextMatch: null,
  },
  {
    id: 'cc-5',
    firstName: 'Tomasz',
    lastName: 'Zieliński',
    competitions: ['Kumite -84kg'],
    nextMatch: {
      date: '15.01.2025',
      time: '16:45',
      competitionName: 'Kumite -84kg',
    },
  },
];

export const mockFullCompetitors: FullCompetitor[] = [
  {
    id: 'fc-1',
    firstName: 'Jan',
    lastName: 'Kowalski',
    age: 22,
    competitions: ['Kumite -67kg', 'Kata indywidualne'],
    nextMatch: { date: '15.01.2025', time: '14:30', competitionName: 'Kumite -67kg' },
    lastResult: { competition: 'Kumite -67kg', place: 2, date: '10.12.2024' },
  },
  {
    id: 'fc-2',
    firstName: 'Anna',
    lastName: 'Nowak',
    age: 19,
    competitions: ['Kata indywidualne', 'Kata drużynowe'],
    nextMatch: { date: '15.01.2025', time: '15:00', competitionName: 'Kata indywidualne' },
    lastResult: { competition: 'Kata indywidualne', place: 1, date: '10.12.2024' },
  },
  {
    id: 'fc-3',
    firstName: 'Piotr',
    lastName: 'Wiśniewski',
    age: 25,
    competitions: ['Kumite -75kg'],
    nextMatch: { date: '16.01.2025', time: '10:00', competitionName: 'Kumite -75kg' },
    lastResult: { competition: 'Kumite -75kg', place: 3, date: '05.11.2024' },
  },
  {
    id: 'fc-4',
    firstName: 'Maria',
    lastName: 'Lewandowska',
    age: 17,
    competitions: ['Kumite -55kg', 'Kata indywidualne'],
    nextMatch: null,
    lastResult: { competition: 'Kata indywidualne', place: 4, date: '01.10.2024' },
  },
  {
    id: 'fc-5',
    firstName: 'Tomasz',
    lastName: 'Zieliński',
    age: 28,
    competitions: ['Kumite -84kg'],
    nextMatch: { date: '15.01.2025', time: '16:45', competitionName: 'Kumite -84kg' },
    lastResult: null,
  },
  {
    id: 'fc-6',
    firstName: 'Katarzyna',
    lastName: 'Wójcik',
    age: 20,
    competitions: ['Kata indywidualne'],
    nextMatch: { date: '15.01.2025', time: '11:15', competitionName: 'Kata indywidualne' },
    lastResult: { competition: 'Kata indywidualne', place: 2, date: '15.11.2024' },
  },
  {
    id: 'fc-7',
    firstName: 'Michał',
    lastName: 'Kamiński',
    age: 16,
    competitions: ['Kumite -60kg', 'Kata indywidualne'],
    nextMatch: { date: '16.01.2025', time: '09:30', competitionName: 'Kumite -60kg' },
    lastResult: { competition: 'Kumite -60kg', place: 1, date: '20.11.2024' },
  },
  {
    id: 'fc-8',
    firstName: 'Ewa',
    lastName: 'Szymańska',
    age: 23,
    competitions: ['Kumite -61kg'],
    nextMatch: null,
    lastResult: { competition: 'Kumite -61kg', place: 3, date: '08.12.2024' },
  },
];

export const mockDisciplines: Discipline[] = [
  { id: 'd-1', name: 'Kata indywidualne - Junior', participantCount: 24, status: 'aktywna' },
  { id: 'd-2', name: 'Kumite -67kg - Senior', participantCount: 16, status: 'aktywna' },
  { id: 'd-3', name: 'Kata drużynowe - Junior', participantCount: 18, status: 'oczekujaca' },
  { id: 'd-4', name: 'Kumite -55kg - Junior', participantCount: 12, status: 'zakonczona' },
  { id: 'd-5', name: 'Kata indywidualne - Senior', participantCount: 20, status: 'oczekujaca' },
  { id: 'd-6', name: 'Kumite -75kg - Senior', participantCount: 14, status: 'aktywna' },
];

export const mockDisciplineParticipants: Record<string, DisciplineParticipant[]> = {
  'd-1': [
    { id: 'dp-1', position: 1, firstName: 'Anna', lastName: 'Nowak', club: 'KS Olimp Warszawa', age: 16, weight: 52 },
    { id: 'dp-2', position: 2, firstName: 'Katarzyna', lastName: 'Wójcik', club: 'AKS Karate Kraków', age: 15, weight: 48 },
    { id: 'dp-3', position: 3, firstName: 'Michał', lastName: 'Kamiński', club: 'UKS Bushi Poznań', age: 17, weight: 60 },
    { id: 'dp-4', position: 4, firstName: 'Zofia', lastName: 'Kozłowska', club: 'KK Samurai Gdańsk', age: 14, weight: 45 },
    { id: 'dp-5', position: 5, firstName: 'Adam', lastName: 'Dąbrowski', club: 'KS Olimp Warszawa', age: 16, weight: 58 },
  ],
  'd-2': [
    { id: 'dp-6', position: 1, firstName: 'Jan', lastName: 'Kowalski', club: 'AKS Karate Kraków', age: 22, weight: 66 },
    { id: 'dp-7', position: 2, firstName: 'Piotr', lastName: 'Wiśniewski', club: 'UKS Bushi Poznań', age: 25, weight: 67 },
    { id: 'dp-8', position: 3, firstName: 'Tomasz', lastName: 'Zieliński', club: 'KK Samurai Gdańsk', age: 28, weight: 65 },
    { id: 'dp-9', position: 4, firstName: 'Marcin', lastName: 'Jankowski', club: 'KS Olimp Warszawa', age: 23, weight: 66 },
  ],
  'd-3': [
    { id: 'dp-10', position: 1, firstName: 'Maria', lastName: 'Lewandowska', club: 'AKS Karate Kraków', age: 17, weight: 55 },
    { id: 'dp-11', position: 2, firstName: 'Ewa', lastName: 'Szymańska', club: 'UKS Bushi Poznań', age: 16, weight: 50 },
    { id: 'dp-12', position: 3, firstName: 'Julia', lastName: 'Nowicka', club: 'KS Olimp Warszawa', age: 15, weight: 48 },
  ],
  'd-4': [
    { id: 'dp-13', position: 1, firstName: 'Paweł', lastName: 'Mazur', club: 'KK Samurai Gdańsk', age: 16, weight: 54 },
    { id: 'dp-14', position: 2, firstName: 'Aleksandra', lastName: 'Krawczyk', club: 'AKS Karate Kraków', age: 15, weight: 53 },
  ],
  'd-5': [
    { id: 'dp-15', position: 1, firstName: 'Krzysztof', lastName: 'Piotrowski', club: 'UKS Bushi Poznań', age: 24, weight: 72 },
    { id: 'dp-16', position: 2, firstName: 'Natalia', lastName: 'Grabowska', club: 'KS Olimp Warszawa', age: 21, weight: 58 },
    { id: 'dp-17', position: 3, firstName: 'Robert', lastName: 'Pawlak', club: 'KK Samurai Gdańsk', age: 26, weight: 78 },
  ],
  'd-6': [
    { id: 'dp-18', position: 1, firstName: 'Łukasz', lastName: 'Michalski', club: 'AKS Karate Kraków', age: 27, weight: 74 },
    { id: 'dp-19', position: 2, firstName: 'Bartosz', lastName: 'Adamski', club: 'UKS Bushi Poznań', age: 29, weight: 75 },
    { id: 'dp-20', position: 3, firstName: 'Mateusz', lastName: 'Sikora', club: 'KS Olimp Warszawa', age: 25, weight: 73 },
  ],
};
