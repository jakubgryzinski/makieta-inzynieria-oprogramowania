import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { StatCards } from '@/features/organizator/components';

export const Route = createFileRoute('/organizator/dashboard')({
  component: OrganizatorDashboard,
});

function OrganizatorDashboard() {
  const { t } = useTranslation('organizator');

  return (
    <div>
      <h1>{t('dashboard.title')}</h1>
      <StatCards />
    </div>
  );
}
