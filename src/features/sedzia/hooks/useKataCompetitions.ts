import { useQuery } from '@tanstack/react-query';
import { sedziaService } from '../services';

export function useKataCompetitions() {
  return useQuery({
    queryKey: ['sedzia', 'kata-competitions'],
    queryFn: () => sedziaService.getKataCompetitions(),
  });
}
