import React from 'react';
import { Leaf, Bug, Fish, Bird, TreePine, Flower, Apple, Wheat } from 'lucide-react';

interface GameBoardProps {
  currentPosition: number;
  isRolling: boolean;
}

// Increased quiz cells from 8 to 16 for more educational opportunities
const questionCells = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 7, 14, 28, 35];

const getCellIcon = (cellNumber: number) => {
  const icons = [
    Leaf, Bug, Fish, Bird, TreePine, Flower, Apple, Wheat
  ];
  return icons[cellNumber % icons.length];
};

const getCellColor = (cellNumber: number) => {
  if (questionCells.includes(cellNumber)) {
    return 'bg-gradient-to-br from-yellow-400 to-orange-400 text-white';
  }
  
  const colors = [
    'bg-gradient-to-br from-green-400 to-green-500',
    'bg-gradient-to-br from-blue-400 to-blue-500',
    'bg-gradient-to-br from-purple-400 to-purple-500',
    'bg-gradient-to-br from-pink-400 to-pink-500',
    'bg-gradient-to-br from-indigo-400 to-indigo-500',
    'bg-gradient-to-br from-teal-400 to-teal-500',
  ];
  
  return colors[cellNumber % colors.length] + ' text-white';
};

export const GameBoard: React.FC<GameBoardProps> = ({ currentPosition, isRolling }) => {
  const cells = Array.from({ length: 36 }, (_, i) => i + 1);
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">Papan Permainan</h3>
        <p className="text-sm text-gray-600">
          Kotak kuning = Pertanyaan • Total: {questionCells.length} kotak kuis
        </p>
      </div>
      
      <div className="grid grid-cols-6 gap-3 sm:gap-4">
        {cells.map((cellNumber) => {
          const Icon = getCellIcon(cellNumber);
          const isCurrentPosition = cellNumber === currentPosition;
          const isQuestionCell = questionCells.includes(cellNumber);
          
          return (
            <div
              key={cellNumber}
              className={`
                relative aspect-square rounded-xl flex flex-col items-center justify-center
                transition-all duration-300 transform
                ${getCellColor(cellNumber)}
                ${isCurrentPosition ? 'scale-110 ring-4 ring-yellow-400 ring-opacity-75 shadow-xl' : ''}
                ${isRolling && isCurrentPosition ? 'animate-pulse' : ''}
              `}
            >
              <Icon className="w-4 h-4 sm:w-6 sm:h-6 mb-1" />
              <span className="text-xs sm:text-sm font-bold">{cellNumber}</span>
              
              {isQuestionCell && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">?</span>
                </div>
              )}
              
              {isCurrentPosition && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg animate-bounce">
                    <div className="w-full h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Posisi saat ini: <span className="font-bold text-indigo-600">{currentPosition}</span></p>
        <p>Target: Mencapai kotak 36 untuk menyelesaikan permainan!</p>
      </div>
    </div>
  );
};