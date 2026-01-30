import { http, HttpResponse } from 'msw';
import { mockCoachCompetitors } from './data';

export const trenerHandlers = [
  http.get('/api/v1/trener/competitors', () => {
    return HttpResponse.json(mockCoachCompetitors);
  }),
];
