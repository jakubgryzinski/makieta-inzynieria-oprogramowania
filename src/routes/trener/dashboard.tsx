import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/trener/dashboard')({
  component: TrenerDashboard,
});

function TrenerDashboard() {
  const { t } = useTranslation('trener');

  return (
    <div>
      <h1>{t('dashboard.title')}</h1>
      {/* TODO: Competitors table - First Name Last Name | Competitions | Next match */}
      {/* TODO: Button "Register competitor" → /rejestracja */}
    </div>
  );
}
