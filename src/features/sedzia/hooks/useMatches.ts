import { useQuery } from '@tanstack/react-query';
import { sedziaService } from '../services';

export const useMatches = () => {
  return useQuery({
    queryKey: ['sedzia', 'matches'],
    queryFn: () => sedziaService.getMatches(),
  });
};
