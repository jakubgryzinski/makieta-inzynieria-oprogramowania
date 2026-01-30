import { useQuery } from '@tanstack/react-query';
import { organizatorService } from '../services';

export const useAwards = () => {
  return useQuery({
    queryKey: ['organizator', 'awards'],
    queryFn: () => organizatorService.getAwards(),
  });
};
