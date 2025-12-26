import { useTranslation } from 'react-i18next';
import type { RankingEntry } from '../types';
import './RankingTable.css';

interface RankingTableProps {
  entries: RankingEntry[];
  currentCompetitorId: string;
}

export const RankingTable = ({ entries, currentCompetitorId }: RankingTableProps) => {
  const { t } = useTranslation('zawodnik');
  const entriesArray = Array.isArray(entries) ? entries : [];

  return (
    <div className="ranking-table">
      <table className="ranking-table__table">
        <thead>
          <tr>
            <th>{t('ranking.tablePosition')}</th>
            <th>{t('ranking.competitor')}</th>
            <th>{t('ranking.club')}</th>
            <th>{t('ranking.points')}</th>
          </tr>
        </thead>
        <tbody>
          {entriesArray.map((entry) => (
            <tr
              key={entry.competitorId}
              className={entry.competitorId === currentCompetitorId ? 'ranking-table__row--current' : ''}
            >
              <td>{entry.position}</td>
              <td>{entry.competitorName}</td>
              <td>{entry.club}</td>
              <td>{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
