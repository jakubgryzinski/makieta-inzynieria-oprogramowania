import { http, HttpResponse } from 'msw';
import { mockCoachCompetitors, mockTeamMembers } from './data';

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

  http.get('/api/v1/trener/team-members', () => {
    return HttpResponse.json(mockTeamMembers);
  }),

  http.post('/api/v1/trener/teams', () => {
    return HttpResponse.json({
      id: crypto.randomUUID(),
      message: 'Drużyna została zarejestrowana',
    });
  }),
];
