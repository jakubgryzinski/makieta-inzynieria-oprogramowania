import { useTranslation } from 'react-i18next';
import type { FullCompetitor } from '../types';
import './CompetitorsListTable.css';

interface CompetitorsListTableProps {
  competitors: FullCompetitor[];
}

export function CompetitorsListTable({ competitors }: CompetitorsListTableProps) {
  const { t } = useTranslation('trener');

  return (
    <table className="competitors-list-table">
      <thead>
        <tr>
          <th>{t('zawodnicy.table.name')}</th>
          <th>{t('zawodnicy.table.age')}</th>
          <th>{t('zawodnicy.table.competitions')}</th>
          <th>{t('zawodnicy.table.nextMatch')}</th>
          <th>{t('zawodnicy.table.lastResult')}</th>
        </tr>
      </thead>
      <tbody>
        {competitors.map((competitor) => (
          <tr key={competitor.id}>
            <td>
              {competitor.firstName} {competitor.lastName}
            </td>
            <td>{competitor.age}</td>
            <td>
              <div className="competitors-list-table__competitions">
                {competitor.competitions.map((comp) => (
                  <span key={comp} className="competitors-list-table__badge">
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
                <span className="competitors-list-table__no-data">
                  {t('zawodnicy.table.noMatch')}
                </span>
              )}
            </td>
            <td>
              {competitor.lastResult ? (
                <span>
                  <span className={`competitors-list-table__place competitors-list-table__place--${competitor.lastResult.place}`}>
                    {competitor.lastResult.place}.
                  </span>{' '}
                  {competitor.lastResult.competition} ({competitor.lastResult.date})
                </span>
              ) : (
                <span className="competitors-list-table__no-data">
                  {t('zawodnicy.table.noResult')}
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
