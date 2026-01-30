import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { CompetitionsTable } from '@/features/organizator/components';

export const Route = createFileRoute('/organizator/konkurencje')({
  component: OrganizatorKonkurencje,
});

function OrganizatorKonkurencje() {
  const { t } = useTranslation('organizator');

  return (
    <div>
      <h1>{t('konkurencje.title')}</h1>
      <CompetitionsTable />
    </div>
  );
}
