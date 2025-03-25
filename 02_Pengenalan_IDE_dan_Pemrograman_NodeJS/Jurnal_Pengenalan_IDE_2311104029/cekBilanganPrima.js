const readline = require("readline");

function cekPrima(angka) {
  if (angka < 2) return false;
  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) return false;
  }
  return true;
}

function bagianC() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Masukkan angka antara 1 hingga 10000: ", (inputString) => {
    const inputAngka = parseInt(inputString);
    if (isNaN(inputAngka) || inputAngka < 1 || inputAngka > 10000) {
      console.log(
        "Input tidak valid. Harus berupa angka dalam rentang 1 hingga 10000."
      );
    } else {
      if (cekPrima(inputAngka)) {
        console.log(`Angka ${inputAngka} adalah bilangan prima.`);
      } else {
        console.log(`Angka ${inputAngka} bukan bilangan prima.`);
      }
    }
    rl.close();
  });
}

bagianC();
