class Penjumlahan {
  // Method dengan tiga parameter generic yang sama yaitu "T"
  JumlahTigaAngka(Tangka1, Tangka2, Tangka3) {
    return Tangka1 + Tangka2 + Tangka3; // Menjumlahkan ketiga parameter
  }
}

function main() {
  let penjumlahan = new Penjumlahan();

  // NIM yang digunakan
  let nim = 2311104029;
  let nimAkhir = nim % 10; // Mendapatkan digit terakhir dari NIM

  let hasil;

  // Memeriksa digit terakhir dari NIM dan memilih tipe data yang sesuai
  if (nimAkhir === 9 || nimAkhir === 0) {
    // Jika NIM berakhiran 9 atau 0, gunakan tipe data long (angka biasa)
    hasil = penjumlahan.JumlahTigaAngka(12, 34, 56); // Angka biasa (long)
    console.log("Hasil penjumlahan (long): " + hasil);
  } else {
    // Jika digit terakhir NIM bukan 9 atau 0, tidak perlu memproses
    console.log("Program hanya memproses NIM yang berakhiran 9 atau 0.");
  }
}

main();
