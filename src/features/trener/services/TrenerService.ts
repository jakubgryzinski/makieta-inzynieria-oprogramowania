import { api } from '@/lib/fetch/createAxiosInstance';
import type { CoachCompetitor } from '../types';

class TrenerService {
  private fetchService = api;

  async getCoachCompetitors(): Promise<CoachCompetitor[]> {
    const { data } = await this.fetchService.get<CoachCompetitor[]>(
      '/trener/competitors'
    );
    return data;
  }
}

export const trenerService = new TrenerService();
