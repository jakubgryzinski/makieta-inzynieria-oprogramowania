import type { CoachCompetitor, TeamMember } from '../types';

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
