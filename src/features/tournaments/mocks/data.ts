import type { Tournament } from '@/features/tournaments/types/index.ts';

export const mockTournaments: Tournament[] = [
  {
    id: '1',
    name: 'Mistrzostwa Polski Karate WKF 2025',
    date: '2025-03-15',
    state: 'Przygotowanie',
  },
  {
    id: '2',
    name: 'Turniej Juniorów Warszawa',
    date: '2025-04-20',
    state: 'WTrakcie',
  },
];
