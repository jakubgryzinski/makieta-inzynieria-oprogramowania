import { useTranslation } from 'react-i18next';
import { useTournamentStats } from '../hooks';
import './StatCards.css';

export function StatCards() {
  const { t } = useTranslation('organizator');
  const { data: stats, isLoading } = useTournamentStats();

  if (isLoading) {
    return <div>{t('dashboard.loading', 'Ładowanie...')}</div>;
  }

  if (!stats) {
    return null;
  }

  const cards = [
    { key: 'competitors', value: stats.competitors },
    { key: 'competitions', value: stats.competitions },
    { key: 'mats', value: stats.mats },
    { key: 'referees', value: stats.referees },
  ];

  return (
    <div className="stat-cards">
      {cards.map((card) => (
        <div key={card.key} className="stat-card">
          <div className="stat-card__value">{card.value}</div>
          <div className="stat-card__label">{t(`dashboard.stats.${card.key}`)}</div>
        </div>
      ))}
    </div>
  );
}
