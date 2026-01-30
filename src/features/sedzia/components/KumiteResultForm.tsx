import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useKumiteCompetitions, useSubmitKumiteResult } from '../hooks';
import type { KumiteCompetition } from '../types';
import './KumiteResultForm.css';

const kumiteResultSchema = z.object({
  competitionId: z.string().min(1, 'competitionRequired'),
  competitor1Points: z.string()
    .refine(val => val !== '' && !isNaN(Number(val)), { message: 'pointsRequired' })
    .refine(val => Number(val) >= 0, { message: 'pointsMin' })
    .refine(val => Number(val) <= 10, { message: 'pointsMax' }),
  competitor2Points: z.string()
    .refine(val => val !== '' && !isNaN(Number(val)), { message: 'pointsRequired' })
    .refine(val => Number(val) >= 0, { message: 'pointsMin' })
    .refine(val => Number(val) <= 10, { message: 'pointsMax' }),
  winnerId: z.enum(['competitor1', 'competitor2'], { message: 'winnerRequired' }),
});

type KumiteFormData = z.infer<typeof kumiteResultSchema>;

export function KumiteResultForm() {
  const { t } = useTranslation('sedzia');
  const [showToast, setShowToast] = useState(false);
  const { data: competitions, isLoading } = useKumiteCompetitions();
  const submitMutation = useSubmitKumiteResult();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<KumiteFormData>({
    resolver: zodResolver(kumiteResultSchema),
    defaultValues: {
      competitionId: '',
      competitor1Points: '',
      competitor2Points: '',
    },
  });

  const selectedCompetitionId = watch('competitionId');
  const selectedCompetition: KumiteCompetition | undefined = competitions?.find(
    (c) => c.id === selectedCompetitionId
  );

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const onSubmit = (data: KumiteFormData) => {
    submitMutation.mutate(
      {
        competitionId: data.competitionId,
        competitor1Points: Number(data.competitor1Points),
        competitor2Points: Number(data.competitor2Points),
        winnerId: data.winnerId,
      },
      {
        onSuccess: () => {
          setShowToast(true);
          reset();
        },
      }
    );
  };

  if (isLoading) {
    return <div>{t('common:loading', 'Ladowanie...')}</div>;
  }

  return (
    <>
      {showToast && (
        <div className="kumite-form__toast">
          {t('zapisywanieWynikow.kumite.success')}
        </div>
      )}

      <form className="kumite-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="kumite-form__group">
          <label className="kumite-form__label">
            {t('zapisywanieWynikow.kumite.selectCompetition')}
          </label>
          <select
            className={`kumite-form__select ${errors.competitionId ? 'kumite-form__select--error' : ''}`}
            {...register('competitionId')}
          >
            <option value="">{t('zapisywanieWynikow.kumite.selectPlaceholder')}</option>
            {competitions?.map((comp) => (
              <option key={comp.id} value={comp.id}>
                {comp.name}
              </option>
            ))}
          </select>
          {errors.competitionId && (
            <div className="kumite-form__error">
              {t(`zapisywanieWynikow.kumite.errors.${errors.competitionId.message}`)}
            </div>
          )}
        </div>

        {selectedCompetition && (
          <>
            <div className="kumite-form__competitors">
              <div className="kumite-form__competitor">
                <div className="kumite-form__competitor-name">
                  {selectedCompetition.competitor1}
                </div>
                <label className="kumite-form__points-label">
                  {t('zapisywanieWynikow.kumite.points')}
                </label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  className={`kumite-form__input ${errors.competitor1Points ? 'kumite-form__input--error' : ''}`}
                  {...register('competitor1Points')}
                />
                {errors.competitor1Points && (
                  <div className="kumite-form__error">
                    {t(`zapisywanieWynikow.kumite.errors.${errors.competitor1Points.message}`)}
                  </div>
                )}
              </div>

              <div className="kumite-form__competitor">
                <div className="kumite-form__competitor-name">
                  {selectedCompetition.competitor2}
                </div>
                <label className="kumite-form__points-label">
                  {t('zapisywanieWynikow.kumite.points')}
                </label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  className={`kumite-form__input ${errors.competitor2Points ? 'kumite-form__input--error' : ''}`}
                  {...register('competitor2Points')}
                />
                {errors.competitor2Points && (
                  <div className="kumite-form__error">
                    {t(`zapisywanieWynikow.kumite.errors.${errors.competitor2Points.message}`)}
                  </div>
                )}
              </div>
            </div>

            <div className="kumite-form__group">
              <label className="kumite-form__label">
                {t('zapisywanieWynikow.kumite.winner')}
              </label>
              <div className="kumite-form__winner-group">
                <label className="kumite-form__radio-label">
                  <input type="radio" value="competitor1" {...register('winnerId')} />
                  {selectedCompetition.competitor1}
                </label>
                <label className="kumite-form__radio-label">
                  <input type="radio" value="competitor2" {...register('winnerId')} />
                  {selectedCompetition.competitor2}
                </label>
              </div>
              {errors.winnerId && (
                <div className="kumite-form__error">
                  {t(`zapisywanieWynikow.kumite.errors.${errors.winnerId.message}`)}
                </div>
              )}
            </div>
          </>
        )}

        <button
          type="submit"
          className="kumite-form__submit"
          disabled={submitMutation.isPending || !selectedCompetition}
        >
          {t('zapisywanieWynikow.kumite.submit')}
        </button>
      </form>
    </>
  );
}
