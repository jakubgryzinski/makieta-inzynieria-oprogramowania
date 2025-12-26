import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useSchedule } from '@/features/competitors/hooks';
import { ScheduleTable } from '@/features/competitors/components';
import './harmonogram.css';

export const Route = createFileRoute('/zawodnik/harmonogram')({
  component: ZawodnikHarmonogram,
});

function ZawodnikHarmonogram() {
  const { t } = useTranslation('zawodnik');
  const { data: matches, isLoading, error } = useSchedule();

  if (isLoading) {
    return <div className="zawodnik-harmonogram">{t('common.loading', { ns: 'common' })}</div>;
  }

  if (error) {
    return <div className="zawodnik-harmonogram">Error: {String(error)}</div>;
  }

  const matchesArray = Array.isArray(matches) ? matches : [];

  return (
    <div className="zawodnik-harmonogram">
      <h1 className="zawodnik-harmonogram__title">{t('harmonogram.title')}</h1>
      {matchesArray.length > 0 ? (
        <ScheduleTable matches={matchesArray} />
      ) : (
        <p className="zawodnik-harmonogram__no-matches">{t('harmonogram.noMatches')}</p>
      )}
    </div>
  );
}
