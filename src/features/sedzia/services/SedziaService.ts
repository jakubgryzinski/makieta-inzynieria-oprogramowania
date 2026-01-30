import { api } from '@/lib/fetch/createAxiosInstance';
import type { Match } from '../types';

class SedziaService {
  private fetchService = api;

  async getMatches(): Promise<Match[]> {
    const { data } = await this.fetchService.get<Match[]>('/sedzia/matches');
    return data;
  }
}

export const sedziaService = new SedziaService();
