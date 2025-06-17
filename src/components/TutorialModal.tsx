import React from 'react';
import { X, Dice1, Target, Award, Clock } from 'lucide-react';

interface TutorialModalProps {
  onClose: () => void;
}

export const TutorialModal: React.FC<TutorialModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Cara Bermain</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Dice1 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">1. Lempar Dadu</h3>
                <p className="text-gray-600">
                  Klik tombol "Lempar Dadu" untuk bergerak di papan permainan. 
                  Kamu akan maju sesuai angka yang keluar di dadu.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">2. Jawab Pertanyaan</h3>
                <p className="text-gray-600">
                  Jika mendarat di kotak kuning (ada 16 kotak kuis), 
                  kamu akan mendapat pertanyaan tentang rantai makanan. 
                  Kotak kuis: 3, 6, 7, 9, 12, 14, 15, 18, 21, 24, 27, 28, 30, 33, 35, 36.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">3. Waktu Terbatas</h3>
                <p className="text-gray-600">
                  Kamu punya 30 detik untuk menjawab setiap pertanyaan. 
                  Jawab dengan benar untuk mendapat 10 poin!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">4. Menang</h3>
                <p className="text-gray-600">
                  Capai kotak nomor 36 untuk menyelesaikan permainan! 
                  Dengan 16 kotak kuis, kamu akan mendapat banyak kesempatan belajar.
                  Semakin banyak pertanyaan yang kamu jawab benar, semakin tinggi skormu.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-green-50 rounded-xl">
            <h4 className="font-semibold text-green-800 mb-2">Tentang Rantai Makanan:</h4>
            <div className="text-sm text-green-700 space-y-1">
              <p><strong>Produsen:</strong> Tumbuhan yang membuat makanan sendiri</p>
              <p><strong>Konsumen:</strong> Hewan yang memakan makhluk hidup lain</p>
              <p><strong>Dekomposer:</strong> Pengurai yang menguraikan sisa makhluk hidup</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-xl">
            <h4 className="font-semibold text-yellow-800 mb-2">Tips Bermain:</h4>
            <div className="text-sm text-yellow-700 space-y-1">
              <p>• Dengan 16 kotak kuis, kamu bisa mendapat maksimal 160 poin!</p>
              <p>• Baca pertanyaan dengan teliti sebelum menjawab</p>
              <p>• Perhatikan penjelasan setelah menjawab untuk belajar lebih banyak</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Mulai Bermain Sekarang!
          </button>
        </div>
      </div>
    </div>
  );
};