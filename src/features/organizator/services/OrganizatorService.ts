import { api } from '@/lib/fetch/createAxiosInstance';
import type {
  TournamentStats,
  TournamentConfig,
  TournamentConfigResponse,
  Competition,
  CompetitionCreate,
  CompetitionResponse,
  Equipment,
  Award,
} from '../types';

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

  async getCompetitions(): Promise<Competition[]> {
    const { data } = await this.fetchService.get<Competition[]>('/organizator/competitions');
    return data;
  }

  async addCompetition(competition: CompetitionCreate): Promise<CompetitionResponse> {
    const { data } = await this.fetchService.post<CompetitionResponse>('/organizator/competitions', competition);
    return data;
  }

  async deleteCompetition(id: string): Promise<CompetitionResponse> {
    const { data } = await this.fetchService.delete<CompetitionResponse>(`/organizator/competitions/${id}`);
    return data;
  }

  async getEquipment(): Promise<Equipment[]> {
    const { data } = await this.fetchService.get<Equipment[]>('/organizator/equipment');
    return data;
  }

  async getAwards(): Promise<Award[]> {
    const { data } = await this.fetchService.get<Award[]>('/organizator/awards');
    return data;
  }
}

export const organizatorService = new OrganizatorService();
