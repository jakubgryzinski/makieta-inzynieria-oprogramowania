import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { ResourcesView } from '@/features/organizator/components';

export const Route = createFileRoute('/organizator/zasoby')({
  component: OrganizatorZasoby,
});

function OrganizatorZasoby() {
  const { t } = useTranslation('organizator');

  return (
    <div>
      <h1>{t('zasoby.title')}</h1>
      <ResourcesView />
    </div>
  );
}
