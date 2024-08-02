<?php
//buat variabel untuk menyimpan json yang di dapatkan 
//oleh file_get_contents dari folder data, file namanya pizza.json
$datajson = file_get_contents('data/pizza.json');

//ubah json ke array
//buat variabel untuk menyimpan perubahan json ke array 
//mengubah json ke array menggunakan json_decode
//ambil datanya lalu ingin mengubahnya menjadi objek atau array
//jika true maka di ubah ke array
$menu = json_decode($datajson, true);
//var_dump($menu);
//jika format json objek dulu seperti yang di pizza.json itu adalah objek dulu dengan nama objek menu
//yang dibutuhkan adalah array nya

//coba mencari "nama": "Meat Lover"
// var_dump($menu["menu"][0]["nama"]);

//cara menghilangkan objek "menu" di json nya
$menu = $menu["menu"];
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Api Belajar PHP</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

</head>

<body>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">HAJUENTER</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Link
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <!-- tampilan -->
    <div class="row border">
        <div class="col">
            <h1 class="text-center">ALL SEMUA</h1>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <?php foreach ($menu as $b) : ?>
                <div class="col-md-3 mt-3 mb-3">
                    <div class="card h-100">
                        <!-- gambar adalah nama key gambar di json nya -->
                        <img src="img/pizza/<?= $b["gambar"] ?>" class="card-img-top" style="height: 200px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <!-- nama adalah key dari nama di json -->
                            <h5 class="card-title"><?= $b["nama"] ?></h5>
                            <p class="card-text"><?= $b["deskripsi"] ?></p>
                            <h6 class="card-text mt-auto">Rp.<?= $b["harga"] ?></h6>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>




    <!-- script  -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</body>

</html>