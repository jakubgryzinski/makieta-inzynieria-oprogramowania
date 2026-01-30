import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Discipline, DisciplineParticipant } from '../types';
import { useDisciplines, useDisciplineParticipants } from '../hooks';
import './DisciplinesView.css';

function DisciplineCard({
  discipline,
  onViewParticipants,
}: {
  discipline: Discipline;
  onViewParticipants: (id: string) => void;
}) {
  const { t } = useTranslation('trener');

  const statusClass = `discipline-card__status--${discipline.status}`;

  return (
    <div className="discipline-card">
      <h3 className="discipline-card__name">{discipline.name}</h3>
      <div className="discipline-card__info">
        <span className="discipline-card__count">
          {t('dyscypliny.participants')}: {discipline.participantCount}
        </span>
        <span className={`discipline-card__status ${statusClass}`}>
          {t(`dyscypliny.statuses.${discipline.status}`)}
        </span>
      </div>
      <button
        className="discipline-card__button"
        onClick={() => onViewParticipants(discipline.id)}
      >
        {t('dyscypliny.viewParticipants')}
      </button>
    </div>
  );
}

function ParticipantsTable({ participants }: { participants: DisciplineParticipant[] }) {
  const { t } = useTranslation('trener');

  return (
    <table className="participants-table">
      <thead>
        <tr>
          <th>{t('dyscypliny.participantsTable.position')}</th>
          <th>{t('dyscypliny.participantsTable.name')}</th>
          <th>{t('dyscypliny.participantsTable.club')}</th>
          <th>{t('dyscypliny.participantsTable.age')}</th>
          <th>{t('dyscypliny.participantsTable.weight')}</th>
        </tr>
      </thead>
      <tbody>
        {participants.map((participant) => (
          <tr key={participant.id}>
            <td>{participant.position}</td>
            <td>{participant.firstName} {participant.lastName}</td>
            <td>{participant.club}</td>
            <td>{participant.age}</td>
            <td>{participant.weight} kg</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function DisciplinesView() {
  const { t } = useTranslation('trener');
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<string | null>(null);

  const { data: disciplines, isLoading: disciplinesLoading } = useDisciplines();
  const { data: participants, isLoading: participantsLoading } = useDisciplineParticipants(selectedDisciplineId);

  const selectedDiscipline = disciplines?.find((d) => d.id === selectedDisciplineId);

  if (disciplinesLoading) {
    return <div>{t('common:loading')}</div>;
  }

  return (
    <div className="disciplines-view">
      <div className="disciplines-grid">
        {disciplines?.map((discipline) => (
          <DisciplineCard
            key={discipline.id}
            discipline={discipline}
            onViewParticipants={setSelectedDisciplineId}
          />
        ))}
      </div>

      {selectedDisciplineId && (
        <div className="disciplines-view__participants">
          <div className="disciplines-view__participants-header">
            <h2>{selectedDiscipline?.name}</h2>
            <button
              className="disciplines-view__close-button"
              onClick={() => setSelectedDisciplineId(null)}
            >
              {t('dyscypliny.close')}
            </button>
          </div>
          {participantsLoading ? (
            <div>{t('common:loading')}</div>
          ) : participants && participants.length > 0 ? (
            <ParticipantsTable participants={participants} />
          ) : (
            <p>{t('dyscypliny.noParticipants')}</p>
          )}
        </div>
      )}
    </div>
  );
}
