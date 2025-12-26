import { useQuery } from '@tanstack/react-query';
import { competitorService } from '../services';

export const useSchedule = () => {
  return useQuery({
    queryKey: ['competitor', 'me', 'schedule'],
    queryFn: () => competitorService.getSchedule(),
  });
};
