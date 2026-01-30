import { http, HttpResponse } from 'msw';
import { mockMatches, mockKumiteCompetitions } from './data';

export const sedziaHandlers = [
  http.get('/api/v1/sedzia/matches', () => {
    return HttpResponse.json(mockMatches);
  }),

  http.get('/api/v1/sedzia/kumite-competitions', () => {
    return HttpResponse.json(mockKumiteCompetitions);
  }),

  http.post('/api/v1/sedzia/kumite-results', () => {
    return HttpResponse.json({
      success: true,
      message: 'Wynik kumite został zapisany',
    });
  }),
];
