import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { ScheduleTable } from '@/features/sedzia/components';

export const Route = createFileRoute('/sedzia/harmonogram')({
  component: SedziaHarmonogram,
});

function SedziaHarmonogram() {
  const { t } = useTranslation('sedzia');

  return (
    <div>
      <h1>{t('harmonogram.title')}</h1>
      <ScheduleTable />
    </div>
  );
}
