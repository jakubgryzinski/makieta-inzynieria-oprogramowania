import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useRegisterCompetitor } from '../hooks';
import type { AgeCategory, WeightCategory, Gender } from '../types';
import './CompetitorRegistrationForm.css';

const AGE_CATEGORIES: AgeCategory[] = ['dzieci', 'mlodzik', 'junior', 'senior'];
const WEIGHT_CATEGORIES: WeightCategory[] = ['lekka', 'srednia', 'ciezka'];

const registrationSchema = z.object({
  firstName: z.string().min(1, 'firstNameRequired'),
  lastName: z.string().min(1, 'lastNameRequired'),
  age: z.string().refine(val => val !== '' && !isNaN(Number(val)), { message: 'ageRequired' })
    .refine(val => Number(val) >= 8, { message: 'ageMin' })
    .refine(val => Number(val) <= 50, { message: 'ageMax' }),
  weight: z.string().refine(val => val !== '' && !isNaN(Number(val)), { message: 'weightRequired' })
    .refine(val => Number(val) >= 20, { message: 'weightMin' }),
  gender: z.enum(['M', 'K'], { message: 'genderRequired' }),
  medicalExam: z.boolean().refine(val => val === true, { message: 'medicalExamRequired' }),
  kata: z.boolean(),
  kumite: z.boolean(),
  ageCategory: z.string().min(1, 'ageCategoryRequired'),
  weightCategory: z.string().optional(),
}).refine((data) => data.kata || data.kumite, {
  message: 'competitionRequired',
  path: ['kata'],
}).refine((data) => !data.kumite || (data.weightCategory && data.weightCategory !== ''), {
  message: 'weightCategoryRequired',
  path: ['weightCategory'],
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

export function CompetitorRegistrationForm() {
  const { t } = useTranslation('trener');
  const [showToast, setShowToast] = useState(false);
  const registerMutation = useRegisterCompetitor();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      weight: '',
      medicalExam: false,
      kata: false,
      kumite: false,
      ageCategory: '',
      weightCategory: '',
    },
  });

  const kumiteSelected = watch('kumite');

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const onSubmit = (data: RegistrationFormData) => {
    registerMutation.mutate(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        age: Number(data.age),
        weight: Number(data.weight),
        gender: data.gender as Gender,
        medicalExam: data.medicalExam,
        kata: data.kata,
        kumite: data.kumite,
        ageCategory: data.ageCategory as AgeCategory,
        weightCategory: data.weightCategory ? (data.weightCategory as WeightCategory) : undefined,
      },
      {
        onSuccess: () => {
          setShowToast(true);
          reset();
        },
      }
    );
  };

  return (
    <>
      {showToast && (
        <div className="registration-form__toast">
          {t('rejestracja.success')}
        </div>
      )}

      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="registration-form__group">
          <label className="registration-form__label">{t('rejestracja.firstName')}</label>
          <input
            type="text"
            className={`registration-form__input ${errors.firstName ? 'registration-form__input--error' : ''}`}
            {...register('firstName')}
          />
          {errors.firstName && (
            <div className="registration-form__error">
              {t(`rejestracja.errors.${errors.firstName.message}`)}
            </div>
          )}
        </div>

        <div className="registration-form__group">
          <label className="registration-form__label">{t('rejestracja.lastName')}</label>
          <input
            type="text"
            className={`registration-form__input ${errors.lastName ? 'registration-form__input--error' : ''}`}
            {...register('lastName')}
          />
          {errors.lastName && (
            <div className="registration-form__error">
              {t(`rejestracja.errors.${errors.lastName.message}`)}
            </div>
          )}
        </div>

        <div className="registration-form__group">
          <label className="registration-form__label">{t('rejestracja.age')}</label>
          <input
            type="number"
            className={`registration-form__input ${errors.age ? 'registration-form__input--error' : ''}`}
            {...register('age')}
          />
          {errors.age && (
            <div className="registration-form__error">
              {t(`rejestracja.errors.${errors.age.message}`)}
            </div>
          )}
        </div>

        <div className="registration-form__group">
          <label className="registration-form__label">{t('rejestracja.weight')}</label>
          <input
            type="number"
            step="0.1"
            className={`registration-form__input ${errors.weight ? 'registration-form__input--error' : ''}`}
            {...register('weight')}
          />
          {errors.weight && (
            <div className="registration-form__error">
              {t(`rejestracja.errors.${errors.weight.message}`)}
            </div>
          )}
        </div>

        <div className="registration-form__group">
          <label className="registration-form__label">{t('rejestracja.gender')}</label>
          <div className="registration-form__radio-group">
            <label className="registration-form__checkbox-label">
              <input type="radio" value="M" {...register('gender')} />
              {t('rejestracja.genderM')}
            </label>
            <label className="registration-form__checkbox-label">
              <input type="radio" value="K" {...register('gender')} />
              {t('rejestracja.genderK')}
            </label>
          </div>
          {errors.gender && (
            <div className="registration-form__error">
              {t(`rejestracja.errors.${errors.gender.message}`)}
            </div>
          )}
        </div>

        <div className="registration-form__group">
          <label className="registration-form__checkbox-label">
            <input type="checkbox" {...register('medicalExam')} />
            {t('rejestracja.medicalExam')}
          </label>
          {errors.medicalExam && (
            <div className="registration-form__error">
              {t(`rejestracja.errors.${errors.medicalExam.message}`)}
            </div>
          )}
        </div>

        <div className="registration-form__group">
          <label className="registration-form__label">{t('rejestracja.competitions')}</label>
          <div className="registration-form__checkbox-group">
            <label className="registration-form__checkbox-label">
              <input type="checkbox" {...register('kata')} />
              {t('rejestracja.kata')}
            </label>
            <label className="registration-form__checkbox-label">
              <input type="checkbox" {...register('kumite')} />
              {t('rejestracja.kumite')}
            </label>
          </div>
          {errors.kata && (
            <div className="registration-form__error">
              {t(`rejestracja.errors.${errors.kata.message}`)}
            </div>
          )}
        </div>

        <div className="registration-form__group">
          <label className="registration-form__label">{t('rejestracja.ageCategory')}</label>
          <select
            className={`registration-form__select ${errors.ageCategory ? 'registration-form__select--error' : ''}`}
            {...register('ageCategory')}
          >
            <option value="">{t('rejestracja.ageCategoryPlaceholder')}</option>
            {AGE_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {t(`rejestracja.ageCategories.${cat}`)}
              </option>
            ))}
          </select>
          {errors.ageCategory && (
            <div className="registration-form__error">
              {t(`rejestracja.errors.${errors.ageCategory.message}`)}
            </div>
          )}
        </div>

        {kumiteSelected && (
          <div className="registration-form__group">
            <label className="registration-form__label">{t('rejestracja.weightCategory')}</label>
            <select
              className={`registration-form__select ${errors.weightCategory ? 'registration-form__select--error' : ''}`}
              {...register('weightCategory')}
            >
              <option value="">{t('rejestracja.weightCategoryPlaceholder')}</option>
              {WEIGHT_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {t(`rejestracja.weightCategories.${cat}`)}
                </option>
              ))}
            </select>
            {errors.weightCategory && (
              <div className="registration-form__error">
                {t(`rejestracja.errors.${errors.weightCategory.message}`)}
              </div>
            )}
          </div>
        )}

        <button
          type="submit"
          className="registration-form__submit"
          disabled={registerMutation.isPending}
        >
          {t('rejestracja.submit')}
        </button>
      </form>
    </>
  );
}
