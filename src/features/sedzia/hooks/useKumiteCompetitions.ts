import { useQuery } from '@tanstack/react-query';
import { sedziaService } from '../services';

export function useKumiteCompetitions() {
  return useQuery({
    queryKey: ['sedzia', 'kumite-competitions'],
    queryFn: () => sedziaService.getKumiteCompetitions(),
  });
}
