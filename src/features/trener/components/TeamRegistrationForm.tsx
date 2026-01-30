import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useTeamMembers, useRegisterTeam } from '../hooks';
import type { AgeCategory, TeamType } from '../types';
import './CompetitorRegistrationForm.css';

const AGE_CATEGORIES: AgeCategory[] = ['dzieci', 'mlodzik', 'junior', 'senior'];
const TEAM_TYPES: TeamType[] = ['kata', 'kumite'];

const teamRegistrationSchema = z.object({
  teamName: z.string().min(1, 'teamNameRequired'),
  type: z.enum(['kata', 'kumite'], { message: 'typeRequired' }),
  ageCategory: z.string().min(1, 'ageCategoryRequired'),
  memberIds: z.array(z.string()).min(3, 'minMembers').max(4, 'maxMembers'),
});

type TeamFormData = z.infer<typeof teamRegistrationSchema>;

export function TeamRegistrationForm() {
  const { t } = useTranslation('trener');
  const [showToast, setShowToast] = useState(false);
  const { data: teamMembers = [], isLoading } = useTeamMembers();
  const registerMutation = useRegisterTeam();

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<TeamFormData>({
    resolver: zodResolver(teamRegistrationSchema),
    defaultValues: {
      teamName: '',
      type: undefined,
      ageCategory: '',
      memberIds: [],
    },
  });

  const selectedMembers = watch('memberIds') || [];

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const onSubmit = (data: TeamFormData) => {
    registerMutation.mutate(
      {
        teamName: data.teamName,
        type: data.type as TeamType,
        ageCategory: data.ageCategory as AgeCategory,
        memberIds: data.memberIds,
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
    return <div>{t('loading', { ns: 'common' })}</div>;
  }

  return (
    <>
      {showToast && (
        <div className="registration-form__toast">
          {t('rejestracjaDruzynowa.success')}
        </div>
      )}

      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="registration-form__group">
          <label className="registration-form__label">
            {t('rejestracjaDruzynowa.teamName')}
          </label>
          <input
            type="text"
            className={`registration-form__input ${errors.teamName ? 'registration-form__input--error' : ''}`}
            {...register('teamName')}
          />
          {errors.teamName && (
            <div className="registration-form__error">
              {t(`rejestracjaDruzynowa.errors.${errors.teamName.message}`)}
            </div>
          )}
        </div>

        <div className="registration-form__group">
          <label className="registration-form__label">
            {t('rejestracjaDruzynowa.type')}
          </label>
          <select
            className={`registration-form__select ${errors.type ? 'registration-form__select--error' : ''}`}
            {...register('type')}
          >
            <option value="">{t('rejestracjaDruzynowa.typePlaceholder')}</option>
            {TEAM_TYPES.map((type) => (
              <option key={type} value={type}>
                {t(`rejestracjaDruzynowa.types.${type}`)}
              </option>
            ))}
          </select>
          {errors.type && (
            <div className="registration-form__error">
              {t(`rejestracjaDruzynowa.errors.${errors.type.message}`)}
            </div>
          )}
        </div>

        <div className="registration-form__group">
          <label className="registration-form__label">
            {t('rejestracjaDruzynowa.ageCategory')}
          </label>
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
              {t(`rejestracjaDruzynowa.errors.${errors.ageCategory.message}`)}
            </div>
          )}
        </div>

        <div className="registration-form__group">
          <label className="registration-form__label">
            {t('rejestracjaDruzynowa.members')}
            <span className="registration-form__counter">
              {' '}({t('rejestracjaDruzynowa.selected')}: {selectedMembers.length}/4)
            </span>
          </label>
          <Controller
            name="memberIds"
            control={control}
            render={({ field }) => (
              <div className="registration-form__checkbox-group">
                {teamMembers.map((member) => (
                  <label key={member.id} className="registration-form__checkbox-label">
                    <input
                      type="checkbox"
                      checked={field.value?.includes(member.id) || false}
                      onChange={(e) => {
                        const newValue = e.target.checked
                          ? [...(field.value || []), member.id]
                          : (field.value || []).filter((id) => id !== member.id);
                        field.onChange(newValue);
                      }}
                    />
                    {member.firstName} {member.lastName}
                  </label>
                ))}
              </div>
            )}
          />
          {errors.memberIds && (
            <div className="registration-form__error">
              {t(`rejestracjaDruzynowa.errors.${errors.memberIds.message}`)}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="registration-form__submit"
          disabled={registerMutation.isPending}
        >
          {t('rejestracjaDruzynowa.submit')}
        </button>
      </form>
    </>
  );
}
