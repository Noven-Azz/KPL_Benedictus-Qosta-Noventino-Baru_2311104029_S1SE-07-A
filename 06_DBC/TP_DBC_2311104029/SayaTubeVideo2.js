class SayaTubeVideo {
  constructor(title) {
    if (typeof title !== "string" || title.trim() === "") {
      throw new Error("Title harus berupa string dan tidak boleh null.");
    }
    if (title.length > 100) {
      throw new Error("Title tidak boleh lebih dari 100 karakter.");
    }

    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(count) {
    if (typeof count !== "number" || count <= 0) {
      throw new Error("Jumlah playCount harus berupa angka positif.");
    }
    if (count > 10000000) {
      throw new Error(
        "Penambahan playCount maksimal 10.000.000 per pemanggilan."
      );
    }
    if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
      throw new Error("Integer overflow: playCount melebihi batas maksimal.");
    }

    this.playCount += count;
  }

  PrintVideoDetails() {
    console.log(`Video ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
  }
}

try {
  const video = new SayaTubeVideo(
    "Tutorial Design By Contract – Benedictus Qosta Noventino Baru"
  );
  video.IncreasePlayCount(100);
  video.PrintVideoDetails();

  try {
    const invalidVideo = new SayaTubeVideo("B".repeat(101));
  } catch (error) {
    console.error("Error pada judul video:", error.message);
  }

  try {
    video.IncreasePlayCount(20000000);
  } catch (error) {
    console.error("Error pada IncreasePlayCount:", error.message);
  }

  try {
    for (let i = 0; i < 1000; i++) {
      video.IncreasePlayCount(10000000);
    }
  } catch (error) {
    console.error("Error integer overflow:", error.message);
  }
} catch (error) {
  console.error("Terjadi kesalahan:", error.message);
}
