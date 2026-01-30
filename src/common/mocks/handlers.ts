import { tournamentHandlers } from '@/features/tournaments/mocks/handlers.ts';
import { competitorHandlers } from '@/features/competitors/mocks/handlers.ts';
import { trenerHandlers } from '@/features/trener/mocks/handlers.ts';

export const handlers = [...tournamentHandlers, ...competitorHandlers, ...trenerHandlers];
