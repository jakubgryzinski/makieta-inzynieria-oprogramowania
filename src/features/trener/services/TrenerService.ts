import { api } from '@/lib/fetch/createAxiosInstance';
import type {
  CoachCompetitor,
  CompetitorRegistration,
  CompetitorRegistrationResponse,
  TeamMember,
  TeamRegistration,
  TeamRegistrationResponse,
} from '../types';

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

  async getTeamMembers(): Promise<TeamMember[]> {
    const { data } = await this.fetchService.get<TeamMember[]>('/trener/team-members');
    return data;
  }

  async registerTeam(registration: TeamRegistration): Promise<TeamRegistrationResponse> {
    const { data } = await this.fetchService.post<TeamRegistrationResponse>(
      '/trener/teams',
      registration
    );
    return data;
  }
}

export const trenerService = new TrenerService();
