import { useMutation, useQueryClient } from '@tanstack/react-query';
import { organizatorService } from '../services';

export function useDeleteCompetition() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => organizatorService.deleteCompetition(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organizator', 'competitions'] });
    },
  });
}
