import { api } from '@/lib/fetch/createAxiosInstance';
import type { Match, KumiteCompetition, KumiteResult, KumiteResultResponse } from '../types';

class SedziaService {
  private fetchService = api;

  async getMatches(): Promise<Match[]> {
    const { data } = await this.fetchService.get<Match[]>('/sedzia/matches');
    return data;
  }

  async getKumiteCompetitions(): Promise<KumiteCompetition[]> {
    const { data } = await this.fetchService.get<KumiteCompetition[]>('/sedzia/kumite-competitions');
    return data;
  }

  async submitKumiteResult(result: KumiteResult): Promise<KumiteResultResponse> {
    const { data } = await this.fetchService.post<KumiteResultResponse>('/sedzia/kumite-results', result);
    return data;
  }
}

export const sedziaService = new SedziaService();
