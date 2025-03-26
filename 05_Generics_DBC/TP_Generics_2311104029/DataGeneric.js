class DataGeneric {
  // Konstruktor untuk inisialisasi properti data
  constructor(data) {
    this.data = data; // Menyimpan data yang diberikan ke properti "data"
  }

  // Method untuk mencetak data yang tersimpan
  PrintData() {
    console.log(`Data yang tersimpan adalah: ${this.data}`); // Mencetak data yang tersimpan
  }
}

function main() {
  // Membuat objek DataGeneric dengan NIM
  let dataGeneric = new DataGeneric("2311104029"); // Mengisi data dengan NIM

  // Memanggil method PrintData untuk mencetak data
  dataGeneric.PrintData();
}

main();
