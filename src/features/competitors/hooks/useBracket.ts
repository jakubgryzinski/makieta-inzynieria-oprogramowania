import { useQuery } from '@tanstack/react-query';
import { competitorService } from '../services';

export const useCompetitions = () => {
  return useQuery({
    queryKey: ['competitions'],
    queryFn: () => competitorService.getCompetitions(),
  });
};

export const useBracket = (competitionId: string | null) => {
  return useQuery({
    queryKey: ['competitions', competitionId, 'bracket'],
    queryFn: () => competitorService.getBracket(competitionId!),
    enabled: !!competitionId,
  });
};
