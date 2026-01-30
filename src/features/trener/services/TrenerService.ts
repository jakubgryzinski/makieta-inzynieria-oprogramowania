import { api } from '@/lib/fetch/createAxiosInstance';
import type { CoachCompetitor, CompetitorRegistration, CompetitorRegistrationResponse } from '../types';

class TrenerService {
  private fetchService = api;

  async getCoachCompetitors(): Promise<CoachCompetitor[]> {
    const { data } = await this.fetchService.get<CoachCompetitor[]>(
      '/trener/competitors'
    );
    return data;
  }

  async registerCompetitor(registration: CompetitorRegistration): Promise<CompetitorRegistrationResponse> {
    const { data } = await this.fetchService.post<CompetitorRegistrationResponse>(
      '/trener/competitors',
      registration
    );
    return data;
  }
}

export const trenerService = new TrenerService();
