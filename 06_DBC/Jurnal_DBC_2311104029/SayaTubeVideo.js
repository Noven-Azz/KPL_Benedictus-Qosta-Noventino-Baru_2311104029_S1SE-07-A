class SayaTubeVideo {
  constructor(title) {
    if (
      typeof title !== "string" ||
      title.trim() === "" ||
      title.length > 100
    ) {
      throw new Error(
        "Judul video wajib berupa string dan maksimal 100 karakter."
      );
    }
    this.id = Math.floor(Math.random() * 90000) + 10000;
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(count) {
    if (typeof count !== "number" || count <= 0) {
      throw new Error("Jumlah play harus berupa angka positif.");
    }
    this.playCount += count;
  }

  PrintVideoDetails() {
    console.log(`ID Video: ${this.id}`);
    console.log(`Judul: ${this.title}`);
    console.log(`Jumlah Play: ${this.playCount}`);
    console.log("--------------------------------");
  }
}

class SayaTubeUser {
  constructor(username) {
    if (
      typeof username !== "string" ||
      username.trim() === "" ||
      username.length > 100
    ) {
      throw new Error(
        "Username harus berupa string dan maksimal 100 karakter."
      );
    }
    this.username = username;
    this.uploadedVideos = [];
  }

  AddVideo(video) {
    if (!(video instanceof SayaTubeVideo)) {
      throw new Error("Objek yang ditambahkan harus bertipe SayaTubeVideo.");
    }
    this.uploadedVideos.push(video);
  }

  GetTotalVideoPlayCount() {
    return this.uploadedVideos.reduce(
      (total, video) => total + video.playCount,
      0
    );
  }

  PrintAllVideoPlaycount() {
    console.log(`User: ${this.username}`);
    this.uploadedVideos.forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.title}`);
    });
    console.log("--------------------------------");
  }
}

function main() {
  const user = new SayaTubeUser("Benedictus Qosta Noventino Baru");

  const videoTitles = [
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

  videoTitles.forEach((title) => {
    const video = new SayaTubeVideo(title);
    video.IncreasePlayCount(Math.floor(Math.random() * 1000));
    user.AddVideo(video);
  });

  user.uploadedVideos.forEach((video) => video.PrintVideoDetails());

  user.PrintAllVideoPlaycount();

  console.log(`Total semua play count: ${user.GetTotalVideoPlayCount()}`);
}

main();
