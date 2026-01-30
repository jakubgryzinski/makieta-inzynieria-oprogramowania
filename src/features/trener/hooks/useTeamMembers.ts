import { useQuery } from '@tanstack/react-query';
import { trenerService } from '../services';

export function useTeamMembers() {
  return useQuery({
    queryKey: ['trener', 'team-members'],
    queryFn: () => trenerService.getTeamMembers(),
  });
}
