import { http, HttpResponse } from 'msw';
import { mockCoachCompetitors, mockDisciplineParticipants, mockDisciplines, mockFullCompetitors, mockTeamMembers } from './data';

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

  http.get('/api/v1/trener/competitors/full', () => {
    return HttpResponse.json(mockFullCompetitors);
  }),

  http.get('/api/v1/trener/disciplines', () => {
    return HttpResponse.json(mockDisciplines);
  }),

  http.get('/api/v1/trener/disciplines/:disciplineId/participants', ({ params }) => {
    const { disciplineId } = params;
    const participants = mockDisciplineParticipants[disciplineId as string] || [];
    return HttpResponse.json(participants);
  }),
];
