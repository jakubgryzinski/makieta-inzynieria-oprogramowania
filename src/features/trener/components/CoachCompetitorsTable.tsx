import { useTranslation } from 'react-i18next';
import type { CoachCompetitor } from '../types';
import './CoachCompetitorsTable.css';

interface CoachCompetitorsTableProps {
  competitors: CoachCompetitor[];
}

export function CoachCompetitorsTable({ competitors }: CoachCompetitorsTableProps) {
  const { t } = useTranslation('trener');

  return (
    <table className="coach-competitors-table">
      <thead>
        <tr>
          <th>{t('dashboard.table.name')}</th>
          <th>{t('dashboard.table.competitions')}</th>
          <th>{t('dashboard.table.nextMatch')}</th>
        </tr>
      </thead>
      <tbody>
        {competitors.map((competitor) => (
          <tr key={competitor.id}>
            <td>
              {competitor.firstName} {competitor.lastName}
            </td>
            <td>
              <div className="coach-competitors-table__competitions">
                {competitor.competitions.map((comp) => (
                  <span key={comp} className="coach-competitors-table__competition-badge">
                    {comp}
                  </span>
                ))}
              </div>
            </td>
            <td>
              {competitor.nextMatch ? (
                <span>
                  {competitor.nextMatch.date} {competitor.nextMatch.time} - {competitor.nextMatch.competitionName}
                </span>
              ) : (
                <span className="coach-competitors-table__no-match">
                  {t('dashboard.table.noMatch')}
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
