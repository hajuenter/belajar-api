// Menggunakan jQuery untuk mengambil data JSON dan mengonversinya menjadi objek JavaScript

// $.getJSON adalah metode jQuery untuk mengambil data JSON dari URL yang diberikan
$.getJSON('belajar.json', function (data) {
    // Callback function ini akan dipanggil setelah data JSON berhasil diambil dan diubah menjadi objek JavaScript

    // Menampilkan objek hasil parsing ke konsol
    console.log(data);
});
