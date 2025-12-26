import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/trener/zawodnicy')({
  component: TrenerZawodnicy,
});

function TrenerZawodnicy() {
  const { t } = useTranslation('trener');

  return (
    <div>
      <h1>{t('zawodnicy.title')}</h1>
      {/* TODO: Table - First Name | Age | Competitions | Next match | Last result */}
    </div>
  );
}
