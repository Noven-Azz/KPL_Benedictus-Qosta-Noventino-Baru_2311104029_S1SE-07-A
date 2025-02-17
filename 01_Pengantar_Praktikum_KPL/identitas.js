import process from "process";
import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Siapa nama kamu ?", (nama) => {
  console.log(`Halo ${nama}!`);

  input.question("Umur kamu ?", (umur) => {
    console.log(`Umur kamu adalah ${umur} tahun.`);

    input.question("Universitas kamu ?", (univ) => {
      console.log(`Univ kamu adalah ${univ}`);

      input.question("Jurusan kamu ?", (prodi) => {
        console.log(`Jurusan kamu adalah ${prodi}`);

        input.close();
      });
    });
  });
});
