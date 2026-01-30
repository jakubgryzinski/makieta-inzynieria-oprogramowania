import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useMatches } from '../hooks';
import './ScheduleTable.css';

export function ScheduleTable() {
  const { t } = useTranslation('sedzia');
  const { data: matches, isLoading } = useMatches();

  if (isLoading) {
    return <div>{t('common:loading')}</div>;
  }

  return (
    <table className="schedule-table">
      <thead>
        <tr>
          <th>{t('harmonogram.table.time')}</th>
          <th>{t('harmonogram.table.mat')}</th>
          <th>{t('harmonogram.table.competition')}</th>
          <th>{t('harmonogram.table.competitors')}</th>
          <th>{t('harmonogram.table.status')}</th>
          <th>{t('harmonogram.table.actions')}</th>
        </tr>
      </thead>
      <tbody>
        {matches?.map((match) => (
          <tr key={match.id}>
            <td>{match.time}</td>
            <td>{match.mat}</td>
            <td>{match.competition}</td>
            <td>{match.competitor1} vs {match.competitor2}</td>
            <td>
              <span className={`schedule-table__status schedule-table__status--${match.status}`}>
                {t(`harmonogram.statuses.${match.status}`)}
              </span>
            </td>
            <td>
              <Link to="/sedzia/zapisywanie-wynikow" className="schedule-table__button">
                {t('harmonogram.enterResult')}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
