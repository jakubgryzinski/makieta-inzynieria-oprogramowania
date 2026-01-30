import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { CompetitorsListTable } from '@/features/trener/components';
import { useFullCompetitors } from '@/features/trener/hooks';

export const Route = createFileRoute('/trener/zawodnicy')({
  component: TrenerZawodnicy,
});

function TrenerZawodnicy() {
  const { t } = useTranslation('trener');
  const { data: competitors, isLoading } = useFullCompetitors();

  if (isLoading) {
    return <div>{t('common:loading')}</div>;
  }

  return (
    <div>
      <h1>{t('zawodnicy.title')}</h1>
      {competitors && <CompetitorsListTable competitors={competitors} />}
    </div>
  );
}
