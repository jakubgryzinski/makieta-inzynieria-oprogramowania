import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { TeamRegistrationForm } from '@/features/trener/components';

export const Route = createFileRoute('/trener/rejestracja-druzynowa')({
  component: TrenerRejestracjaDruzynowa,
});

function TrenerRejestracjaDruzynowa() {
  const { t } = useTranslation('trener');

  return (
    <div>
      <h1>{t('rejestracjaDruzynowa.title')}</h1>
      <TeamRegistrationForm />
    </div>
  );
}
