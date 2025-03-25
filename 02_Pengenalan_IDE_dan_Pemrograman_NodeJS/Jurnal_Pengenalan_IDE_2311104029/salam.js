const readline = require("readline");

function tampilkanSalam() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Silakan masukkan nama Anda: ", (nama) => {
    console.log(`Selamat datang, ${nama}!`);
    rl.close();
  });
}

tampilkanSalam();
