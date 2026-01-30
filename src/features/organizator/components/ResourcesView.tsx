import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useEquipment, useAwards } from '../hooks';
import type { Equipment } from '../types';
import './ResourcesView.css';

type TabType = 'equipment' | 'awards';

export function ResourcesView() {
  const { t } = useTranslation('organizator');
  const [activeTab, setActiveTab] = useState<TabType>('equipment');

  const { data: equipment, isLoading: isLoadingEquipment } = useEquipment();
  const { data: awards, isLoading: isLoadingAwards } = useAwards();

  const getStatusLabel = (status: Equipment['status']) => {
    return t(`zasoby.statuses.${status}`);
  };

  const getStatusClass = (status: Equipment['status']) => {
    const classes: Record<Equipment['status'], string> = {
      dostepny: 'resources__status-badge--available',
      w_uzyciu: 'resources__status-badge--in-use',
      uszkodzony: 'resources__status-badge--damaged',
    };
    return classes[status];
  };

  const handleDownloadPDF = () => {
    alert('Pobiera...');
  };

  const handleDownloadCSV = () => {
    alert('Pobiera...');
  };

  const isLoading = activeTab === 'equipment' ? isLoadingEquipment : isLoadingAwards;

  return (
    <div className="resources">
      <div className="resources__tabs">
        <button
          className={`resources__tab ${activeTab === 'equipment' ? 'resources__tab--active' : ''}`}
          onClick={() => setActiveTab('equipment')}
        >
          {t('zasoby.tabs.equipment')}
        </button>
        <button
          className={`resources__tab ${activeTab === 'awards' ? 'resources__tab--active' : ''}`}
          onClick={() => setActiveTab('awards')}
        >
          {t('zasoby.tabs.awards')}
        </button>
      </div>

      <div className="resources__actions">
        <button className="resources__download-btn" onClick={handleDownloadPDF}>
          {t('zasoby.downloadPDF')}
        </button>
        <button className="resources__download-btn" onClick={handleDownloadCSV}>
          {t('zasoby.downloadCSV')}
        </button>
      </div>

      {isLoading && <div className="resources__loading">{t('zasoby.loading')}</div>}

      {activeTab === 'equipment' && !isLoadingEquipment && (
        <table className="resources__table">
          <thead>
            <tr>
              <th>{t('zasoby.equipment.name')}</th>
              <th>{t('zasoby.equipment.quantity')}</th>
              <th>{t('zasoby.equipment.status')}</th>
            </tr>
          </thead>
          <tbody>
            {equipment?.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                  <span className={`resources__status-badge ${getStatusClass(item.status)}`}>
                    {getStatusLabel(item.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {activeTab === 'awards' && !isLoadingAwards && (
        <table className="resources__table">
          <thead>
            <tr>
              <th>{t('zasoby.awards.name')}</th>
              <th>{t('zasoby.awards.competition')}</th>
              <th>{t('zasoby.awards.quantity')}</th>
            </tr>
          </thead>
          <tbody>
            {awards?.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.competition}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
