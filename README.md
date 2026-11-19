# PPDB KB Puspa Ligar

Persiapan repository pemrograman sistem PPDB KB Puspa Ligar, Kelompok 6 PPSI 4KA33.

## Status

Kerangka awal yang dapat dijalankan dengan Next.js. Halaman awal adalah pemberitahuan
persiapan. Registrasi, login, sesi, RBAC, formulir, unggah berkas, verifikasi, PDF,
email, dan laporan belum diimplementasikan. Folder modul disiapkan untuk pengerjaan
bertahap berdasarkan SDD. Dependensi tersedia untuk modul tersebut.

## Teknologi

Next.js App Router, TypeScript, Tailwind CSS, Supabase PostgreSQL dan Storage privat,
Zod, bcryptjs untuk hash bcrypt, jose untuk kebutuhan sesi, @react-pdf/renderer,
Resend, dan React Email. Versi dikunci melalui package-lock.json.

Autentikasi direncanakan menggunakan tabel users aplikasi sesuai SDD. Kunci
service_role hanya dipakai di server. Seluruh operasi data tetap memerlukan
pemeriksaan sesi, peran, dan kepemilikan saat modul dikembangkan.

## Menjalankan proyek

Gunakan Node.js 24 LTS dan npm.

1. Buka folder yang memuat package.json di Visual Studio Code.
2. Jalankan npm ci.
3. Salin .env.example menjadi .env.local.
4. Jalankan npm run dev.
5. Buka http://localhost:3000.

Halaman awal berjalan tanpa kredensial Supabase. Isi variabel lingkungan saat
menghubungkan layanan. Jangan commit .env.local atau kunci layanan.

Perintah pemeriksaan sebelum commit:

    npm run lint
    npm run typecheck
    npm run build

## Struktur proyek

| Folder | Kegunaan |
| --- | --- |
| src/app | Halaman dan Route Handler Next.js |
| src/components | Komponen tampilan bersama |
| src/lib | Koneksi server, konstanta, autentikasi, validasi |
| src/services | Logika bisnis enam modul |
| src/types | Tipe TypeScript |
| supabase/migrations | Migrasi basis data mengikuti SDD |
| supabase/schema.sql | Tempat acuan skema, belum berisi DDL |
| public | Aset publik seperti logo sekolah |
| docs | Panduan dan pemetaan pekerjaan |

Folder kosong memakai .gitkeep agar tampil di GitHub. Folder rute yang belum
memiliki page.tsx belum menjadi halaman aktif. Penamaan rute merupakan usulan
implementasi untuk tim.

## Modul dan PIC

| WBS | Pekerjaan | PIC | Minggu |
| --- | --- | --- | --- |
| 5.1 | Akun dan autentikasi | Renata | 8 |
| 5.2 | Informasi dan periode | Renata | 9 |
| 5.3 | Penanggung jawab pendaftaran dan unggah | Renata | 9–10 |
| 5.3.1 | Formulir anak dan orang tua | Renata | 9–10 |
| 5.3.2 | Unggah dan validasi berkas | Aninditya | 9–10 |
| 5.3.3 | Status dan perbaikan data | Nikita | 10 |
| 5.4 | Penanggung jawab verifikasi dan pengelolaan data | Renata | 10–12 |
| 5.4.1 | Verifikasi dan status oleh Admin | Renata | 10 |
| 5.4.2 | Pengelolaan pendaftar | Renata | 12 |
| 5.5 | Bukti PDF dan notifikasi | Renata | 12 |
| 5.6 | Laporan dan monitoring | Aninditya | 12 |
| 5.7 | Dokumentasi kode inti | Aninditya | 11 |
| 5.8 | Integrasi dan dokumentasi | Aninditya | 13 |

PIC Raden pada WBS dipetakan ke Renata sesuai pembagian tim.

## Basis data dan layanan

Skema final perlu ditranskripsikan dan ditinjau dari Bab 4 SDD sebelum migrasi
dijalankan. Folder supabase belum menerapkan tabel, RLS, ataupun backup.
Jangan mengunggah KK, akta, foto anak, atau backup ke public atau GitHub.
Berkas tersebut direncanakan berada di bucket privat.

Cadangan basis data dan cadangan objek Storage harus dibuat terpisah sesuai
NFR-07. Pengaturan jadwal dan pemulihan dikerjakan bersama implementasi layanan.

Untuk email, isi EMAIL_FROM dengan alamat pengirim yang telah diverifikasi
pada layanan email. Subdomain vercel.app aplikasi tidak otomatis menjadi domain
pengirim email.

## Deployment

Target aplikasi adalah Vercel. Framework Next.js dapat dideteksi otomatis.
Masukkan variabel lingkungan lewat pengaturan proyek Vercel.
Gunakan kredensial terpisah untuk pengembangan bila tersedia.
Kelayakan paket Hobby untuk penggunaan sekolah mengikuti ketentuan Vercel
yang berlaku dan keputusan penerapan tim.

## Panduan push

Lihat docs/PANDUAN_GITHUB.md untuk langkah Windows dan VS Code.
