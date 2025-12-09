const songsFiles = import.meta.glob("../songs/*.mp3", {
  eager: true,
  as: "url",
});

const song = Object.keys(songsFiles).map((file, index) => {
  const fileName = file.split("/").pop().replace(".mp3", "");

  // console.log(fileName);

  const artist = fileName.includes("-")
    ? fileName.split("-")[0].trim()
    : "Unknown";

  // console.log(artist);

  const title = fileName.includes("-")
    ? fileName.split("-")[1].trim()
    : fileName;

  console.log(title);

  return {
    id: index + 1,
    title: title,
    artist: artist,
    // cover: "",
    audio: songsFiles[file],
    duration: 0,
    playlistId: 1,
  };
});

console.log(song);
export default song;
