import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/zawodnik/dashboard')({
  component: ZawodnikDashboard,
});

function ZawodnikDashboard() {
  const { t } = useTranslation('zawodnik');

  return (
    <div>
      <h1>{t('dashboard.title')}</h1>
      {/* TODO: Upcoming match card */}
    </div>
  );
}
