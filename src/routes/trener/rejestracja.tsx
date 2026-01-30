import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { CompetitorRegistrationForm } from '@/features/trener/components';

export const Route = createFileRoute('/trener/rejestracja')({
  component: TrenerRejestracja,
});

function TrenerRejestracja() {
  const { t } = useTranslation('trener');

  return (
    <div>
      <h1>{t('rejestracja.title')}</h1>
      <CompetitorRegistrationForm />
    </div>
  );
}
