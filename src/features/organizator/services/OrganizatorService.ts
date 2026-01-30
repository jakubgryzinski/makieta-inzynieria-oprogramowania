import { api } from '@/lib/fetch/createAxiosInstance';
import type { TournamentStats } from '../types';

class OrganizatorService {
  private fetchService = api;

  async getTournamentStats(): Promise<TournamentStats> {
    const { data } = await this.fetchService.get<TournamentStats>('/organizator/stats');
    return data;
  }
}

export const organizatorService = new OrganizatorService();
