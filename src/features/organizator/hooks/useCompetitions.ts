import { useQuery } from '@tanstack/react-query';
import { organizatorService } from '../services';

export const useCompetitions = () => {
  return useQuery({
    queryKey: ['organizator', 'competitions'],
    queryFn: () => organizatorService.getCompetitions(),
  });
};
