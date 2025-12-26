import { http, HttpResponse } from 'msw';
import {
  mockCurrentCompetitor,
  mockUpcomingMatch,
  mockSchedule,
  mockRankingPosition,
  mockRankingTable,
  mockCompetitions,
  mockBracket,
} from './data';

export const competitorHandlers = [
  http.get('/api/v1/competitors/me', () => {
    return HttpResponse.json(mockCurrentCompetitor);
  }),

  http.get('/api/v1/competitors/me/upcoming-match', () => {
    return HttpResponse.json(mockUpcomingMatch);
  }),

  http.get('/api/v1/competitors/me/schedule', () => {
    return HttpResponse.json(mockSchedule);
  }),

  http.get('/api/v1/competitors/me/ranking', () => {
    return HttpResponse.json(mockRankingPosition);
  }),

  http.get('/api/v1/ranking', () => {
    return HttpResponse.json(mockRankingTable);
  }),

  http.get('/api/v1/competitions', () => {
    return HttpResponse.json(mockCompetitions);
  }),

  http.get('/api/v1/competitions/:competitionId/bracket', () => {
    return HttpResponse.json(mockBracket);
  }),
];
