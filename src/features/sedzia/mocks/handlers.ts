import { http, HttpResponse } from 'msw';
import { mockMatches, mockKumiteCompetitions, mockKataCompetitions, mockKataCompetitors } from './data';

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

  http.get('/api/v1/sedzia/kata-competitions', () => {
    return HttpResponse.json(mockKataCompetitions);
  }),

  http.get('/api/v1/sedzia/kata-competitions/:id/competitors', ({ params }) => {
    const { id } = params;
    const competitors = mockKataCompetitors[id as string] || [];
    return HttpResponse.json(competitors);
  }),

  http.post('/api/v1/sedzia/kata-results', () => {
    return HttpResponse.json({
      success: true,
      message: 'Wynik kata został zapisany',
    });
  }),
];
