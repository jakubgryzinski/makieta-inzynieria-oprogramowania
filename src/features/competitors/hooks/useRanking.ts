import { useQuery } from '@tanstack/react-query';
import { competitorService } from '../services';

export const useRanking = () => {
  const position = useQuery({
    queryKey: ['competitor', 'me', 'ranking'],
    queryFn: () => competitorService.getRankingPosition(),
  });

  const table = useQuery({
    queryKey: ['ranking', 'table'],
    queryFn: () => competitorService.getRankingTable(),
  });

  return {
    position,
    table,
  };
};
