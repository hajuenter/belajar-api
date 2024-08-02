// Membuat instance dari XMLHttpRequest untuk mengirim permintaan HTTP
let xxx = new XMLHttpRequest();

// Menetapkan fungsi yang akan dieksekusi setiap kali ada perubahan pada readyState
xxx.onreadystatechange = function() {
    // Memeriksa apakah permintaan telah selesai (readyState == 4) dan berhasil (status == 200)
    if (xxx.readyState == 4 && xxx.status == 200) {
        // Mengonversi respons JSON ke objek JavaScript
        let coba = JSON.parse(this.responseText);
        // Menampilkan objek hasil parsing ke konsol
        console.log(coba);
    }
}

// Membuka koneksi ke file 'belajar.json' menggunakan metode GET
//selain get ada POST, PUT, DELETE 
xxx.open('GET', 'belajar.json', true);

// Mengirim permintaan ke server
xxx.send();
GET

// Tujuan: Mengambil data dari server.
// Contoh: xxx.open('GET', 'belajar.json', true);
// Karakteristik: Data dikirim melalui URL. Umum digunakan untuk mendapatkan data dari server tanpa mengubah status server.
// POST

// Tujuan: Mengirim data ke server untuk memproses atau menyimpan.
// Contoh: xxx.open('POST', 'submitData', true);
// Karakteristik: Data dikirim dalam body permintaan. Cocok untuk mengirim data yang besar atau sensitif, seperti formulir atau file.
// PUT

// Tujuan: Mengirim data ke server untuk memperbarui sumber daya yang ada atau membuat sumber daya baru jika tidak ada.
// Contoh: xxx.open('PUT', 'updateData/123', true);
// Karakteristik: Data dikirim dalam body permintaan. Digunakan untuk pembaruan sumber daya tertentu dengan identifikasi unik.
// DELETE

// Tujuan: Menghapus sumber daya dari server.
// Contoh: xxx.open('DELETE', 'deleteData/123', true);
// Karakteristik: Tidak memerlukan body permintaan. Digunakan untuk menghapus sumber daya tertentu dengan identifikasi unik.
// HEAD

// Tujuan: Meminta header respons dari server yang sama seperti GET tetapi tanpa body respons.
// Contoh: xxx.open('HEAD', 'checkResource', true);
// Karakteristik: Berguna untuk memeriksa meta-informasi tentang sumber daya, seperti ukuran atau jenis, tanpa mengunduh sumber daya itu sendiri.
// OPTIONS

// Tujuan: Meminta informasi tentang opsi komunikasi yang tersedia untuk sumber daya target.
// Contoh: xxx.open('OPTIONS', 'someResource', true);
// Karakteristik: Digunakan untuk mengetahui metode HTTP apa yang didukung oleh server untuk sumber daya tertentu.
// PATCH

// Tujuan: Mengirim data untuk memperbarui sebagian sumber daya yang ada.
// Contoh: xxx.open('PATCH', 'updatePartialData/123', true);
// Karakteristik: Data dikirim dalam body permintaan. Digunakan untuk pembaruan sebagian dari sumber daya yang ada, bukan keseluruhan.