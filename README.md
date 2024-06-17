<h1 align="center">GrowHub Backend - API dan Manajemen Data</h1>

# GrowHub Backend

GrowHub Backend adalah server aplikasi web yang menyediakan API dan manajemen data untuk aplikasi GrowHub. Proyek ini dibangun dengan Node.js menggunakan framework Hapi.js.

## Daftar Isi
- [Fitur](#fitur)
- [Instalasi](#instalasi)
- [Konfigurasi](#konfigurasi)
- [Menjalankan Server](#menjalankan-server)
- [Endpoints](#endpoints)
- [Team](#team)

## Fitur
- **Autentikasi**: Mengelola login dan registrasi pengguna.
- **Pengelolaan To-Do List**: CRUD (Create, Read, Update, Delete) untuk daftar tugas pengguna.
- **Pengelolaan Notes**: CRUD untuk catatan pengguna.
- **Pengelolaan Goals**: CRUD untuk tujuan pengguna.
- **Pengelolaan Discussions**: CRUD untuk diskusi pengguna.
- **Pengelolaan Blogs**: CRUD untuk blog pengguna.
- **Berbagi Konten**: Berbagi catatan dan blog dengan pengguna lain atau tamu yang belum terdaftar.

## Instalasi
1. Clone repositori:
    ```sh
    git clone https://github.com/cp-GrowHub/growhub-backend.git
    cd growhub-backend
    ```

2. Instal dependensi:
    ```sh
    npm install
    ```

## Konfigurasi
1. Atur variabel SECRET_KEY untuk JWT. Contoh file `.env`:
    ```
    SECRET_KEY=iniadalahsebuahsecretkey
    ```
2. Atur variabel port untuk Hapi pada `src/server.js`
   ```
   port: 5000
   ```
## Menjalankan Server
1. Jalankan server backend:
    ```sh
    npm run start:prod
    ```

2. Untuk mode pengembangan:
    ```sh
    npm run start:dev
    ```

## Endpoints
Berikut adalah beberapa endpoint yang tersedia di GrowHub Backend:

### Autentikasi
- `POST /register` - Registrasi pengguna baru
- `POST /login` - Login pengguna
- `GET /users` - Mendapatkan semua pengguna
- `GET /users/me` - Mendapatkan profil pengguna sendiri (dengan autentikasi)
- `PUT /users/me/edit` - Memperbarui profil pengguna sendiri (dengan autentikasi)

### Notes
- `GET /notes` - Mendapatkan semua catatan pengguna (dengan autentikasi)
- `POST /notes` - Membuat catatan baru (dengan autentikasi)
- `GET /notes/{noteId}` - Mendapatkan detail catatan berdasarkan ID
- `PUT /notes/{noteId}/edit` - Memperbarui catatan berdasarkan ID (dengan autentikasi)
- `DELETE /notes/{noteId}` - Menghapus catatan berdasarkan ID (dengan autentikasi)

### To-Do List
- `GET /todos` - Mendapatkan semua tugas pengguna (dengan autentikasi)
- `POST /todos` - Membuat tugas baru (dengan autentikasi)
- `PUT /todos/{todoId}` - Memperbarui tugas berdasarkan ID (dengan autentikasi)
- `DELETE /todos/{todoId}` - Menghapus tugas berdasarkan ID (dengan autentikasi)

### Goals
- `GET /goals` - Mendapatkan semua tujuan pengguna (dengan autentikasi)
- `POST /goals` - Membuat tujuan baru (dengan autentikasi)
- `PUT /goals/{goalId}` - Memperbarui tujuan berdasarkan ID (dengan autentikasi)
- `DELETE /goals/{goalId}` - Menghapus tujuan berdasarkan ID (dengan autentikasi)

### Discussions
- `GET /discussions` - Mendapatkan semua diskusi
- `POST /discussions` - Membuat diskusi baru (dengan autentikasi)
- `GET /discussions/{discussionId}` - Mendapatkan detail diskusi berdasarkan ID
- `POST /discussions/{discussionId}/comments` - Menambahkan komentar pada diskusi (dengan autentikasi)
- `DELETE /discussions/{discussionId}` - Menghapus diskusi berdasarkan ID (dengan autentikasi)
- `DELETE /discussions/{discussionId}/comments/{commentId}` - Menghapus komentar berdasarkan ID (dengan autentikasi)
- `POST /discussions/{discussionId}/upvote` - Upvote diskusi (dengan autentikasi)
- `POST /discussions/{discussionId}/downvote` - Downvote diskusi (dengan autentikasi)
- `POST /discussions/{discussionId}/neutral-vote` - Menetralkan vote diskusi (dengan autentikasi)
- `POST /discussions/{discussionId}/comments/{commentId}/upvote` - Upvote komentar (dengan autentikasi)
- `POST /discussions/{discussionId}/comments/{commentId}/downvote` - Downvote komentar (dengan autentikasi)
- `POST /discussions/{discussionId}/comments/{commentId}/neutral-vote` - Menetralkan vote komentar (dengan autentikasi)

### Blogs
- `POST /blogs/add` - Membuat blog baru (dengan autentikasi)
- `GET /blogs` - Mendapatkan semua blog
- `GET /blogs/{blogId}` - Mendapatkan detail blog berdasarkan ID
- `PUT /blogs/{blogId}/edit` - Memperbarui blog berdasarkan ID (dengan autentikasi)
- `DELETE /blogs/{blogId}/delete` - Menghapus blog berdasarkan ID (dengan autentikasi)

## Team
Team ID: `C624-PS131`

Anggota Tim
| ID Siswa     | Nama                     | Kelas | GitHub Profile                        |
|--------------|--------------------------|-------|---------------------------------------|
| R0096YB455   | Faisal                   | R-02  | [Hypoow](https://github.com/Hypoow)   |
| R3196YB453   | Abby Fakhri Choiry       | R-03  | [abbyfakhri](https://github.com/abbyfakhri) |
| R3596YB431   | Rafi Syihab              | R-02  | [rfsyhb](https://github.com/rfsyhb)   |
