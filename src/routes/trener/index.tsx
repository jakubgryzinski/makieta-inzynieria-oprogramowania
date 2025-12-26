import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/trener/')({
  component: () => <Navigate to="/trener/dashboard" />,
});
