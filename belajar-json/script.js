// Belajar membuat objek JavaScript menjadi JSON menggunakan JSON.stringify()
// Membuat objek mahasiswa
let lmhs = {
    nama: "BAHRUL",
    nim: "e1312",
    umur: 19
}

// Membuat objek mahasiswa lain
const cmhs = {
    nm: "HHHH",
    ni: "886wax",
    umr: 20
}

// Menggunakan JSON.stringify untuk mengubah objek lmhs menjadi string JSON
console.log(JSON.stringify(lmhs)); // Output: {"nama":"BAHRUL","nim":"e1312","umur":19}

// Menggunakan JSON.parse untuk mengubah string JSON menjadi objek JavaScript
// Perlu mengubah objek cmhs menjadi string JSON terlebih dahulu
let cmhsString = JSON.stringify(cmhs);
console.log(JSON.parse(cmhsString)); // Output: { nm: 'HHHH', ni: '886wax', umr: 20 }
