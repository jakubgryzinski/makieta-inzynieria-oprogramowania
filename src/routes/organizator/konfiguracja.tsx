import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/organizator/konfiguracja')({
  component: OrganizatorKonfiguracja,
});

function OrganizatorKonfiguracja() {
  const { t } = useTranslation('organizator');

  return (
    <div>
      <h1>{t('konfiguracja.title')}</h1>
      {/* TODO: Form with Zod validation */}
      {/* Fields: Tournament name, Date, Location, Number of mats */}
      {/* Warm-up/rest stations, Number of referees, Max competitors/coach */}
      {/* Success toast: "Configuration has been saved" */}
    </div>
  );
}
