import { http, HttpResponse } from 'msw';
import { mockTournaments } from '@/features/tournaments/mocks/data.ts';

export const tournamentHandlers = [
  http.get('/api/v1/tournaments', () => {
    return HttpResponse.json(mockTournaments);
  }),
];
