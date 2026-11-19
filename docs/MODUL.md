# Pemetaan modul

| Modul | Folder layanan | Rencana halaman |
| --- | --- | --- |
| M-01 Akun dan autentikasi | src/services/akun | /registrasi, /login, /lupa-password, /atur-ulang-password, /admin/akun |
| M-02 Informasi dan periode | src/services/informasi | /, /admin/periode, /admin/informasi |
| M-03 Pendaftaran dan berkas | src/services/pendaftaran | /orang-tua, /orang-tua/pendaftaran, /orang-tua/status |
| M-04 Verifikasi dan pengelolaan | src/services/verifikasi | /admin/pendaftar, /admin/pendaftar/[id] |
| M-05 Bukti dan notifikasi | src/services/notifikasi dan src/services/bukti | /orang-tua/bukti, /orang-tua/notifikasi |
| M-06 Laporan dan monitoring | src/services/laporan | /admin, /admin/laporan, /kepala-sekolah, /kepala-sekolah/laporan |

src/lib/auth disediakan untuk sesi, pemeriksaan peran, dan batas tidak aktif
15 menit. src/lib/validations disediakan untuk skema Zod. Implementasi proteksi
rute harus mengikuti API Next.js yang terpasang, dengan pemeriksaan server pada
setiap operasi data. Kerangka ini belum menyediakan proteksi atau halaman
transaksional. Seluruh route di tabel adalah rencana selain halaman /.

Struktur layanan dan alamat halaman merupakan pilihan awal implementasi.
Kebutuhan dan hak akses tetap mengacu pada SRS dan SDD.
