function tampilkanBilanganGenap() {
  const bilanganGenap = [2, 4, 6, 8, 10];
  bilanganGenap.forEach((angka, urutan) => {
    console.log(`Bilangan genap ke-${urutan + 1} : ${angka}`);
  });
}

if (require.main === module) {
  tampilkanBilanganGenap();
}

module.exports = tampilkanBilanganGenap;
