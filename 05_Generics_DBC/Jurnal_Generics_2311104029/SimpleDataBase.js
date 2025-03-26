class SimpleDataBase {
  // Constructor untuk inisialisasi properti
  constructor() {
    this.storedData = []; // List untuk menyimpan data bertipe T
    this.inputDates = []; // List untuk menyimpan waktu input
  }

  // Method untuk menambahkan data baru beserta waktu input
  AddNewData(data) {
    this.storedData.push(data); // Menambahkan data ke storedData
    this.inputDates.push(new Date()); // Menambahkan waktu input (sekarang) ke inputDates
  }

  // Method untuk mencetak seluruh data dan waktu input
  PrintAllData() {
    for (let i = 0; i < this.storedData.length; i++) {
      console.log(
        `Data ${i + 1} berisi: ${
          this.storedData[i]
        }, yang disimpan pada waktu UTC: ${this.inputDates[i].toUTCString()}`
      );
    }
  }
}

function main() {
  let simpleDataBase = new SimpleDataBase();

  // Menambahkan tiga data dua-digit NIM
  simpleDataBase.AddNewData(12);
  simpleDataBase.AddNewData(34);
  simpleDataBase.AddNewData(56);

  // Mencetak seluruh data yang ada
  simpleDataBase.PrintAllData();
}

main();
