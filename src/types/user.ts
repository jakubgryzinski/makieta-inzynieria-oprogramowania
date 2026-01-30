export const UserRole = {
  ORGANIZER: 'organizator',
  COACH: 'trener',
  REFEREE: 'sedzia',
  COMPETITOR: 'zawodnik',
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export type Account = {
  role: UserRole;
}
