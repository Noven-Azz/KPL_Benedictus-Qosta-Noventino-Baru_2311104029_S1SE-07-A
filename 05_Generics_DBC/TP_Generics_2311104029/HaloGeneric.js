class HaloGeneric {
  // Method untuk menyapa user dengan parameter generik
  SapaUser(user) {
    console.log(`Halo user ${user}`); // Mencetak sapaan dengan nama user
  }
}

function main() {
  let haloGeneric = new HaloGeneric();

  // Memanggil method SapaUser dengan nama panggilan praktikan
  haloGeneric.SapaUser("Noven"); // Nama Anda
}

main();
