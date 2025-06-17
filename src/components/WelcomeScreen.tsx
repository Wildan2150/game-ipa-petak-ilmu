import React, { useState } from 'react';
import { Leaf, Play, Volume2, VolumeX } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: (playerName: string) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onStart,
  soundEnabled,
  onToggleSound,
}) => {
  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      onStart(playerName.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <Leaf className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Petak Ilmu
          </h1>
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Jelajah Rantai Makanan
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Belajar tentang rantai makanan sambil bermain! Jawab pertanyaan 
            tentang produsen, konsumen, dan dekomposer untuk memenangkan permainan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <label 
              htmlFor="playerName" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Masukkan Nama Pemain
            </label>
            <input
              type="text"
              id="playerName"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-200"
              placeholder="Nama kamu..."
              maxLength={20}
              required
            />
          </div>

          <button
            type="submit"
            disabled={!playerName.trim()}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
          >
            <Play className="w-5 h-5" />
            Mulai Bermain
          </button>
        </form>

        <button
          onClick={onToggleSound}
          className="mt-6 flex items-center justify-center gap-2 mx-auto text-gray-600 hover:text-gray-800 transition-colors"
        >
          {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          <span className="text-sm">
            {soundEnabled ? 'Suara Aktif' : 'Suara Nonaktif'}
          </span>
        </button>
      </div>
    </div>
  );
};