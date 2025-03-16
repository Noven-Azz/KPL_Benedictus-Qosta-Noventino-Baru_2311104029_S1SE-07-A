class PosisiKarakterGame {
  constructor(nim) {
    this.state = "Berdiri";
    this.nimMod = nim % 3;
    this.states = ["Berdiri", "Jongkok", "Tengkurap", "Terbang"];
  }

  ubahState(stateBaru) {
    if (this.states.includes(stateBaru)) {
      if (stateBaru === "Berdiri" && this.nimMod === 1) {
        console.log("Posisi standby");
      }
      if (stateBaru === "Tengkurap" && this.nimMod === 1) {
        console.log("Posisi istirahat");
      }

      this.state = stateBaru;
      console.log(`Karakter sekarang dalam posisi: ${this.state}`);
    } else {
      console.log("State tidak valid");
    }
  }

  tekanTombol(tombol) {
    if (tombol === "S") {
      if (this.nimMod === 0) console.log("Tombol arah bawah ditekan");

      if (this.state === "Berdiri") {
        this.ubahState("Jongkok");
      } else if (this.state === "Jongkok") {
        this.ubahState("Tengkurap");
      } else if (this.state === "Tengkurap") {
        console.log("Tidak bisa menekan tombol S lagi di posisi Tengkurap");
      } else if (this.state === "Terbang") {
        console.log("Tidak bisa menekan tombol S saat terbang");
      }
    } else if (tombol === "W") {
      if (this.nimMod === 0) console.log("Tombol arah atas ditekan");

      if (this.state === "Tengkurap") {
        this.ubahState("Jongkok");
      } else if (this.state === "Jongkok") {
        this.ubahState("Berdiri");
      } else if (this.state === "Berdiri") {
        this.ubahState("Terbang");
      } else if (this.state === "Terbang") {
        this.ubahState("Berdiri");
      }
    } else {
      console.log("Tombol tidak valid");
    }
  }
}

const karakter = new PosisiKarakterGame(2311104031);
karakter.tekanTombol("S");
karakter.tekanTombol("S");
karakter.tekanTombol("W");
karakter.tekanTombol("W");
karakter.tekanTombol("W");
karakter.tekanTombol("S");
karakter.tekanTombol("W");
