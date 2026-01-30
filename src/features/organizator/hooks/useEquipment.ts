import { useQuery } from '@tanstack/react-query';
import { organizatorService } from '../services';

export const useEquipment = () => {
  return useQuery({
    queryKey: ['organizator', 'equipment'],
    queryFn: () => organizatorService.getEquipment(),
  });
};
