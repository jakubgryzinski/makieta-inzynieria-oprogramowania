import { api } from '@/lib/fetch/createAxiosInstance';
import type {
  Match,
  KumiteCompetition,
  KumiteResult,
  KumiteResultResponse,
  KataCompetition,
  KataCompetitor,
  KataResult,
  KataResultResponse,
} from '../types';

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

  async getKataCompetitions(): Promise<KataCompetition[]> {
    const { data } = await this.fetchService.get<KataCompetition[]>('/sedzia/kata-competitions');
    return data;
  }

  async getKataCompetitors(competitionId: string): Promise<KataCompetitor[]> {
    const { data } = await this.fetchService.get<KataCompetitor[]>(
      `/sedzia/kata-competitions/${competitionId}/competitors`
    );
    return data;
  }

  async submitKataResult(result: KataResult): Promise<KataResultResponse> {
    const { data } = await this.fetchService.post<KataResultResponse>('/sedzia/kata-results', result);
    return data;
  }
}

export const sedziaService = new SedziaService();
