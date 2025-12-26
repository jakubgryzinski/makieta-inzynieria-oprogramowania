import { api } from '@/lib/fetch/index.ts';
import type { Tournament } from '@/features/tournaments/types/index.ts';

class TournamentService {
  private fetchService = api;

  async getTournaments(): Promise<Tournament[]> {
    const { data } = await this.fetchService.get<Tournament[]>('/tournaments');
    return data;
  }
}

export const tournamentService = new TournamentService();
