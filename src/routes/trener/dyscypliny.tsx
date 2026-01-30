import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { DisciplinesView } from '@/features/trener/components';

export const Route = createFileRoute('/trener/dyscypliny')({
  component: TrenerDyscypliny,
});

function TrenerDyscypliny() {
  const { t } = useTranslation('trener');

  return (
    <div>
      <h1>{t('dyscypliny.title')}</h1>
      <DisciplinesView />
    </div>
  );
}
