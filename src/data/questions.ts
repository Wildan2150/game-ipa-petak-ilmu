import { Question } from '../types/game';

export const questions: Question[] = [
  // Produsen Questions (10)
  {
    id: 1,
    category: 'Produsen',
    question: 'Manakah dari berikut ini yang merupakan produsen dalam rantai makanan?',
    options: ['Rumput', 'Kelinci', 'Elang', 'Ular'],
    correctAnswer: 0,
    explanation: 'Rumput adalah produsen karena dapat membuat makanan sendiri melalui fotosintesis.'
  },
  {
    id: 2,
    category: 'Produsen',
    question: 'Tumbuhan hijau disebut produsen karena...',
    options: ['Memakan hewan lain', 'Membuat makanan sendiri', 'Hidup di air', 'Bergerak aktif'],
    correctAnswer: 1,
    explanation: 'Tumbuhan hijau disebut produsen karena dapat membuat makanan sendiri melalui fotosintesis.'
  },
  {
    id: 3,
    category: 'Produsen',
    question: 'Proses pembuatan makanan pada tumbuhan hijau disebut...',
    options: ['Respirasi', 'Fotosintesis', 'Transpirasi', 'Fertilisasi'],
    correctAnswer: 1,
    explanation: 'Fotosintesis adalah proses pembuatan makanan pada tumbuhan hijau dengan bantuan sinar matahari.'
  },
  {
    id: 4,
    category: 'Produsen',
    question: 'Yang diperlukan tumbuhan untuk fotosintesis adalah...',
    options: ['Air dan oksigen', 'Karbon dioksida dan air', 'Oksigen dan nitrogen', 'Nitrogen dan fosfor'],
    correctAnswer: 1,
    explanation: 'Tumbuhan memerlukan karbon dioksida dan air untuk melakukan fotosintesis.'
  },
  {
    id: 5,
    category: 'Produsen',
    question: 'Fitoplankton di laut berperan sebagai...',
    options: ['Konsumen primer', 'Konsumen sekunder', 'Produsen', 'Dekomposer'],
    correctAnswer: 2,
    explanation: 'Fitoplankton adalah produsen di ekosistem laut karena dapat berfotosintesis.'
  },
  {
    id: 6,
    category: 'Produsen',
    question: 'Alga hijau di kolam merupakan contoh...',
    options: ['Konsumen', 'Produsen', 'Dekomposer', 'Predator'],
    correctAnswer: 1,
    explanation: 'Alga hijau adalah produsen karena dapat membuat makanan sendiri melalui fotosintesis.'
  },
  {
    id: 7,
    category: 'Produsen',
    question: 'Padi yang tumbuh di sawah berperan sebagai...',
    options: ['Konsumen primer', 'Produsen', 'Konsumen sekunder', 'Dekomposer'],
    correctAnswer: 1,
    explanation: 'Padi adalah produsen karena dapat membuat makanan sendiri dan menjadi sumber makanan bagi konsumen.'
  },
  {
    id: 8,
    category: 'Produsen',
    question: 'Apa yang dihasilkan tumbuhan saat fotosintesis?',
    options: ['Karbon dioksida', 'Oksigen dan glukosa', 'Air', 'Nitrogen'],
    correctAnswer: 1,
    explanation: 'Fotosintesis menghasilkan oksigen dan glukosa sebagai makanan tumbuhan.'
  },
  {
    id: 9,
    category: 'Produsen',
    question: 'Ganggang laut hijau termasuk dalam kelompok...',
    options: ['Konsumen primer', 'Produsen', 'Konsumen tersier', 'Dekomposer'],
    correctAnswer: 1,
    explanation: 'Ganggang laut hijau adalah produsen karena dapat berfotosintesis.'
  },
  {
    id: 10,
    category: 'Produsen',
    question: 'Tumbuhan paku-pakuan di hutan berperan sebagai...',
    options: ['Dekomposer', 'Konsumen', 'Produsen', 'Predator'],
    correctAnswer: 2,
    explanation: 'Tumbuhan paku-pakuan adalah produsen karena dapat membuat makanan sendiri.'
  },

  // Konsumen Questions (10)
  {
    id: 11,
    category: 'Konsumen',
    question: 'Kelinci yang memakan rumput disebut...',
    options: ['Produsen', 'Konsumen primer', 'Konsumen sekunder', 'Dekomposer'],
    correctAnswer: 1,
    explanation: 'Kelinci adalah konsumen primer karena memakan produsen (tumbuhan).'
  },
  {
    id: 12,
    category: 'Konsumen',
    question: 'Harimau yang memakan rusa adalah contoh...',
    options: ['Konsumen primer', 'Produsen', 'Konsumen sekunder', 'Dekomposer'],
    correctAnswer: 2,
    explanation: 'Harimau adalah konsumen sekunder karena memakan konsumen primer (rusa).'
  },
  {
    id: 13,
    category: 'Konsumen',
    question: 'Burung pemakan biji-bijian termasuk...',
    options: ['Produsen', 'Konsumen primer', 'Konsumen tersier', 'Dekomposer'],
    correctAnswer: 1,
    explanation: 'Burung pemakan biji adalah konsumen primer karena memakan tumbuhan.'
  },
  {
    id: 14,
    category: 'Konsumen',
    question: 'Ular yang memakan tikus disebut...',
    options: ['Konsumen primer', 'Konsumen sekunder', 'Produsen', 'Dekomposer'],
    correctAnswer: 1,
    explanation: 'Ular adalah konsumen sekunder karena memakan konsumen primer (tikus).'
  },
  {
    id: 15,
    category: 'Konsumen',
    question: 'Belalang yang memakan daun termasuk...',
    options: ['Produsen', 'Konsumen primer', 'Konsumen tersier', 'Dekomposer'],
    correctAnswer: 1,
    explanation: 'Belalang adalah konsumen primer karena memakan tumbuhan (daun).'
  },
  {
    id: 16,
    category: 'Konsumen',
    question: 'Elang yang memakan ular adalah contoh...',
    options: ['Konsumen primer', 'Konsumen sekunder', 'Konsumen tersier', 'Produsen'],
    correctAnswer: 2,
    explanation: 'Elang adalah konsumen tersier karena memakan konsumen sekunder (ular).'
  },
  {
    id: 17,
    category: 'Konsumen',
    question: 'Ikan kecil yang memakan plankton disebut...',
    options: ['Produsen', 'Konsumen primer', 'Konsumen sekunder', 'Dekomposer'],
    correctAnswer: 1,
    explanation: 'Ikan kecil adalah konsumen primer karena memakan produsen (plankton).'
  },
  {
    id: 18,
    category: 'Konsumen',
    question: 'Singa laut yang memakan ikan termasuk...',
    options: ['Konsumen primer', 'Konsumen sekunder', 'Produsen', 'Dekomposer'],
    correctAnswer: 1,
    explanation: 'Singa laut adalah konsumen sekunder karena memakan konsumen primer (ikan).'
  },
  {
    id: 19,
    category: 'Konsumen',
    question: 'Kuda yang memakan rumput adalah...',
    options: ['Produsen', 'Konsumen primer', 'Konsumen tersier', 'Dekomposer'],
    correctAnswer: 1,
    explanation: 'Kuda adalah konsumen primer karena memakan tumbuhan (rumput).'
  },
  {
    id: 20,
    category: 'Konsumen',
    question: 'Konsumen yang memakan daging hewan lain disebut...',
    options: ['Herbivora', 'Karnivora', 'Omnivora', 'Dekomposer'],
    correctAnswer: 1,
    explanation: 'Karnivora adalah konsumen yang memakan daging hewan lain.'
  },

  // Dekomposer Questions (10)
  {
    id: 21,
    category: 'Dekomposer',
    question: 'Bakteri dan jamur dalam rantai makanan berperan sebagai...',
    options: ['Produsen', 'Konsumen primer', 'Konsumen sekunder', 'Dekomposer'],
    correctAnswer: 3,
    explanation: 'Bakteri dan jamur adalah dekomposer yang menguraikan sisa-sisa makhluk hidup.'
  },
  {
    id: 22,
    category: 'Dekomposer',
    question: 'Fungsi dekomposer dalam ekosistem adalah...',
    options: ['Membuat makanan', 'Memakan tumbuhan', 'Menguraikan bangkai', 'Memangsa hewan'],
    correctAnswer: 2,
    explanation: 'Dekomposer berfungsi menguraikan sisa-sisa makhluk hidup menjadi unsur hara.'
  },
  {
    id: 23,
    category: 'Dekomposer',
    question: 'Cacing tanah termasuk dalam kelompok...',
    options: ['Produsen', 'Konsumen primer', 'Dekomposer', 'Konsumen sekunder'],
    correctAnswer: 2,
    explanation: 'Cacing tanah adalah dekomposer yang membantu menguraikan bahan organik di tanah.'
  },
  {
    id: 24,
    category: 'Dekomposer',
    question: 'Jamur yang tumbuh di batang kayu mati berperan sebagai...',
    options: ['Produsen', 'Konsumen', 'Dekomposer', 'Predator'],
    correctAnswer: 2,
    explanation: 'Jamur adalah dekomposer yang menguraikan kayu mati menjadi nutrisi tanah.'
  },
  {
    id: 25,
    category: 'Dekomposer',
    question: 'Hasil penguraian oleh dekomposer akan menjadi...',
    options: ['Oksigen', 'Karbon dioksida', 'Unsur hara tanah', 'Air'],
    correctAnswer: 2,
    explanation: 'Dekomposer menguraikan sisa makhluk hidup menjadi unsur hara yang menyuburkan tanah.'
  },
  {
    id: 26,
    category: 'Dekomposer',
    question: 'Bakteri pembusuk berperan dalam...',
    options: ['Fotosintesis', 'Respirasi', 'Dekomposisi', 'Predasi'],
    correctAnswer: 2,
    explanation: 'Bakteri pembusuk berperan dalam proses dekomposisi atau penguraian.'
  },
  {
    id: 27,
    category: 'Dekomposer',
    question: 'Tanpa dekomposer, yang akan terjadi adalah...',
    options: ['Tanaman lebih subur', 'Bangkai menumpuk', 'Hewan bertambah banyak', 'Air menjadi bersih'],
    correctAnswer: 1,
    explanation: 'Tanpa dekomposer, bangkai dan sisa makhluk hidup akan menumpuk dan tidak terurai.'
  },
  {
    id: 28,
    category: 'Dekomposer',
    question: 'Lumut kerak yang tumbuh di bebatuan termasuk...',
    options: ['Produsen', 'Konsumen', 'Dekomposer', 'Parasit'],
    correctAnswer: 2,
    explanation: 'Lumut kerak berperan sebagai dekomposer yang membantu pelapukan batuan.'
  },
  {
    id: 29,
    category: 'Dekomposer',
    question: 'Rayap yang memakan kayu mati berperan sebagai...',
    options: ['Konsumen primer', 'Konsumen sekunder', 'Dekomposer', 'Produsen'],
    correctAnswer: 2,
    explanation: 'Rayap adalah dekomposer karena menguraikan kayu mati.'
  },
  {
    id: 30,
    category: 'Dekomposer',
    question: 'Proses penguraian sampah organik oleh mikroorganisme disebut...',
    options: ['Fotosintesis', 'Respirasi', 'Dekomposisi', 'Fermentasi'],
    correctAnswer: 2,
    explanation: 'Dekomposisi adalah proses penguraian bahan organik oleh mikroorganisme.'
  }
];