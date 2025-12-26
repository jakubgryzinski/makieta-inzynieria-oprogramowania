import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/organizator/konkurencje')({
  component: OrganizatorKonkurencje,
});

function OrganizatorKonkurencje() {
  const { t } = useTranslation('organizator');

  return (
    <div>
      <h1>{t('konkurencje.title')}</h1>
      {/* TODO: Button "+ Add competition" */}
      {/* TODO: Table - Name | Type | Gender | Age | Weight | Participants | Actions */}
      {/* TODO: Add modal with Zod validation */}
      {/* Success toast: "Competition has been added" */}
    </div>
  );
}
