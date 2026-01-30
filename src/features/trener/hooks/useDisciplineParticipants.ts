import { useQuery } from '@tanstack/react-query';
import { trenerService } from '../services';

export function useDisciplineParticipants(disciplineId: string | null) {
  return useQuery({
    queryKey: ['trener', 'disciplines', disciplineId, 'participants'],
    queryFn: () => trenerService.getDisciplineParticipants(disciplineId!),
    enabled: !!disciplineId,
  });
}
