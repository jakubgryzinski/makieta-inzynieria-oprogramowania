import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/sedzia/harmonogram')({
  component: SedziaHarmonogram,
});

function SedziaHarmonogram() {
  const { t } = useTranslation('sedzia');

  return (
    <div>
      <h1>{t('harmonogram.title')}</h1>
      {/* TODO: Table - Time | Mat | Competition | Competitors | Status | Actions */}
      {/* TODO: Button "Enter result" in Actions column → /zapisywanie-wynikow */}
    </div>
  );
}
