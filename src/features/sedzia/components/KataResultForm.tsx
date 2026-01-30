import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useKataCompetitions, useKataCompetitors, useSubmitKataResult } from '../hooks';
import './KataResultForm.css';

const kataResultSchema = z.object({
  competitionId: z.string().min(1, 'competitionRequired'),
  competitorId: z.string().min(1, 'competitorRequired'),
  technicalPoints: z.string()
    .refine(val => val !== '' && !isNaN(Number(val)), { message: 'pointsRequired' })
    .refine(val => Number(val) >= 0, { message: 'pointsMin' })
    .refine(val => Number(val) <= 10, { message: 'pointsMax' }),
  athleticPoints: z.string()
    .refine(val => val !== '' && !isNaN(Number(val)), { message: 'pointsRequired' })
    .refine(val => Number(val) >= 0, { message: 'pointsMin' })
    .refine(val => Number(val) <= 10, { message: 'pointsMax' }),
});

type KataFormData = z.infer<typeof kataResultSchema>;

export function KataResultForm() {
  const { t } = useTranslation('sedzia');
  const [showToast, setShowToast] = useState(false);
  const { data: competitions, isLoading: loadingCompetitions } = useKataCompetitions();
  const submitMutation = useSubmitKataResult();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<KataFormData>({
    resolver: zodResolver(kataResultSchema),
    defaultValues: {
      competitionId: '',
      competitorId: '',
      technicalPoints: '',
      athleticPoints: '',
    },
  });

  const selectedCompetitionId = watch('competitionId');
  const { data: competitors, isLoading: loadingCompetitors } = useKataCompetitors(selectedCompetitionId);

  // Reset competitor when competition changes
  useEffect(() => {
    setValue('competitorId', '');
  }, [selectedCompetitionId, setValue]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const onSubmit = (data: KataFormData) => {
    submitMutation.mutate(
      {
        competitionId: data.competitionId,
        competitorId: data.competitorId,
        technicalPoints: Number(data.technicalPoints),
        athleticPoints: Number(data.athleticPoints),
      },
      {
        onSuccess: () => {
          setShowToast(true);
          reset();
        },
      }
    );
  };

  if (loadingCompetitions) {
    return <div>{t('common:loading', 'Ładowanie...')}</div>;
  }

  return (
    <>
      {showToast && (
        <div className="kata-form__toast">
          {t('zapisywanieWynikow.kata.success')}
        </div>
      )}

      <form className="kata-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="kata-form__group">
          <label className="kata-form__label">
            {t('zapisywanieWynikow.kata.selectCompetition')}
          </label>
          <select
            className={`kata-form__select ${errors.competitionId ? 'kata-form__select--error' : ''}`}
            {...register('competitionId')}
          >
            <option value="">{t('zapisywanieWynikow.kata.selectCompetitionPlaceholder')}</option>
            {competitions?.map((comp) => (
              <option key={comp.id} value={comp.id}>
                {comp.name}
              </option>
            ))}
          </select>
          {errors.competitionId && (
            <div className="kata-form__error">
              {t(`zapisywanieWynikow.kata.errors.${errors.competitionId.message}`)}
            </div>
          )}
        </div>

        {selectedCompetitionId && (
          <div className="kata-form__group">
            <label className="kata-form__label">
              {t('zapisywanieWynikow.kata.selectCompetitor')}
            </label>
            {loadingCompetitors ? (
              <div>{t('common:loading', 'Ładowanie...')}</div>
            ) : (
              <select
                className={`kata-form__select ${errors.competitorId ? 'kata-form__select--error' : ''}`}
                {...register('competitorId')}
              >
                <option value="">{t('zapisywanieWynikow.kata.selectCompetitorPlaceholder')}</option>
                {competitors?.map((comp) => (
                  <option key={comp.id} value={comp.id}>
                    {comp.name}
                  </option>
                ))}
              </select>
            )}
            {errors.competitorId && (
              <div className="kata-form__error">
                {t(`zapisywanieWynikow.kata.errors.${errors.competitorId.message}`)}
              </div>
            )}
          </div>
        )}

        {selectedCompetitionId && (
          <div className="kata-form__points-row">
            <div className="kata-form__group">
              <label className="kata-form__label">
                {t('zapisywanieWynikow.kata.technicalPoints')}
              </label>
              <input
                type="number"
                min="0"
                max="10"
                step="0.1"
                className={`kata-form__input ${errors.technicalPoints ? 'kata-form__input--error' : ''}`}
                {...register('technicalPoints')}
              />
              {errors.technicalPoints && (
                <div className="kata-form__error">
                  {t(`zapisywanieWynikow.kata.errors.${errors.technicalPoints.message}`)}
                </div>
              )}
            </div>

            <div className="kata-form__group">
              <label className="kata-form__label">
                {t('zapisywanieWynikow.kata.athleticPoints')}
              </label>
              <input
                type="number"
                min="0"
                max="10"
                step="0.1"
                className={`kata-form__input ${errors.athleticPoints ? 'kata-form__input--error' : ''}`}
                {...register('athleticPoints')}
              />
              {errors.athleticPoints && (
                <div className="kata-form__error">
                  {t(`zapisywanieWynikow.kata.errors.${errors.athleticPoints.message}`)}
                </div>
              )}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="kata-form__submit"
          disabled={submitMutation.isPending || !selectedCompetitionId}
        >
          {t('zapisywanieWynikow.kata.submit')}
        </button>
      </form>
    </>
  );
}
