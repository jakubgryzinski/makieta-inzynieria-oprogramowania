import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useCurrentCompetitor, useRanking } from '@/features/competitors/hooks';
import { RankingCard, RankingTable } from '@/features/competitors/components';
import './ranking.css';

export const Route = createFileRoute('/zawodnik/ranking')({
  component: ZawodnikRanking,
});

function ZawodnikRanking() {
  const { t } = useTranslation('zawodnik');
  const { data: competitor, isLoading: isLoadingCompetitor, error: competitorError } = useCurrentCompetitor();
  const { position, table } = useRanking();

  if (isLoadingCompetitor || position.isLoading || table.isLoading) {
    return <div className="zawodnik-ranking">{t('common.loading', { ns: 'common' })}</div>;
  }

  if (competitorError) {
    return <div className="zawodnik-ranking">Competitor Error: {String(competitorError)}</div>;
  }

  if (position.error) {
    return <div className="zawodnik-ranking">Position Error: {String(position.error)}</div>;
  }

  if (table.error) {
    return <div className="zawodnik-ranking">Table Error: {String(table.error)}</div>;
  }

  const tableEntries = Array.isArray(table.data) ? table.data : [];

  return (
    <div className="zawodnik-ranking">
      <h1 className="zawodnik-ranking__title">{t('ranking.title')}</h1>
      {position.data && <RankingCard ranking={position.data} />}
      <h2 className="zawodnik-ranking__subtitle">{t('ranking.tableTitle')}</h2>
      {competitor && (
        <RankingTable entries={tableEntries} currentCompetitorId={competitor.id} />
      )}
      {!competitor && <p>Brak danych zawodnika</p>}
    </div>
  );
}
