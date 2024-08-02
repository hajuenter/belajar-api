<?php

// Cara mengubah array menjadi JSON di PHP menggunakan json_encode

$mhs = [
    [
        "nama" => "BAHRUL",
        "nim" => "33333",
        "umur" => 19
    ],
    [
        "nama" => "hhh",
        "nim" => "33333",
        "umur" => 16
    ]
];

// Tampilkan struktur array menggunakan var_dump (hanya untuk debugging)
// var_dump($mhs);

// Mengubah data array asosiatif menjadi JSON menggunakan json_encode
$datajson = json_encode($mhs);

// Tampilkan data JSON
echo $datajson;
