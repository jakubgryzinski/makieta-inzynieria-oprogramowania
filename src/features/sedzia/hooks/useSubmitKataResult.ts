import { useMutation } from '@tanstack/react-query';
import { sedziaService } from '../services';
import type { KataResult } from '../types';

export function useSubmitKataResult() {
  return useMutation({
    mutationFn: (result: KataResult) => sedziaService.submitKataResult(result),
  });
}
