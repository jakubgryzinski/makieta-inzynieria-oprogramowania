import { useQuery } from '@tanstack/react-query';
import { trenerService } from '../services';

export function useFullCompetitors() {
  return useQuery({
    queryKey: ['trener', 'fullCompetitors'],
    queryFn: () => trenerService.getFullCompetitors(),
  });
}
