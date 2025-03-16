const a = 10;
const b = 20;
const c = 30;

if (a > b) {
  console.log("a lebih besar dari b");
} else {
  console.log("a lebih kecil dari b");
}

if (a % 2 === 0) {
  console.log("a adalah bilangan genap");
} else if (b % 2 !== 0) {
  console.log("b adalah bilangan ganjil");
} else {
  console.log("a dan b adalah bilangan ganjil");
}

let pilihan = 2;

switch (pilihan) {
  case 1:
    console.log("Pilihan anda adalah 1");
    break;
  case 2:
    console.log("Pilihan anda adalah 2");
    break;
  case 3:
    console.log("Pilihan anda adalah 3");
    break;
  default:
    console.log("Pilihan anda tidak ada");
    break;
}
