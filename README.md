# Petak Ilmu: Jelajah Rantai Makanan

**Petak Ilmu** adalah permainan papan edukasi berbasis web yang mengajak pemain menjelajahi konsep rantai makanan (produsen, konsumen, dekomposer) melalui kuis interaktif. Game ini dirancang untuk pembelajaran sains tingkat dasar secara menyenangkan.

---

## 🎮 Deskripsi Singkat

- **Platform:** Web (React + TypeScript + Tailwind CSS)
- **Tema:** Rantai makanan (ekosistem)
- **Fitur utama:** Papan permainan, dadu pintar, kuis interaktif, skor, efek suara, dan tampilan modern.

---

## 🎲 Aturan Permainan

1. **Masukkan Nama Pemain**
   - Pemain mengisi nama di layar awal.

2. **Lempar Dadu**
   - Klik tombol **"Lempar Dadu"** untuk bergerak maju sesuai angka dadu.

3. **Kotak Kuis**
   - Jika mendarat di kotak kuning (ada tanda "?"), pemain mendapat pertanyaan tentang rantai makanan.
   - Ada **16 kotak kuis**: 3, 6, 7, 9, 12, 14, 15, 18, 21, 24, 27, 28, 30, 33, 35, 36.

4. **Menjawab Pertanyaan**
   - Setiap pertanyaan memiliki 4 pilihan jawaban.
   - Pilih jawaban yang benar dalam waktu **30 detik**.

5. **Skor**
   - Jawaban benar: **+10 poin**.
   - Maksimal skor: **160 poin**.

6. **Selesai**
   - Permainan selesai saat mencapai kotak 36.
   - Skor dan pesan motivasi ditampilkan, bisa main ulang.

---

## ⚙️ Mekanisme Permainan

- **Papan Permainan**
  - 36 kotak, posisi awal di kotak 1.
  - Kotak kuis berwarna kuning dan bertanda tanya (?).

- **Dadu Pintar**
  - Dadu memiliki peluang lebih besar membawa pemain ke kotak kuis (probabilistic nudging).

- **Pertanyaan**
  - Topik: Produsen (tumbuhan), Konsumen (hewan), Dekomposer (pengurai).
  - Penjelasan diberikan setelah menjawab.

- **Timer**
  - Setiap pertanyaan berdurasi 30 detik, ditampilkan dengan progress bar.

- **Efek Suara**
  - Suara dadu, benar, salah, dan kemenangan. Bisa diaktifkan/nonaktifkan.

- **Game Over**
  - Setelah mencapai kotak 36, skor dan motivasi ditampilkan.
  - Tersedia tombol **"Main Lagi"**.

---

## 🖥️ Struktur Folder

```
src/
  App.tsx                # Root komponen aplikasi
  index.css              # Styling global (Tailwind)
  main.tsx               # Entry point React
  components/            # Komponen UI (GameBoard, DiceRoller, dsb)
  data/
    questions.ts         # Daftar pertanyaan kuis
  hooks/
    useGameState.ts      # State & logic utama game
  types/
    game.ts              # Tipe data TypeScript
```

---

## 🚀 Cara Instalasi & Menjalankan

1. **Clone repo**
   ```
   git clone <repo-url>
   cd game-ipa-petak-ilmu
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Jalankan aplikasi**
   ```
   npm run dev
   ```
   Buka browser ke [http://localhost:5173](http://localhost:5173)

---

## ✨ Fitur

- UI modern & responsif (Tailwind CSS)
- Dadu pintar (lebih sering ke kotak kuis)
- 30+ pertanyaan acak tentang rantai makanan
- Penjelasan edukatif setiap soal
- Efek suara interaktif
- Progress bar timer
- Skor & motivasi akhir
- Bisa main ulang tanpa reload

---

## 📚 Tips Bermain

- Baca pertanyaan dengan teliti sebelum menjawab.
- Perhatikan penjelasan setelah menjawab untuk menambah pengetahuan.
- Semakin banyak kotak kuis yang dilewati, semakin tinggi peluang skor maksimal!

---

Selamat bermain dan belajar bersama **Petak Ilmu**!