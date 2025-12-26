import { useTranslation } from 'react-i18next';
import type { RankingPosition } from '../types';
import './RankingCard.css';

interface RankingCardProps {
  ranking: RankingPosition;
}

export const RankingCard = ({ ranking }: RankingCardProps) => {
  const { t } = useTranslation('zawodnik');

  const getChangeClass = (change: number) => {
    if (change > 0) return 'ranking-card__change--positive';
    if (change < 0) return 'ranking-card__change--negative';
    return 'ranking-card__change--neutral';
  };

  const formatChange = (change: number) => {
    if (change > 0) return `+${change}`;
    if (change === 0) return '0';
    return String(change);
  };

  return (
    <div className="ranking-card">
      <div className="ranking-card__grid">
        <div className="ranking-card__item ranking-card__item--position">
          <span className="ranking-card__label">{t('ranking.position')}</span>
          <span className="ranking-card__value ranking-card__value--large">{ranking.position}</span>
        </div>
        <div className="ranking-card__item">
          <span className="ranking-card__label">{t('ranking.change')}</span>
          <span className={`ranking-card__value ranking-card__change ${getChangeClass(ranking.change ?? 0)}`}>
            {formatChange(ranking.change ?? 0)}
          </span>
        </div>
        <div className="ranking-card__item">
          <span className="ranking-card__label">{t('ranking.points')}</span>
          <span className="ranking-card__value">{ranking.points}</span>
        </div>
        <div className="ranking-card__item">
          <span className="ranking-card__label">{t('ranking.updateDate')}</span>
          <span className="ranking-card__value">{ranking.updateDate}</span>
        </div>
      </div>
    </div>
  );
};
