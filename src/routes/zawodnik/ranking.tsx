import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/zawodnik/ranking')({
  component: ZawodnikRanking,
});

function ZawodnikRanking() {
  const { t } = useTranslation('zawodnik');

  return (
    <div>
      <h1>{t('ranking.title')}</h1>
      {/* TODO: Ranking card - Position, Change, Points, Update date */}
      {/* TODO: Ranking table - Position | Competitor | Club | Points */}
    </div>
  );
}
