import { useMutation } from '@tanstack/react-query';
import { sedziaService } from '../services';
import type { KumiteResult } from '../types';

export function useSubmitKumiteResult() {
  return useMutation({
    mutationFn: (result: KumiteResult) => sedziaService.submitKumiteResult(result),
  });
}
