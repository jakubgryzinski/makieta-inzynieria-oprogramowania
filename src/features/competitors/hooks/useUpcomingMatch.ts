import { useQuery } from '@tanstack/react-query';
import { competitorService } from '../services';

export const useUpcomingMatch = () => {
  return useQuery({
    queryKey: ['competitor', 'me', 'upcoming-match'],
    queryFn: () => competitorService.getUpcomingMatch(),
  });
};
