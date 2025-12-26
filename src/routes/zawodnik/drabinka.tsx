import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useCurrentCompetitor, useCompetitions, useBracket } from '@/features/competitors/hooks';
import { BracketTree } from '@/features/competitors/components';
import './drabinka.css';

export const Route = createFileRoute('/zawodnik/drabinka')({
  component: ZawodnikDrabinka,
});

function ZawodnikDrabinka() {
  const { t } = useTranslation('zawodnik');
  const [selectedCompetition, setSelectedCompetition] = useState<string | null>(null);

  const { data: competitor, isLoading: isLoadingCompetitor } = useCurrentCompetitor();
  const { data: competitions, isLoading: isLoadingCompetitions } = useCompetitions();
  const { data: bracket, isLoading: isLoadingBracket } = useBracket(selectedCompetition);

  if (isLoadingCompetitor || isLoadingCompetitions) {
    return <div className="zawodnik-drabinka">{t('common.loading', { ns: 'common' })}</div>;
  }

  const competitionsArray = Array.isArray(competitions) ? competitions : [];

  return (
    <div className="zawodnik-drabinka">
      <h1 className="zawodnik-drabinka__title">{t('drabinka.title')}</h1>

      <div className="zawodnik-drabinka__selector">
        <label htmlFor="competition-select" className="zawodnik-drabinka__label">
          {t('drabinka.selectCompetition')}:
        </label>
        <select
          id="competition-select"
          className="zawodnik-drabinka__select"
          value={selectedCompetition || ''}
          onChange={(e) => setSelectedCompetition(e.target.value || null)}
        >
          <option value="">{t('drabinka.chooseCompetition')}</option>
          {competitionsArray.map((competition) => (
            <option key={competition.id} value={competition.id}>
              {competition.name}
            </option>
          ))}
        </select>
      </div>

      {isLoadingBracket && (
        <p className="zawodnik-drabinka__loading">{t('common.loading', { ns: 'common' })}</p>
      )}

      {!selectedCompetition && !isLoadingBracket && (
        <p className="zawodnik-drabinka__message">{t('drabinka.chooseCompetition')}</p>
      )}

      {selectedCompetition && bracket && Array.isArray(bracket) && bracket.length > 0 && competitor && (
        <BracketTree matches={bracket} currentCompetitorId={competitor.id} />
      )}

      {selectedCompetition && (!bracket || !Array.isArray(bracket) || bracket.length === 0) && !isLoadingBracket && (
        <p className="zawodnik-drabinka__message">{t('drabinka.noBracket')}</p>
      )}
    </div>
  );
}
