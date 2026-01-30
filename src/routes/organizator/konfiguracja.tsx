import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { TournamentConfigForm } from '@/features/organizator/components';

export const Route = createFileRoute('/organizator/konfiguracja')({
  component: OrganizatorKonfiguracja,
});

function OrganizatorKonfiguracja() {
  const { t } = useTranslation('organizator');

  return (
    <div>
      <h1>{t('konfiguracja.title')}</h1>
      <TournamentConfigForm />
    </div>
  );
}
