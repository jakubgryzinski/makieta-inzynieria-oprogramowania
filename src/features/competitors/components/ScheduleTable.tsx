import { useTranslation } from 'react-i18next';
import type { Match } from '../types';
import './ScheduleTable.css';

interface ScheduleTableProps {
  matches: Match[];
}

export const ScheduleTable = ({ matches }: ScheduleTableProps) => {
  const { t } = useTranslation('zawodnik');

  const getStatusClass = (status: Match['status']) => {
    switch (status) {
      case 'Zaplanowany':
        return 'schedule-table__status--planned';
      case 'WTrakcie':
        return 'schedule-table__status--in-progress';
      case 'Zakończony':
        return 'schedule-table__status--finished';
      default:
        return '';
    }
  };

  return (
    <div className="schedule-table">
      <table className="schedule-table__table">
        <thead>
          <tr>
            <th>{t('harmonogram.competition')}</th>
            <th>{t('harmonogram.time')}</th>
            <th>{t('harmonogram.mat')}</th>
            <th>{t('harmonogram.round')}</th>
            <th>{t('harmonogram.opponent')}</th>
            <th>{t('harmonogram.status')}</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.id}>
              <td>{match.competitionName}</td>
              <td>{match.date} {match.time}</td>
              <td>{match.matNumber}</td>
              <td>{match.round}</td>
              <td>{match.opponentName}</td>
              <td>
                <span className={`schedule-table__status ${getStatusClass(match.status)}`}>
                  {match.status}
                </span>
                {match.result && (
                  <span className="schedule-table__result"> ({match.result})</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
