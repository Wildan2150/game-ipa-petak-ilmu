import React from 'react';
import { Trophy, RotateCcw, Star } from 'lucide-react';

interface GameOverScreenProps {
  playerName: string;
  score: number;
  onRestart: () => void;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({
  playerName,
  score,
  onRestart,
}) => {
  const getScoreMessage = (score: number) => {
    if (score >= 80) return { message: 'Luar Biasa!', color: 'text-yellow-600', stars: 3 };
    if (score >= 60) return { message: 'Bagus Sekali!', color: 'text-green-600', stars: 2 };
    if (score >= 40) return { message: 'Cukup Baik!', color: 'text-blue-600', stars: 2 };
    if (score >= 20) return { message: 'Terus Belajar!', color: 'text-orange-600', stars: 1 };
    return { message: 'Jangan Menyerah!', color: 'text-red-600', stars: 1 };
  };

  const scoreData = getScoreMessage(score);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-yellow-100 p-6 rounded-full">
              <Trophy className="w-16 h-16 text-yellow-600" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Selamat, {playerName}!
          </h1>
          
          <h2 className={`text-2xl font-semibold mb-4 ${scoreData.color}`}>
            {scoreData.message}
          </h2>
          
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 3 }, (_, i) => (
              <Star
                key={i}
                className={`w-8 h-8 ${
                  i < scoreData.stars
                    ? 'text-yellow-500 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Hasil Permainan</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Skor Akhir:</span>
              <span className="text-2xl font-bold text-purple-600">{score}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Status:</span>
              <span className="font-semibold text-green-600">Selesai!</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onRestart}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
          >
            <RotateCcw className="w-5 h-5" />
            Main Lagi
          </button>
          
          <div className="text-sm text-gray-600 leading-relaxed">
            Terima kasih sudah belajar tentang rantai makanan! 
            Terus eksplorasi dan pelajari lebih banyak tentang ekosistem.
          </div>
        </div>
      </div>
    </div>
  );
};