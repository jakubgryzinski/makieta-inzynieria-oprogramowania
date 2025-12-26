import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/trener/dyscypliny')({
  component: TrenerDyscypliny,
});

function TrenerDyscypliny() {
  const { t } = useTranslation('trener');

  return (
    <div>
      <h1>{t('dyscypliny.title')}</h1>
      {/* TODO: Grid of cards - Discipline name, Number of participants, Status badge */}
      {/* TODO: Button "View participants" → participants table */}
      {/* TODO: Participants table - Position | First Name | Club | Age | Weight */}
    </div>
  );
}
