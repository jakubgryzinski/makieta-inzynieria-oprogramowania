import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useCompetitions, useAddCompetition, useDeleteCompetition } from '../hooks';
import type { CompetitionCreate, CompetitionType, CompetitionGender } from '../types';
import './CompetitionsTable.css';

const competitionSchema = z.object({
  name: z.string().min(1, 'nameRequired'),
  type: z.enum(['kata', 'kumite'], { message: 'typeRequired' }),
  gender: z.enum(['M', 'K', 'mixed'], { message: 'genderRequired' }),
  ageMin: z.string()
    .refine((val) => val !== '' && !isNaN(Number(val)), { message: 'ageMinRequired' })
    .refine((val) => Number(val) >= 6, { message: 'ageMinMin' })
    .refine((val) => Number(val) <= 60, { message: 'ageMinMax' }),
  ageMax: z.string()
    .refine((val) => val !== '' && !isNaN(Number(val)), { message: 'ageMaxRequired' })
    .refine((val) => Number(val) >= 6, { message: 'ageMaxMin' })
    .refine((val) => Number(val) <= 60, { message: 'ageMaxMax' }),
  weightMin: z.string().optional(),
  weightMax: z.string().optional(),
});

type CompetitionFormData = z.infer<typeof competitionSchema>;

export function CompetitionsTable() {
  const { t } = useTranslation('organizator');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const { data: competitions, isLoading } = useCompetitions();
  const addMutation = useAddCompetition();
  const deleteMutation = useDeleteCompetition();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<CompetitionFormData>({
    resolver: zodResolver(competitionSchema),
    defaultValues: {
      name: '',
      type: undefined,
      gender: undefined,
      ageMin: '',
      ageMax: '',
      weightMin: '',
      weightMax: '',
    },
  });

  const watchType = watch('type');

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const showToastNotification = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const onSubmit = (data: CompetitionFormData) => {
    const competition: CompetitionCreate = {
      name: data.name,
      type: data.type as CompetitionType,
      gender: data.gender as CompetitionGender,
      ageMin: Number(data.ageMin),
      ageMax: Number(data.ageMax),
      ...(data.weightMin && { weightMin: Number(data.weightMin) }),
      ...(data.weightMax && { weightMax: Number(data.weightMax) }),
    };

    addMutation.mutate(competition, {
      onSuccess: () => {
        showToastNotification(t('konkurencje.addSuccess'));
        setIsModalOpen(false);
        reset();
      },
    });
  };

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        showToastNotification(t('konkurencje.deleteSuccess'));
      },
    });
  };

  const formatAgeRange = (min: number, max: number) => `${min}-${max}`;
  const formatWeightRange = (min?: number, max?: number) => {
    if (min && max) return `${min}-${max} kg`;
    return '-';
  };

  const getGenderLabel = (gender: CompetitionGender) => {
    const labels: Record<CompetitionGender, string> = {
      M: t('konkurencje.genders.M'),
      K: t('konkurencje.genders.K'),
      mixed: t('konkurencje.genders.mixed'),
    };
    return labels[gender];
  };

  if (isLoading) {
    return <div>{t('konkurencje.loading')}</div>;
  }

  return (
    <div className="competitions">
      {showToast && <div className="competitions__toast">{toastMessage}</div>}

      <div className="competitions__header">
        <span>{competitions?.length || 0} {t('konkurencje.competitionsCount')}</span>
        <button className="competitions__add-btn" onClick={() => setIsModalOpen(true)}>
          + {t('konkurencje.addButton')}
        </button>
      </div>

      <table className="competitions__table">
        <thead>
          <tr>
            <th>{t('konkurencje.table.name')}</th>
            <th>{t('konkurencje.table.type')}</th>
            <th>{t('konkurencje.table.gender')}</th>
            <th>{t('konkurencje.table.age')}</th>
            <th>{t('konkurencje.table.weight')}</th>
            <th>{t('konkurencje.table.participants')}</th>
            <th>{t('konkurencje.table.actions')}</th>
          </tr>
        </thead>
        <tbody>
          {competitions?.map((competition) => (
            <tr key={competition.id}>
              <td>{competition.name}</td>
              <td>
                <span className={`competitions__type-badge competitions__type-badge--${competition.type}`}>
                  {competition.type === 'kata' ? 'Kata' : 'Kumite'}
                </span>
              </td>
              <td>{getGenderLabel(competition.gender)}</td>
              <td>{formatAgeRange(competition.ageMin, competition.ageMax)}</td>
              <td>{formatWeightRange(competition.weightMin, competition.weightMax)}</td>
              <td>{competition.participants}</td>
              <td>
                <button
                  className="competitions__delete-btn"
                  onClick={() => handleDelete(competition.id)}
                  disabled={deleteMutation.isPending}
                >
                  {t('konkurencje.delete')}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="competitions__modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="competitions__modal" onClick={(e) => e.stopPropagation()}>
            <div className="competitions__modal-header">
              <h2 className="competitions__modal-title">{t('konkurencje.modal.title')}</h2>
              <button className="competitions__modal-close" onClick={() => setIsModalOpen(false)}>
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="competitions__form-group">
                <label className="competitions__form-label">{t('konkurencje.modal.name')}</label>
                <input
                  type="text"
                  className={`competitions__form-input ${errors.name ? 'competitions__form-input--error' : ''}`}
                  {...register('name')}
                />
                {errors.name && (
                  <div className="competitions__form-error">
                    {t(`konkurencje.errors.${errors.name.message}`)}
                  </div>
                )}
              </div>

              <div className="competitions__form-group">
                <label className="competitions__form-label">{t('konkurencje.modal.type')}</label>
                <select
                  className={`competitions__form-select ${errors.type ? 'competitions__form-select--error' : ''}`}
                  {...register('type')}
                >
                  <option value="">{t('konkurencje.modal.typePlaceholder')}</option>
                  <option value="kata">Kata</option>
                  <option value="kumite">Kumite</option>
                </select>
                {errors.type && (
                  <div className="competitions__form-error">
                    {t(`konkurencje.errors.${errors.type.message}`)}
                  </div>
                )}
              </div>

              <div className="competitions__form-group">
                <label className="competitions__form-label">{t('konkurencje.modal.gender')}</label>
                <select
                  className={`competitions__form-select ${errors.gender ? 'competitions__form-select--error' : ''}`}
                  {...register('gender')}
                >
                  <option value="">{t('konkurencje.modal.genderPlaceholder')}</option>
                  <option value="M">{t('konkurencje.genders.M')}</option>
                  <option value="K">{t('konkurencje.genders.K')}</option>
                  <option value="mixed">{t('konkurencje.genders.mixed')}</option>
                </select>
                {errors.gender && (
                  <div className="competitions__form-error">
                    {t(`konkurencje.errors.${errors.gender.message}`)}
                  </div>
                )}
              </div>

              <div className="competitions__form-row">
                <div className="competitions__form-group">
                  <label className="competitions__form-label">{t('konkurencje.modal.ageMin')}</label>
                  <input
                    type="number"
                    className={`competitions__form-input ${errors.ageMin ? 'competitions__form-input--error' : ''}`}
                    {...register('ageMin')}
                  />
                  {errors.ageMin && (
                    <div className="competitions__form-error">
                      {t(`konkurencje.errors.${errors.ageMin.message}`)}
                    </div>
                  )}
                </div>

                <div className="competitions__form-group">
                  <label className="competitions__form-label">{t('konkurencje.modal.ageMax')}</label>
                  <input
                    type="number"
                    className={`competitions__form-input ${errors.ageMax ? 'competitions__form-input--error' : ''}`}
                    {...register('ageMax')}
                  />
                  {errors.ageMax && (
                    <div className="competitions__form-error">
                      {t(`konkurencje.errors.${errors.ageMax.message}`)}
                    </div>
                  )}
                </div>
              </div>

              {watchType === 'kumite' && (
                <div className="competitions__form-row">
                  <div className="competitions__form-group">
                    <label className="competitions__form-label">{t('konkurencje.modal.weightMin')}</label>
                    <input
                      type="number"
                      className="competitions__form-input"
                      {...register('weightMin')}
                    />
                  </div>

                  <div className="competitions__form-group">
                    <label className="competitions__form-label">{t('konkurencje.modal.weightMax')}</label>
                    <input
                      type="number"
                      className="competitions__form-input"
                      {...register('weightMax')}
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="competitions__form-submit"
                disabled={addMutation.isPending}
              >
                {t('konkurencje.modal.submit')}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
