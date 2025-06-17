import React from 'react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

interface DiceRollerProps {
  onRoll: () => void;
  isRolling: boolean;
  lastRoll: number;
  disabled?: boolean;
}

const diceIcons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

export const DiceRoller: React.FC<DiceRollerProps> = ({
  onRoll,
  isRolling,
  lastRoll,
  disabled = false,
}) => {
  const DiceIcon = lastRoll > 0 ? diceIcons[lastRoll - 1] : Dice1;
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
      <div className="mb-4">
        <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 ${isRolling ? 'animate-spin' : ''}`}>
          <DiceIcon className="w-12 h-12 text-white" />
        </div>
      </div>
      
      <button
        onClick={onRoll}
        disabled={disabled || isRolling}
        className={`
          w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200
          ${disabled || isRolling
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl'
          }
        `}
      >
        {isRolling ? 'Mengocok...' : 'Lempar Dadu'}
      </button>
      
      {lastRoll > 0 && !isRolling && (
        <p className="mt-3 text-sm text-gray-600">
          Dadu terakhir: <span className="font-bold text-indigo-600">{lastRoll}</span>
        </p>
      )}
    </div>
  );
};