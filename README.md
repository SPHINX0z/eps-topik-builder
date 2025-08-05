# EPS-TOPIK Builder

Aplikasi pembuat soal EPS-TOPIK berbasis web, bisa digunakan online maupun offline, dan diakses langsung dari HP atau PC.

## ✅ Fitur Utama:
- Android-style interface (tampilan seperti aplikasi)
- Upload dan parsing soal langsung dari file PDF
- Dukungan gambar dan audio untuk soal
- Simpan soal ke database Supabase
- Navigasi soal + grid soal yang interaktif
- Ekspor soal ke JSON & HTML

## 🚀 Cara Menggunakan
1. Buka [builder](https://sphinx0z.github.io/eps-topik-builder/) di HP atau PC
2. Upload PDF soal
3. Isi pertanyaan dan pilihan (otomatis atau manual)
4. Simpan soal ke Supabase
5. Ekspor ke `.json` / `.html` jika perlu

## 🧾 Struktur Soal
```json
{
  "nomor": 1,
  "pertanyaan": "Apa warna bendera Korea Selatan?",
  "opsi": ["Merah", "Biru", "Putih", "Kuning"],
  "gambar": "url_gambar_opsional",
  "audio": "url_audio_opsional"
}

## 📦 Teknologi:

HTML + Tailwind CSS

JavaScript + Supabase

PDF.js untuk parsing PDF

---

## 🔄 Langkah Berikutnya
1. Update `index.html` → paste seluruh kode final yang saya kirim sebelumnya
2. Tambahkan file `README.md` (seperti di atas)
3. Lanjut ke file `manifest.json` dan fitur ekspor jika kamu mau builder bisa diinstal seperti aplikasi Android

Kalau sudah siap update `index.html`, beri tahu saya. Saya bantu buatkan `manifest.json` selanjutnya. Mau lanjut?
