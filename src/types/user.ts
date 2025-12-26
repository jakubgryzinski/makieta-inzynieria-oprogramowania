export enum UserRole {
  ORGANIZER = 'organizator',
  COACH = 'trener',
  REFEREE = 'sedzia',
  COMPETITOR = 'zawodnik'
}

export type Account = {
  role: UserRole;
}
