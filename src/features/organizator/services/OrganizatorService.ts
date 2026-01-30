import { api } from '@/lib/fetch/createAxiosInstance';
import type { TournamentStats, TournamentConfig, TournamentConfigResponse } from '../types';

class OrganizatorService {
  private fetchService = api;

  async getTournamentStats(): Promise<TournamentStats> {
    const { data } = await this.fetchService.get<TournamentStats>('/organizator/stats');
    return data;
  }

  async saveTournamentConfig(config: TournamentConfig): Promise<TournamentConfigResponse> {
    const { data } = await this.fetchService.post<TournamentConfigResponse>('/organizator/config', config);
    return data;
  }
}

export const organizatorService = new OrganizatorService();
