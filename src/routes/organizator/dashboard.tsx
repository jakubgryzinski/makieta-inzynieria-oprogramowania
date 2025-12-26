import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/organizator/dashboard')({
  component: OrganizatorDashboard,
});

function OrganizatorDashboard() {
  const { t } = useTranslation('organizator');

  return (
    <div>
      <h1>{t('dashboard.title')}</h1>
      {/* TODO: 4 statistics cards - Competitors: 156, Competitions: 24, Mats: 6, Referees: 18 */}
    </div>
  );
}
