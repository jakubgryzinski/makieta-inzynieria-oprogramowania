import { api } from '@/lib/fetch/createAxiosInstance';
import type {
  CoachCompetitor,
  CompetitorRegistration,
  CompetitorRegistrationResponse,
  Discipline,
  DisciplineParticipant,
  FullCompetitor,
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

  async getFullCompetitors(): Promise<FullCompetitor[]> {
    const { data } = await this.fetchService.get<FullCompetitor[]>('/trener/competitors/full');
    return data;
  }

  async getDisciplines(): Promise<Discipline[]> {
    const { data } = await this.fetchService.get<Discipline[]>('/trener/disciplines');
    return data;
  }

  async getDisciplineParticipants(disciplineId: string): Promise<DisciplineParticipant[]> {
    const { data } = await this.fetchService.get<DisciplineParticipant[]>(
      `/trener/disciplines/${disciplineId}/participants`
    );
    return data;
  }
}

export const trenerService = new TrenerService();
