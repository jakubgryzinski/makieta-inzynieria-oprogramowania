import { useQuery } from '@tanstack/react-query';
import { sedziaService } from '../services';

export function useKataCompetitors(competitionId: string) {
  return useQuery({
    queryKey: ['sedzia', 'kata-competitors', competitionId],
    queryFn: () => sedziaService.getKataCompetitors(competitionId),
    enabled: !!competitionId,
  });
}
