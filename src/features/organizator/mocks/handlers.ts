import { http, HttpResponse } from 'msw';
import { mockTournamentStats, mockCompetitions, mockEquipment, mockAwards, mockMatSchedule, mockBrackets } from './data';
import type { CompetitionCreate, Competition } from '../types';

let competitions = [...mockCompetitions];

export const organizatorHandlers = [
  http.get('/api/v1/organizator/stats', () => {
    return HttpResponse.json(mockTournamentStats);
  }),

  http.post('/api/v1/organizator/config', () => {
    return HttpResponse.json({
      success: true,
      message: 'Configuration saved successfully',
    });
  }),

  http.get('/api/v1/organizator/competitions', () => {
    return HttpResponse.json(competitions);
  }),

  http.post('/api/v1/organizator/competitions', async ({ request }) => {
    const body = (await request.json()) as CompetitionCreate;
    const newCompetition: Competition = {
      ...body,
      id: String(Date.now()),
      participants: 0,
    };
    competitions = [...competitions, newCompetition];
    return HttpResponse.json({
      success: true,
      message: 'Competition added successfully',
      competition: newCompetition,
    });
  }),

  http.delete('/api/v1/organizator/competitions/:id', ({ params }) => {
    const { id } = params;
    competitions = competitions.filter((c) => c.id !== id);
    return HttpResponse.json({
      success: true,
      message: 'Competition deleted successfully',
    });
  }),

  http.get('/api/v1/organizator/equipment', () => {
    return HttpResponse.json(mockEquipment);
  }),

  http.get('/api/v1/organizator/awards', () => {
    return HttpResponse.json(mockAwards);
  }),

  http.get('/api/v1/organizator/schedule', () => {
    return HttpResponse.json(mockMatSchedule);
  }),

  http.get('/api/v1/organizator/brackets/:competitionId', ({ params }) => {
    const { competitionId } = params;
    const bracket = mockBrackets.find((b) => b.competitionId === competitionId);
    if (bracket) {
      return HttpResponse.json(bracket);
    }
    return HttpResponse.json({ competitionId, competitionName: '', nodes: [] });
  }),
];
