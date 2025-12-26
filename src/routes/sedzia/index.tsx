import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/sedzia/')({
  component: () => <Navigate to="/sedzia/harmonogram" />,
});
