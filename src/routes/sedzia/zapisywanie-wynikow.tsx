import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/sedzia/zapisywanie-wynikow')({
  component: SedziaZapisywanieWynikow,
});

function SedziaZapisywanieWynikow() {
  const { t } = useTranslation('sedzia');

  return (
    <div>
      <h1>{t('zapisywanieWynikow.title')}</h1>
      {/* TODO: Dropdown "Competition" */}
      {/* TODO: KUMITE form - 2 competitors, points, winner radio */}
      {/* TODO: KATA form - competitor dropdown, technical/athletic points */}
      {/* Success toast: "Result has been saved successfully" */}
    </div>
  );
}
