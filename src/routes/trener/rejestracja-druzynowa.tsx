import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/trener/rejestracja-druzynowa')({
  component: TrenerRejestracjaDruzynowa,
});

function TrenerRejestracjaDruzynowa() {
  const { t } = useTranslation('trener');

  return (
    <div>
      <h1>{t('rejestracjaDruzynowa.title')}</h1>
      {/* TODO: Form with Zod validation */}
      {/* Fields: Team name, Type (Kata/Kumite), Age category */}
      {/* Checkboxes: competitor list (min 3, max 7) */}
      {/* Counter: "Selected: 4/7" */}
      {/* Success toast: "Team has been successfully registered" */}
    </div>
  );
}
