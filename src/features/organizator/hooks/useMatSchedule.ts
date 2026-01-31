import { useQuery } from '@tanstack/react-query';
import { organizatorService } from '../services/OrganizatorService';

export const useMatSchedule = () => {
  return useQuery({
    queryKey: ['organizator', 'schedule'],
    queryFn: () => organizatorService.getMatSchedule(),
  });
};
