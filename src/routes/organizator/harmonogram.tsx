import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { ScheduleView } from '@/features/organizator/components';

export const Route = createFileRoute('/organizator/harmonogram')({
  component: OrganizatorHarmonogram,
});

function OrganizatorHarmonogram() {
  const { t } = useTranslation('organizator');

  return (
    <div>
      <h1>{t('harmonogram.title')}</h1>
      <ScheduleView />
    </div>
  );
}
