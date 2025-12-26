import { useQuery } from '@tanstack/react-query';
import { competitorService } from '../services';

export const useCurrentCompetitor = () => {
  return useQuery({
    queryKey: ['competitor', 'me'],
    queryFn: () => competitorService.getCurrentCompetitor(),
  });
};
