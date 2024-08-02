<?php
// cara mengubah JSON menjadi array menggunakan json_decode

// Mengambil isi file JSON
// file_get_contents digunakan untuk membaca seluruh isi file ke dalam sebuah string

// Jika file berada di folder lain, gunakan path lengkap atau relatif
// $data = file_get_contents('namafolder/belajar.json');

// Mengambil data JSON dari internet
// Anda juga dapat mengambil data dari URL menggunakan file_get_contents
// $data = file_get_contents('https://acscacsassa');

// Karena lokasi file JSON berada di folder yang sama, kita langsung menulis nama file-nya
$data = file_get_contents('belajar.json');

// Mengubah data JSON menjadi array asosiatif
// json_decode mengubah string JSON menjadi struktur data PHP (array atau object)
// Parameter kedua true berarti hasil decode akan berupa array asosiatif, bukan object
$json = json_decode($data, true);

// Menampilkan struktur array menggunakan var_dump (berguna untuk debugging)
// var_dump menampilkan informasi tentang variabel termasuk tipe dan nilai-nilainya
var_dump($json);

// Mengakses elemen dalam array hasil decode JSON
// Contoh ini mengakses elemen array pada indeks 0, lalu masuk ke key "pembimbing" dan akhirnya ke "pembimbing2"
// echo digunakan untuk menampilkan data ke layar
echo $json[0]["pembimbing"]["pembimbing2"];
?>
