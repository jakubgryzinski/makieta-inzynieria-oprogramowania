import { useTranslation } from 'react-i18next';
import type { BracketMatch } from '../types';
import './BracketTree.css';

interface BracketTreeProps {
  matches: BracketMatch[];
  currentCompetitorId: string;
}

export const BracketTree = ({ matches, currentCompetitorId }: BracketTreeProps) => {
  const { t } = useTranslation('zawodnik');

  const getRoundTitle = (round: number) => {
    switch (round) {
      case 0:
        return t('drabinka.round16');
      case 1:
        return t('drabinka.quarterfinals');
      case 2:
        return t('drabinka.semifinals');
      case 3:
        return t('drabinka.final');
      default:
        return `Round ${round + 1}`;
    }
  };

  const groupMatchesByRound = (matches: BracketMatch[]) => {
    const rounds: BracketMatch[][] = [[], [], [], []];
    matches.forEach((match) => {
      if (match.round >= 0 && match.round <= 3) {
        rounds[match.round].push(match);
      }
    });
    return rounds;
  };

  const isCurrentCompetitorInMatch = (match: BracketMatch) => {
    return (
      match.participant1?.id === currentCompetitorId ||
      match.participant2?.id === currentCompetitorId
    );
  };

  const rounds = groupMatchesByRound(matches);

  return (
    <div className="bracket-tree">
      <div className="bracket-tree__container">
        {rounds.map((roundMatches, roundIndex) => (
          <div key={roundIndex} className="bracket-tree__round">
            <h3 className="bracket-tree__round-title">{getRoundTitle(roundIndex)}</h3>
            <div className="bracket-tree__matches">
              {roundMatches.map((match) => (
                <div
                  key={match.id}
                  className={`bracket-tree__match ${
                    isCurrentCompetitorInMatch(match) ? 'bracket-tree__match--current' : ''
                  }`}
                >
                  <div
                    className={`bracket-tree__participant ${
                      match.winner === match.participant1?.id
                        ? 'bracket-tree__participant--winner'
                        : ''
                    }`}
                  >
                    <span className="bracket-tree__participant-name">
                      {match.participant1?.name || t('drabinka.tbd')}
                    </span>
                    {match.score1 !== undefined && (
                      <span className="bracket-tree__score">{match.score1}</span>
                    )}
                  </div>
                  <div
                    className={`bracket-tree__participant ${
                      match.winner === match.participant2?.id
                        ? 'bracket-tree__participant--winner'
                        : ''
                    }`}
                  >
                    <span className="bracket-tree__participant-name">
                      {match.participant2?.name || t('drabinka.tbd')}
                    </span>
                    {match.score2 !== undefined && (
                      <span className="bracket-tree__score">{match.score2}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
