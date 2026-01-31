import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMatSchedule, useBracket, useCompetitions } from '../hooks';
import './ScheduleView.css';

export const ScheduleView = () => {
  const { t } = useTranslation('organizator');
  const [selectedCompetition, setSelectedCompetition] = useState<string | null>(null);

  const { data: schedule, isLoading: scheduleLoading } = useMatSchedule();
  const { data: competitions, isLoading: competitionsLoading } = useCompetitions();
  const { data: bracket, isLoading: bracketLoading } = useBracket(selectedCompetition);

  if (scheduleLoading || competitionsLoading) {
    return <div>{t('harmonogram.loading')}</div>;
  }

  const quarterfinals = bracket?.nodes.filter((n) => n.round === 'quarterfinals') || [];
  const semifinals = bracket?.nodes.filter((n) => n.round === 'semifinals') || [];
  const finals = bracket?.nodes.filter((n) => n.round === 'final') || [];

  return (
    <div className="schedule-view">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>{t('harmonogram.table.time')}</th>
            <th>{t('harmonogram.table.mat1')}</th>
            <th>{t('harmonogram.table.mat2')}</th>
            <th>{t('harmonogram.table.mat3')}</th>
            <th>{t('harmonogram.table.mat4')}</th>
            <th>{t('harmonogram.table.mat5')}</th>
            <th>{t('harmonogram.table.mat6')}</th>
            <th>{t('harmonogram.table.referees')}</th>
          </tr>
        </thead>
        <tbody>
          {schedule?.map((row) => (
            <tr key={row.id}>
              <td className="time-cell">{row.time}</td>
              <td>{row.mat1}</td>
              <td>{row.mat2}</td>
              <td>{row.mat3}</td>
              <td>{row.mat4}</td>
              <td>{row.mat5}</td>
              <td>{row.mat6}</td>
              <td>{row.referees}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bracket-section">
        <label htmlFor="competition-select">{t('harmonogram.selectCompetition')}</label>
        <select
          id="competition-select"
          value={selectedCompetition || ''}
          onChange={(e) => setSelectedCompetition(e.target.value || null)}
        >
          <option value="">{t('harmonogram.selectPlaceholder')}</option>
          {competitions?.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCompetition && (
        <div className="bracket-tree">
          {bracketLoading ? (
            <div>{t('harmonogram.loading')}</div>
          ) : bracket && bracket.nodes.length > 0 ? (
            <div className="bracket-container">
              <div className="bracket-column">
                <h4>{t('harmonogram.rounds.quarterfinals')}</h4>
                {quarterfinals.map((node) => (
                  <div key={node.id} className="bracket-match">
                    <div className={`bracket-competitor ${node.winner === node.competitor1 ? 'winner' : ''}`}>
                      {node.competitor1 || t('harmonogram.tbd')}
                    </div>
                    <div className={`bracket-competitor ${node.winner === node.competitor2 ? 'winner' : ''}`}>
                      {node.competitor2 || t('harmonogram.tbd')}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bracket-column">
                <h4>{t('harmonogram.rounds.semifinals')}</h4>
                {semifinals.map((node) => (
                  <div key={node.id} className="bracket-match">
                    <div className={`bracket-competitor ${node.winner === node.competitor1 ? 'winner' : ''}`}>
                      {node.competitor1 || t('harmonogram.tbd')}
                    </div>
                    <div className={`bracket-competitor ${node.winner === node.competitor2 ? 'winner' : ''}`}>
                      {node.competitor2 || t('harmonogram.tbd')}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bracket-column">
                <h4>{t('harmonogram.rounds.final')}</h4>
                {finals.map((node) => (
                  <div key={node.id} className="bracket-match final-match">
                    <div className={`bracket-competitor ${node.winner === node.competitor1 ? 'winner' : ''}`}>
                      {node.competitor1 || t('harmonogram.tbd')}
                    </div>
                    <div className={`bracket-competitor ${node.winner === node.competitor2 ? 'winner' : ''}`}>
                      {node.competitor2 || t('harmonogram.tbd')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="no-bracket">{t('harmonogram.noBracket')}</div>
          )}
        </div>
      )}
    </div>
  );
};
