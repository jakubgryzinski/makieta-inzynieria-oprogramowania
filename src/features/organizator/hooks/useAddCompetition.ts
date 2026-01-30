import { useMutation, useQueryClient } from '@tanstack/react-query';
import { organizatorService } from '../services';
import type { CompetitionCreate } from '../types';

export function useAddCompetition() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (competition: CompetitionCreate) => organizatorService.addCompetition(competition),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organizator', 'competitions'] });
    },
  });
}
