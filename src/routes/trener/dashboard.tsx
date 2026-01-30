import { createFileRoute, Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useCoachCompetitors } from '@/features/trener/hooks';
import { CoachCompetitorsTable } from '@/features/trener/components';
import './dashboard.css';

export const Route = createFileRoute('/trener/dashboard')({
  component: TrenerDashboard,
});

function TrenerDashboard() {
  const { t } = useTranslation('trener');
  const { data: competitors, isLoading, error } = useCoachCompetitors();

  if (isLoading) {
    return <div className="trener-dashboard">{t('common.loading', { ns: 'common' })}</div>;
  }

  if (error) {
    return <div className="trener-dashboard">Error: {String(error)}</div>;
  }

  return (
    <div className="trener-dashboard">
      <div className="trener-dashboard__header">
        <h1 className="trener-dashboard__title">{t('dashboard.title')}</h1>
        <Link to="/trener/rejestracja">
          <button className="trener-dashboard__register-btn">
            {t('dashboard.registerButton')}
          </button>
        </Link>
      </div>
      {competitors && <CoachCompetitorsTable competitors={competitors} />}
    </div>
  );
}
