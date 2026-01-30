import { useMutation } from '@tanstack/react-query';
import { organizatorService } from '../services';
import type { TournamentConfig } from '../types';

export function useSaveTournamentConfig() {
  return useMutation({
    mutationFn: (config: TournamentConfig) => organizatorService.saveTournamentConfig(config),
  });
}
