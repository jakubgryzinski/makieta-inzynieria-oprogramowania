import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/zawodnik/')({
  component: () => <Navigate to="/zawodnik/dashboard" />,
});
