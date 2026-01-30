import { useMutation } from '@tanstack/react-query';
import { trenerService } from '../services';
import type { CompetitorRegistration } from '../types';

export function useRegisterCompetitor() {
  return useMutation({
    mutationFn: (registration: CompetitorRegistration) =>
      trenerService.registerCompetitor(registration),
  });
}
