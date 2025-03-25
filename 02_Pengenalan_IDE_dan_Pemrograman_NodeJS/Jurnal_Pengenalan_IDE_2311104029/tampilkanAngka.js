const readline = require("readline");

function tampilkanAngka() {
  const angka = Array.from({ length: 50 }, (_, i) => i);
  angka.forEach((nilai) => {
    let hasil = `${nilai}`;
    if (nilai % 2 === 0 && nilai % 3 === 0) {
      hasil += " #$#$";
    } else if (nilai % 2 === 0) {
      hasil += " ##";
    } else if (nilai % 3 === 0) {
      hasil += " $$";
    }
    console.log(hasil);
  });
}

tampilkanAngka();
