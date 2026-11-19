# Menjalankan dan push dari Windows

## Persiapan

Pasang Node.js 24 LTS, Git untuk Windows, dan Visual Studio Code.
Gunakan akun GitHub yang memiliki akses tulis ke
https://github.com/utamiretno/ppdb-kb-puspa-ligar.
Jika akun Renata berbeda dari pemilik repository, pemilik perlu memberikan
akses collaborator. Repository tujuan belum dapat diperiksa dari lingkungan
pembuatan paket ini.

## Clone repository tujuan

Buka PowerShell atau Terminal VS Code di folder tempat proyek akan disimpan.

    git clone https://github.com/utamiretno/ppdb-kb-puspa-ligar.git
    cd ppdb-kb-puspa-ligar

Jika clone meminta autentikasi, selesaikan login GitHub melalui browser yang
dibuka oleh Git Credential Manager. Jika repository tidak ditemukan, pastikan
URL dan hak akses akun benar.

Jika sudah pernah clone, buka clone yang ada dan jalankan git status.
Selesaikan atau simpan perubahan lokal sebelum mengambil pembaruan dari tim.
Hindari mengunduh ZIP GitHub sebagai pengganti clone untuk langkah ini.

## Masukkan isi paket

Ekstrak ZIP starter. Buka folder ppdb-kb-puspa-ligar hasil ekstrak.
Salin ISINYA ke folder hasil clone, sehingga package.json berada langsung
di root clone, sejajar dengan folder .git. Jangan membuat folder proyek berlapis.

Jika repository sudah berisi README, package.json, src, atau berkas lain dengan
nama sama, bandingkan dahulu dan gabungkan isinya. Pertahankan pekerjaan tim
yang sudah ada. .git dari clone tetap digunakan.

Buka root clone lewat File > Open Folder di VS Code.

## Jalankan lokal

Buka Terminal > New Terminal.

    node -v
    npm -v
    npm ci
    Copy-Item .env.example .env.local
    npm run dev

Buka http://localhost:3000. Untuk berhenti tekan Ctrl+C.
File .env.local boleh kosong nilainya untuk halaman awal. Kredensial dibutuhkan
ketika modul mulai menggunakan Supabase atau email.

## Periksa dan commit

    npm run lint
    npm run typecheck
    npm run build
    git status

Pastikan node_modules, .next, dan .env.local tidak tercantum sebagai berkas
yang akan dikirim. .env.example berisi nama variabel tanpa kunci dan boleh di-commit.

    git add .
    git diff --cached --stat
    git diff --cached
    git commit -m "Siapkan struktur awal proyek PPDB KB Puspa Ligar"

Jika Git meminta identitas, atur nama dan email sesuai akunmu lalu ulangi commit.

    git config user.name "Renata"
    git config user.email "EMAIL_GITHUB_KAMU"

Ganti EMAIL_GITHUB_KAMU dengan email yang dipakai atau email noreply dari GitHub.
Perintah config di atas hanya berlaku pada clone ini.

## Push

Periksa nama branch aktif.

    git branch --show-current

Gunakan nama yang ditampilkan pada perintah berikut, misalnya main.

    git push -u origin main

Jika hasil sebelumnya master, gunakan master. Jika branch dilindungi, buat branch
baru, push, lalu ajukan pull request.

    git switch -c persiapan-pemrograman
    git push -u origin persiapan-pemrograman

Buka halaman repository dan periksa package.json, src, supabase, public, dan docs.
Jika push ditolak karena pembaruan dari tim, ambil pembaruan setelah commit lokal.

    git pull --rebase
    git push

Jika ada konflik, periksa berkas yang ditandai, gabungkan perubahan yang benar,
jalankan git add pada berkas tersebut dan git rebase --continue. Untuk membatalkan
rebase yang belum selesai, gunakan git rebase --abort. Minta bantuan bila isinya
belum jelas. Jangan memakai force push untuk persiapan ini.

Untuk push selanjutnya, lakukan perubahan, jalankan pemeriksaan, git add .,
git commit, lalu git push.
