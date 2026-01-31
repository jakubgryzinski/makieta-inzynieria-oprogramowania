import { useQuery } from '@tanstack/react-query';
import { organizatorService } from '../services/OrganizatorService';

export const useBracket = (competitionId: string | null) => {
  return useQuery({
    queryKey: ['organizator', 'bracket', competitionId],
    queryFn: () => organizatorService.getBracket(competitionId!),
    enabled: !!competitionId,
  });
};
