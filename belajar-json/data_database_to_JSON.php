<?php
// Cara mengubah data dari database ke data JSON menggunakan json_encode
$servername = "localhost";
$username = "root";  // Sesuaikan dengan username MySQL Anda
$password = "";  // Sesuaikan dengan password MySQL Anda
$dbname = "mini_project";

// Membuat koneksi menggunakan mysqli
$conn = new mysqli($servername, $username, $password, $dbname);

// Mengecek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Menyiapkan dan mengeksekusi query menggunakan mysqli
$sql = "SELECT * FROM user";
$result = $conn->query($sql);

// Membuat array untuk menampung data
$coba = array();

// Melakukan perulangan untuk setiap baris hasil query
while ($row = $result->fetch_assoc()) {
    // Mengambil baris hasil query sebagai array asosiatif
    // $row sekarang adalah array asosiatif yang merepresentasikan satu baris dari hasil query
    // Contoh: jika tabel "user" memiliki kolom "id", "name", dan "email", maka $row akan berupa
    // array seperti: ["id" => 1, "name" => "John Doe", "email" => "john@example.com"]

    // Menambahkan array $row ke dalam array $coba
    // Array $coba akan menyimpan semua baris hasil query sebagai elemen-elemennya
    // Setiap elemen dari $coba adalah array asosiatif yang mewakili satu baris dari tabel "user"
    $coba[] = $row;
}


// Mengubah array asosiatif menjadi JSON
$datajson = json_encode($coba);

// Menampilkan data JSON
echo $datajson;

// Menutup koneksi
$conn->close();
?>
