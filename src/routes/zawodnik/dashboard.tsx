import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useCurrentCompetitor, useUpcomingMatch } from '@/features/competitors/hooks';
import { UpcomingMatchCard } from '@/features/competitors/components';
import './dashboard.css';

export const Route = createFileRoute('/zawodnik/dashboard')({
  component: ZawodnikDashboard,
});

function ZawodnikDashboard() {
  const { t } = useTranslation('zawodnik');
  const { data: competitor, isLoading: isLoadingCompetitor, error: competitorError } = useCurrentCompetitor();
  const { data: upcomingMatch, isLoading: isLoadingMatch, error: matchError } = useUpcomingMatch();

  if (isLoadingCompetitor || isLoadingMatch) {
    return <div className="zawodnik-dashboard">{t('common.loading', { ns: 'common' })}</div>;
  }

  if (competitorError) {
    return <div className="zawodnik-dashboard">Competitor Error: {String(competitorError)}</div>;
  }

  if (matchError) {
    return <div className="zawodnik-dashboard">Match Error: {String(matchError)}</div>;
  }

  return (
    <div className="zawodnik-dashboard">
      <h1 className="zawodnik-dashboard__title">
        {competitor?.firstName} {competitor?.lastName}
      </h1>
      <h2 className="zawodnik-dashboard__subtitle">{t('dashboard.upcomingMatch')}</h2>
      {upcomingMatch ? (
        <UpcomingMatchCard match={upcomingMatch} />
      ) : (
        <p className="zawodnik-dashboard__no-match">{t('dashboard.noUpcomingMatch')}</p>
      )}
    </div>
  );
}
