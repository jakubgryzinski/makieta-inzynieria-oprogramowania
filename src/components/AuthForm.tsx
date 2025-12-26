import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { UserRole } from '@/types/user';
import './AuthForm.css';

const authSchema = z.object({
  role: z.nativeEnum(UserRole)
});

type AuthFormData = z.infer<typeof authSchema>;

export function AuthForm() {
  const { t } = useTranslation('auth');
  const { register, handleSubmit, formState: { errors } } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      role: UserRole.ORGANIZER
    }
  });

  const onSubmit = (data: AuthFormData) => {
    Cookies.set('userType', data.role);
    window.location.href = `/${data.role}`;
  };

  return (
    <div className="auth-form-container">
      <h1>{t('title')}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register('role')} className="auth-form-select">
          {Object.values(UserRole).map((role) => (
            <option key={role} value={role}>
              {t(`roles.${role}`)}
            </option>
          ))}
        </select>
        {errors.role && (
          <div className="auth-form-error">
            {errors.role.message}
          </div>
        )}
        <button type="submit" className="auth-form-submit">
          {t('submit')}
        </button>
      </form>
    </div>
  );
}
