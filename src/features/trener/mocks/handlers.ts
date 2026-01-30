import { http, HttpResponse } from 'msw';
import { mockCoachCompetitors } from './data';

export const trenerHandlers = [
  http.get('/api/v1/trener/competitors', () => {
    return HttpResponse.json(mockCoachCompetitors);
  }),

  http.post('/api/v1/trener/competitors', () => {
    return HttpResponse.json({
      id: crypto.randomUUID(),
      message: 'Zawodnik został zarejestrowany',
    });
  }),
];
