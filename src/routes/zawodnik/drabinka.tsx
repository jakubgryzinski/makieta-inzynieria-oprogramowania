import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/zawodnik/drabinka')({
  component: ZawodnikDrabinka,
});

function ZawodnikDrabinka() {
  const { t } = useTranslation('zawodnik');

  return (
    <div>
      <h1>{t('drabinka.title')}</h1>
      {/* TODO: Competition selection dropdown */}
      {/* TODO: Bracket tree (16 participants) */}
      {/* TODO: Highlight own position */}
    </div>
  );
}
