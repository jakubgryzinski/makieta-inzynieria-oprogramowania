import { http, HttpResponse } from 'msw';
import { mockMatches } from './data';

export const sedziaHandlers = [
  http.get('/api/v1/sedzia/matches', () => {
    return HttpResponse.json(mockMatches);
  }),
];
