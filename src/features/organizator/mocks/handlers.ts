import { http, HttpResponse } from 'msw';
import { mockTournamentStats } from './data';

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
];
