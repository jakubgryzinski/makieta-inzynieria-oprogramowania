export interface CoachCompetitor {
  id: string;
  firstName: string;
  lastName: string;
  competitions: string[];
  nextMatch: {
    date: string;
    time: string;
    competitionName: string;
  } | null;
}
