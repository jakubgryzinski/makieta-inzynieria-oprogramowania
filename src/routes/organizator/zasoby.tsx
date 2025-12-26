import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/organizator/zasoby')({
  component: OrganizatorZasoby,
});

function OrganizatorZasoby() {
  const { t } = useTranslation('organizator');

  return (
    <div>
      <h1>{t('zasoby.title')}</h1>
      {/* TODO: Tab "Equipment" - table with equipment list */}
      {/* TODO: Tab "Awards" - table with medals/trophies */}
      {/* TODO: Button "Download PDF" */}
      {/* TODO: Button "Download CSV" */}
    </div>
  );
}
