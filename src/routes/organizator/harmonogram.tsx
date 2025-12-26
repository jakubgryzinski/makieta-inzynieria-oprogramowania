import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/organizator/harmonogram')({
  component: OrganizatorHarmonogram,
});

function OrganizatorHarmonogram() {
  const { t } = useTranslation('organizator');

  return (
    <div>
      <h1>{t('harmonogram.title')}</h1>
      {/* TODO: Mat assignment table - Time | Mat1 | Mat2 | ... | Mat6 | Referees */}
      {/* TODO: Dropdown "Competition" + bracket tree for selected competition */}
    </div>
  );
}
