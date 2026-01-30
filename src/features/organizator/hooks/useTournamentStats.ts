import { useQuery } from '@tanstack/react-query';
import { organizatorService } from '../services';

export const useTournamentStats = () => {
  return useQuery({
    queryKey: ['organizator', 'stats'],
    queryFn: () => organizatorService.getTournamentStats(),
  });
};
