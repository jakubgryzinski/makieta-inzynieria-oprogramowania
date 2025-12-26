import { useTranslation } from 'react-i18next';
import { getAccount } from '@/lib/auth/getAccount';
import { logout } from '@/lib/auth/logout';
import { UserRole } from '@/types/user';
import './Navbar.css';

const roleRoutes = {
  [UserRole.COMPETITOR]: ['dashboard', 'harmonogram', 'ranking', 'drabinka'],
  [UserRole.COACH]: ['dashboard', 'rejestracja', 'rejestracjaDruzynowa', 'zawodnicy', 'dyscypliny'],
  [UserRole.REFEREE]: ['harmonogram', 'zapisywanieWynikow'],
  [UserRole.ORGANIZER]: ['dashboard', 'konfiguracja', 'konkurencje', 'zasoby', 'harmonogram'],
};

const routePaths = {
  rejestracjaDruzynowa: 'rejestracja-druzynowa',
  zapisywanieWynikow: 'zapisywanie-wynikow',
};

export function Navbar() {
  const { t } = useTranslation('common');
  const account = getAccount();

  if (!account) {
    return null;
  }

  const routes = roleRoutes[account.role] || [];

  return (
    <nav className="navbar">
      <div className="navbar-links">
        {routes.map((route) => {
          const path = routePaths[route] || route;
          return (
            <a key={route} href={`/${account.role}/${path}`} className="navbar-link">
              {t(`navbar.${account.role}.${route}`)}
            </a>
          );
        })}
      </div>
      <button onClick={logout} className="navbar-logout">
        {t('navbar.logout')}
      </button>
    </nav>
  );
}
