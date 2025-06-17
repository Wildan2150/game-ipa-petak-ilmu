import React from 'react';
import { User, MapPin, Trophy, Volume2, VolumeX } from 'lucide-react';

interface GameHeaderProps {
  playerName: string;
  currentPosition: number;
  score: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const GameHeader: React.FC<GameHeaderProps> = ({
  playerName,
  currentPosition,
  score,
  soundEnabled,
  onToggleSound,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 mb-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-2 rounded-full">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pemain</p>
              <p className="font-semibold text-gray-800">{playerName}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-green-100 p-2 rounded-full">
              <MapPin className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Posisi</p>
              <p className="font-semibold text-gray-800">{currentPosition}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Trophy className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Skor</p>
              <p className="font-semibold text-gray-800">{score}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onToggleSound}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title={soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara'}
        >
          {soundEnabled ? (
            <Volume2 className="w-6 h-6 text-gray-600" />
          ) : (
            <VolumeX className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
};