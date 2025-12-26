import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/trener/rejestracja')({
  component: TrenerRejestracja,
});

function TrenerRejestracja() {
  const { t } = useTranslation('trener');

  return (
    <div>
      <h1>{t('rejestracja.title')}</h1>
      {/* TODO: Form with Zod validation */}
      {/* Fields: First name, Last name, Age, Weight, Gender (M/F) */}
      {/* Checkboxes: Medical examination, Individual kata, Individual kumite */}
      {/* Dropdowns: Age category, Weight category */}
      {/* Success toast: "Competitor has been successfully registered" */}
    </div>
  );
}
