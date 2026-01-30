import { useQuery } from '@tanstack/react-query';
import { trenerService } from '../services';

export const useCoachCompetitors = () => {
  return useQuery({
    queryKey: ['trener', 'competitors'],
    queryFn: () => trenerService.getCoachCompetitors(),
  });
};
