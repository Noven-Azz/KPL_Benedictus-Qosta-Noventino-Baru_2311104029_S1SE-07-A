const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function periksaHuruf() {
  rl.question("Masukkan sebuah huruf: ", (huruf) => {
    huruf = huruf.toUpperCase();
    const hurufVokal = ["A", "I", "U", "E", "O"];

    if (hurufVokal.includes(huruf)) {
      console.log(`Huruf ${huruf} adalah huruf vokal.`);
    } else {
      console.log(`Huruf ${huruf} adalah huruf konsonan.`);
    }
    rl.close();
  });
}

if (require.main === module) {
  periksaHuruf();
}

module.exports = periksaHuruf;
