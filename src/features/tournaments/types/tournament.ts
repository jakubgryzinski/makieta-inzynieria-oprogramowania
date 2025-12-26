export interface Tournament {
  id: string;
  name: string;
  date: string;
  state?: 'Przygotowanie' | 'Weryfikacja' | 'Gotowy' | 'WTrakcie' | 'Zakończony';
}
