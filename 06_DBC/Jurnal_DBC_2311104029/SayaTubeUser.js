class SayaTubeVideo {
  constructor(title) {
    if (typeof title !== "string" || title.trim() === "") {
      throw new Error("Judul video tidak boleh kosong atau bukan string.");
    }
    if (title.length > 200) {
      throw new Error("Judul video melebihi batas maksimum 200 karakter.");
    }

    this.id = Math.floor(Math.random() * 90000) + 10000;
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(count) {
    try {
      if (typeof count !== "number" || count <= 0) {
        throw new Error("Play count harus berupa angka positif.");
      }
      if (count > 25000000) {
        throw new Error(
          "Play count tidak boleh lebih dari 25 juta dalam satu penambahan."
        );
      }
      if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
        throw new Error("Terjadi integer overflow pada play count.");
      }

      this.playCount += count;
    } catch (err) {
      console.error(`Error saat menambahkan play count: ${err.message}`);
    }
  }

  PrintVideoDetails() {
    console.log(`ID Video: ${this.id}`);
    console.log(`Judul: ${this.title}`);
    console.log(`Jumlah Penayangan: ${this.playCount}`);
    console.log("--------------------------------");
  }
}

class SayaTubeUser {
  constructor(username) {
    if (typeof username !== "string" || username.trim() === "") {
      throw new Error("Username tidak boleh kosong atau bukan string.");
    }
    if (username.length > 100) {
      throw new Error("Username melebihi batas 100 karakter.");
    }

    this.username = username;
    this.uploadedVideos = [];
  }

  AddVideo(video) {
    try {
      if (!(video instanceof SayaTubeVideo)) {
        throw new Error(
          "Hanya objek dari SayaTubeVideo yang dapat ditambahkan."
        );
      }
      if (video.playCount >= Number.MAX_SAFE_INTEGER) {
        throw new Error("Play count video terlalu besar untuk ditambahkan.");
      }

      this.uploadedVideos.push(video);
    } catch (err) {
      console.error(`Gagal menambahkan video: ${err.message}`);
    }
  }

  GetTotalVideoPlayCount() {
    return this.uploadedVideos.reduce((acc, video) => acc + video.playCount, 0);
  }

  PrintAllVideoPlaycount() {
    console.log(`Daftar Video dari User: ${this.username}`);

    const jumlahCetak = Math.min(8, this.uploadedVideos.length);
    for (let i = 0; i < jumlahCetak; i++) {
      console.log(`Video ke-${i + 1} judul: ${this.uploadedVideos[i].title}`);
    }
    console.log("--------------------------------");
  }
}

function main() {
  try {
    const user = new SayaTubeUser("Benedictus Qosta Noventino Baru");

    const daftarJudulVideo = [
      "Review Film Dune: Part Two oleh Benedictus Qosta Noventino Baru",
      "Review Film Oppenheimer oleh Benedictus Qosta Noventino Baru",
      "Review Film Spider-Man: No Way Home oleh Benedictus Qosta Noventino Baru",
      "Review Film Barbie oleh Benedictus Qosta Noventino Baru",
      "Review Film The Batman oleh Benedictus Qosta Noventino Baru",
      "Review Film Everything Everywhere All At Once oleh Benedictus Qosta Noventino Baru",
      "Review Film Top Gun: Maverick oleh Benedictus Qosta Noventino Baru",
      "Review Film John Wick: Chapter 4 oleh Benedictus Qosta Noventino Baru",
      "Review Film Poor Things oleh Benedictus Qosta Noventino Baru",
      "Review Film Killers of the Flower Moon oleh Benedictus Qosta Noventino Baru",
    ];

    daftarJudulVideo.forEach((judul) => {
      const videoBaru = new SayaTubeVideo(judul);
      videoBaru.IncreasePlayCount(Math.floor(Math.random() * 1000));
      user.AddVideo(videoBaru);
    });

    user.uploadedVideos.forEach((video) => video.PrintVideoDetails());

    user.PrintAllVideoPlaycount();

    console.log(
      `Total keseluruhan play count: ${user.GetTotalVideoPlayCount()}`
    );

    console.log("\nSimulasi Overflow Play Count...");
    const videoTest = new SayaTubeVideo("Test Overflow Play Count");
    const nilaiOverflow = Number.MAX_SAFE_INTEGER / 2;

    for (let i = 0; i < 3; i++) {
      videoTest.IncreasePlayCount(nilaiOverflow);
      console.log(`Percobaan ${i + 1}: Play Count = ${videoTest.playCount}`);
    }
  } catch (err) {
    console.error(`Terjadi kesalahan pada program utama: ${err.message}`);
  }
}

main();
