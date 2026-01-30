import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { KumiteResultForm } from '@/features/sedzia/components';

export const Route = createFileRoute('/sedzia/zapisywanie-wynikow')({
  component: SedziaZapisywanieWynikow,
});

function SedziaZapisywanieWynikow() {
  const { t } = useTranslation('sedzia');

  return (
    <div>
      <h1>{t('zapisywanieWynikow.title')}</h1>

      <h2>{t('zapisywanieWynikow.kumite.sectionTitle')}</h2>
      <KumiteResultForm />

      {/* TODO: Phase 9 - KATA form - competitor dropdown, technical/athletic points */}
    </div>
  );
}
