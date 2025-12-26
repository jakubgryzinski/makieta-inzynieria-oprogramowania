import { useTranslation } from 'react-i18next';
import type { Match } from '../types';
import './UpcomingMatchCard.css';

interface UpcomingMatchCardProps {
  match: Match;
}

export const UpcomingMatchCard = ({ match }: UpcomingMatchCardProps) => {
  const { t } = useTranslation('zawodnik');

  return (
    <div className="upcoming-match-card">
      <h3 className="upcoming-match-card__title">{match.competitionName}</h3>
      <div className="upcoming-match-card__info">
        <div className="upcoming-match-card__row">
          <span className="upcoming-match-card__label">{t('dashboard.date')}:</span>
          <span className="upcoming-match-card__value">{match.date} {match.time}</span>
        </div>
        <div className="upcoming-match-card__row">
          <span className="upcoming-match-card__label">{t('dashboard.mat')}:</span>
          <span className="upcoming-match-card__value">{match.matNumber}</span>
        </div>
        <div className="upcoming-match-card__row">
          <span className="upcoming-match-card__label">{t('dashboard.opponent')}:</span>
          <span className="upcoming-match-card__value">{match.opponentName}</span>
        </div>
      </div>
    </div>
  );
};
