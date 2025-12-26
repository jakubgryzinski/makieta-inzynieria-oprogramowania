import { createFileRoute, Navigate } from '@tanstack/react-router';
import { getAccount } from '@/lib/auth/getAccount';

export const Route = createFileRoute('/')({
  component: () => {
    const account = getAccount();

    if (!account) {
      return <Navigate to="/auth" />;
    }

    return <Navigate to={`/${account.role}`} />;
  },
});
