function tampilall() {
    // Mengosongkan elemen dengan id daftar-menu
    $('#daftar-menu').empty();

    // Mendapatkan data dari file pizza.json dan menampilkannya di halaman
    $.getJSON('data/pizza.json', function(bebas) {
        // Mengeluarkan objek menu dari data JSON
        let menu = bebas.menu;

        // Iterasi melalui setiap item menu
        $.each(menu, function(index, data) {
            // Tambahkan elemen baru di akhir elemen dengan id daftar-menu
            $('#daftar-menu').append(`
                <div class="col-md-3 mt-3 mb-3">
                    <div class="card h-100">
                        <!-- gambar adalah nama key gambar di JSON -->
                        <img src="img/pizza/${data.gambar}" class="card-img-top" style="height: 200px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <!-- nama adalah key dari nama di JSON -->
                            <h5 class="card-title">${data.nama}</h5>
                            <p class="card-text">${data.deskripsi}</p>
                            <h6 class="card-text mt-auto">Rp. ${data.harga}</h6>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`);
        });
    });
}

tampilall();

// Menggunakan delegasi event untuk menangani klik pada elemen nav-link
$(document).on('click', '.nav-link', function() {
    // Menghilangkan semua kelas 'active' dari nav link
    $('.nav-link').removeClass('active');

    // Menambah kelas 'active' pada nav link yang di klik
    $(this).addClass('active');

    // Membuat variabel untuk menyimpan isi HTML dari nav link yang di klik
    let simpantext = $(this).text();

    // Mengganti HTML h1 menjadi teks dari nav link yang di klik
    $('h1').html(simpantext);
    if(simpantext == 'All Menu') {
        tampilall();
        return;
    }
    // Mengosongkan elemen dengan id daftar-menu
    $('#daftar-menu').empty();

    // Mendapatkan data dari file pizza.json
    $.getJSON('data/pizza.json', function(hhh) {
        let menu = hhh.menu;
        let konten = '';

        // Iterasi melalui setiap item menu
        $.each(menu, function(index, data) {
            // Jika teks yang disimpan cocok dengan kategori menu
            if (data.kategori.toLowerCase() == simpantext.toLowerCase()) {
                konten += `
                <div class="col-md-3 mt-3 mb-3">
                    <div class="card h-100">
                        <!-- gambar adalah nama key gambar di JSON -->
                        <img src="img/pizza/${data.gambar}" class="card-img-top" style="height: 200px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <!-- nama adalah key dari nama di JSON -->
                            <h5 class="card-title">${data.nama}</h5>
                            <p class="card-text">${data.deskripsi}</p>
                            <h6 class="card-text mt-auto">Rp. ${data.harga}</h6>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`;
            }
        });

        // Mengganti HTML dari elemen dengan id daftar-menu dengan konten baru
        $('#daftar-menu').html(konten);
    });
});

function menucari() {
    // Ambil nilai dari input dengan id 'input-cari', lalu ubah menjadi huruf kecil (lowercase)
    let keyword = $('#input-cari').val().toLowerCase();
    let textsalah = "Item yang anda cari tidak ada";
    // Kosongkan elemen dengan id 'daftar-menu'
    $('#daftar-menu').empty();

    // Mengambil data JSON dari file 'pizza.json'
    $.getJSON('data/pizza.json', function(hhh) {
        // Menyimpan data menu dari objek JSON yang diterima
        let menu = hhh.menu;
        // Inisialisasi variabel konten sebagai string kosong
        let konten = '';
        // Inisialisasi variabel untuk melacak apakah ada item yang cocok dengan pencarian
        let found = false;

        // Loop melalui setiap item dalam array menu
        $.each(menu, function(index, data) {
            // Jika nama menu mengandung keyword yang dicari
            if (data.nama.toLowerCase().includes(keyword)) {
                // Set found menjadi true jika ada item yang cocok
                found = true;
                // Tambahkan elemen HTML ke dalam variabel konten
                konten += `
                <div class="col-md-3 mt-3 mb-3">
                    <div class="card h-100">
                        <img src="img/pizza/${data.gambar}" class="card-img-top" style="height: 200px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${data.nama}</h5>
                            <p class="card-text">${data.deskripsi}</p>
                            <h6 class="card-text mt-auto">Rp. ${data.harga}</h6>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`;
            }
        });

        // Jika tidak ada item yang cocok dengan pencarian, tambahkan pesan
        if (!found) {
            // konten = '<p>Item yang Anda cari tidak ada.</p>';
            $('h1').html(textsalah);
        }

        // Menambahkan konten yang telah dibangun ke dalam elemen dengan id 'daftar-menu'
        $('#daftar-menu').html(konten);
    });
}



$('#btn-cari').on('click', function() {
    menucari();
});

$('#input-cari').on('keyup', function(event) {
    let text = "Hasil pencarian anda";
    if (event.which === 13) {
        $('h1').html(text);
        menucari();
    }
});