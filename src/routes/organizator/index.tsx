import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/organizator/')({
  component: () => <Navigate to="/organizator/dashboard" />,
});
