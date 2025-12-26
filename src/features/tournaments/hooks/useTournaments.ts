import { useQuery } from '@tanstack/react-query';
import { tournamentService } from '@/features/tournaments/services/index.ts';

export const useTournaments = () => {
  return useQuery({
    queryKey: ['tournaments'],
    queryFn: () => tournamentService.getTournaments(),
  });
};
