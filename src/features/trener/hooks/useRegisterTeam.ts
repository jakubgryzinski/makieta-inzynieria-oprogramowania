import { useMutation } from '@tanstack/react-query';
import { trenerService } from '../services';
import type { TeamRegistration } from '../types';

export function useRegisterTeam() {
  return useMutation({
    mutationFn: (registration: TeamRegistration) =>
      trenerService.registerTeam(registration),
  });
}
