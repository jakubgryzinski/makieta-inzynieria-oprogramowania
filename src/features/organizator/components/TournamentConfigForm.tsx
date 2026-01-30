import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useSaveTournamentConfig } from '../hooks';
import type { TournamentConfig } from '../types';
import './TournamentConfigForm.css';

const configSchema = z.object({
  name: z.string().min(1, 'nameRequired'),
  date: z.string().min(1, 'dateRequired'),
  location: z.string().min(1, 'locationRequired'),
  mats: z.string()
    .refine(val => val !== '' && !isNaN(Number(val)), { message: 'matsRequired' })
    .refine(val => Number(val) >= 1, { message: 'matsMin' })
    .refine(val => Number(val) <= 20, { message: 'matsMax' }),
  warmUpStations: z.string()
    .refine(val => val !== '' && !isNaN(Number(val)), { message: 'warmUpStationsRequired' })
    .refine(val => Number(val) >= 0, { message: 'warmUpStationsMin' }),
  restStations: z.string()
    .refine(val => val !== '' && !isNaN(Number(val)), { message: 'restStationsRequired' })
    .refine(val => Number(val) >= 0, { message: 'restStationsMin' }),
  referees: z.string()
    .refine(val => val !== '' && !isNaN(Number(val)), { message: 'refereesRequired' })
    .refine(val => Number(val) >= 1, { message: 'refereesMin' }),
  maxCompetitorsPerCoach: z.string()
    .refine(val => val !== '' && !isNaN(Number(val)), { message: 'maxCompetitorsRequired' })
    .refine(val => Number(val) >= 1, { message: 'maxCompetitorsMin' }),
});

type ConfigFormData = z.infer<typeof configSchema>;

export function TournamentConfigForm() {
  const { t } = useTranslation('organizator');
  const [showToast, setShowToast] = useState(false);
  const saveMutation = useSaveTournamentConfig();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConfigFormData>({
    resolver: zodResolver(configSchema),
    defaultValues: {
      name: '',
      date: '',
      location: '',
      mats: '',
      warmUpStations: '',
      restStations: '',
      referees: '',
      maxCompetitorsPerCoach: '',
    },
  });

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const onSubmit = (data: ConfigFormData) => {
    const config: TournamentConfig = {
      name: data.name,
      date: data.date,
      location: data.location,
      mats: Number(data.mats),
      warmUpStations: Number(data.warmUpStations),
      restStations: Number(data.restStations),
      referees: Number(data.referees),
      maxCompetitorsPerCoach: Number(data.maxCompetitorsPerCoach),
    };

    saveMutation.mutate(config, {
      onSuccess: () => {
        setShowToast(true);
        reset();
      },
    });
  };

  return (
    <>
      {showToast && (
        <div className="config-form__toast">
          {t('konfiguracja.success')}
        </div>
      )}

      <form className="config-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="config-form__group">
          <label className="config-form__label">{t('konfiguracja.name')}</label>
          <input
            type="text"
            className={`config-form__input ${errors.name ? 'config-form__input--error' : ''}`}
            {...register('name')}
          />
          {errors.name && (
            <div className="config-form__error">
              {t(`konfiguracja.errors.${errors.name.message}`)}
            </div>
          )}
        </div>

        <div className="config-form__group">
          <label className="config-form__label">{t('konfiguracja.date')}</label>
          <input
            type="date"
            className={`config-form__input ${errors.date ? 'config-form__input--error' : ''}`}
            {...register('date')}
          />
          {errors.date && (
            <div className="config-form__error">
              {t(`konfiguracja.errors.${errors.date.message}`)}
            </div>
          )}
        </div>

        <div className="config-form__group">
          <label className="config-form__label">{t('konfiguracja.location')}</label>
          <input
            type="text"
            className={`config-form__input ${errors.location ? 'config-form__input--error' : ''}`}
            {...register('location')}
          />
          {errors.location && (
            <div className="config-form__error">
              {t(`konfiguracja.errors.${errors.location.message}`)}
            </div>
          )}
        </div>

        <div className="config-form__group">
          <label className="config-form__label">{t('konfiguracja.mats')}</label>
          <input
            type="number"
            className={`config-form__input ${errors.mats ? 'config-form__input--error' : ''}`}
            {...register('mats')}
          />
          {errors.mats && (
            <div className="config-form__error">
              {t(`konfiguracja.errors.${errors.mats.message}`)}
            </div>
          )}
        </div>

        <div className="config-form__group">
          <label className="config-form__label">{t('konfiguracja.warmUpStations')}</label>
          <input
            type="number"
            className={`config-form__input ${errors.warmUpStations ? 'config-form__input--error' : ''}`}
            {...register('warmUpStations')}
          />
          {errors.warmUpStations && (
            <div className="config-form__error">
              {t(`konfiguracja.errors.${errors.warmUpStations.message}`)}
            </div>
          )}
        </div>

        <div className="config-form__group">
          <label className="config-form__label">{t('konfiguracja.restStations')}</label>
          <input
            type="number"
            className={`config-form__input ${errors.restStations ? 'config-form__input--error' : ''}`}
            {...register('restStations')}
          />
          {errors.restStations && (
            <div className="config-form__error">
              {t(`konfiguracja.errors.${errors.restStations.message}`)}
            </div>
          )}
        </div>

        <div className="config-form__group">
          <label className="config-form__label">{t('konfiguracja.referees')}</label>
          <input
            type="number"
            className={`config-form__input ${errors.referees ? 'config-form__input--error' : ''}`}
            {...register('referees')}
          />
          {errors.referees && (
            <div className="config-form__error">
              {t(`konfiguracja.errors.${errors.referees.message}`)}
            </div>
          )}
        </div>

        <div className="config-form__group">
          <label className="config-form__label">{t('konfiguracja.maxCompetitorsPerCoach')}</label>
          <input
            type="number"
            className={`config-form__input ${errors.maxCompetitorsPerCoach ? 'config-form__input--error' : ''}`}
            {...register('maxCompetitorsPerCoach')}
          />
          {errors.maxCompetitorsPerCoach && (
            <div className="config-form__error">
              {t(`konfiguracja.errors.${errors.maxCompetitorsPerCoach.message}`)}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="config-form__submit"
          disabled={saveMutation.isPending}
        >
          {t('konfiguracja.submit')}
        </button>
      </form>
    </>
  );
}
