import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/zawodnik/harmonogram')({
  component: ZawodnikHarmonogram,
});

function ZawodnikHarmonogram() {
  const { t } = useTranslation('zawodnik');

  return (
    <div>
      <h1>{t('harmonogram.title')}</h1>
      {/* TODO: Schedule table - Competition | Time | Mat | Round | Opponent | Status */}
    </div>
  );
}
