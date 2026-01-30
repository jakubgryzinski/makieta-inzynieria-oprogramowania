import { useQuery } from '@tanstack/react-query';
import { trenerService } from '../services';

export function useDisciplines() {
  return useQuery({
    queryKey: ['trener', 'disciplines'],
    queryFn: () => trenerService.getDisciplines(),
  });
}
