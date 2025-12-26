import { api } from '@/lib/fetch/createAxiosInstance';
import type {
  Competitor,
  Match,
  RankingPosition,
  RankingEntry,
  Competition,
  BracketMatch,
} from '../types';

class CompetitorService {
  private fetchService = api;

  async getCurrentCompetitor(): Promise<Competitor> {
    const { data } = await this.fetchService.get<Competitor>(
      '/competitors/me'
    );
    return data;
  }

  async getUpcomingMatch(): Promise<Match | null> {
    const { data } = await this.fetchService.get<Match | null>(
      '/competitors/me/upcoming-match'
    );
    return data;
  }

  async getSchedule(): Promise<Match[]> {
    const { data } = await this.fetchService.get<Match[]>(
      '/competitors/me/schedule'
    );
    return data;
  }

  async getRankingPosition(): Promise<RankingPosition> {
    const { data } = await this.fetchService.get<RankingPosition>(
      '/competitors/me/ranking'
    );
    return data;
  }

  async getRankingTable(): Promise<RankingEntry[]> {
    const { data } = await this.fetchService.get<RankingEntry[]>('/ranking');
    return data;
  }

  async getCompetitions(): Promise<Competition[]> {
    const { data } = await this.fetchService.get<Competition[]>('/competitions');
    return data;
  }

  async getBracket(competitionId: string): Promise<BracketMatch[]> {
    const { data } = await this.fetchService.get<BracketMatch[]>(
      `/competitions/${competitionId}/bracket`
    );
    return data;
  }
}

export const competitorService = new CompetitorService();
