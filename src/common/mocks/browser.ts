import { setupWorker } from 'msw/browser';
import { handlers } from '@/common/mocks/handlers.ts';

export const worker = setupWorker(...handlers);
