import { tournamentHandlers } from '@/features/tournaments/mocks/handlers.ts';
import { competitorHandlers } from '@/features/competitors/mocks/handlers.ts';

export const handlers = [...tournamentHandlers, ...competitorHandlers];
