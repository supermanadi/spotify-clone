let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let mastersongname = document.getElementById("mastersongname");

let songItems = Array.from(document.getElementsByClassName("songItem"));

// audioElement.play();
let songs = [
  {
    songName: "Let me love you",
    filePath: "1.mp3",
    coverPath: "1.jpg",
  },
  { songName: "I am sorry", filePath: "2.mp3", coverPath: "2.jpg" },
  { songName: "isole", filePath: "3.mp3", coverPath: "3.jpg" },
  { songName: "Let me down slowly", filePath: "4.mp3", coverPath: "4.jpg" },
  { songName: "You don't belong to me", filePath: "5.mp3", coverPath: "5.jpg" },
  { songName: "holi hai", filePath: "6.mp3", coverPath: "6.jpg" },
  { songName: "Love me like you do", filePath: "7.mp3", coverPath: "7.jpg" },
  { songName: "My Heart Will Go On", filePath: "8.mp3", coverPath: "8.jpg" },
  { songName: "Hide and Seek", filePath: "9.mp3", coverPath: "9.jpg" },
  { songName: "I Love my India", filePath: "9.mp3", coverPath: "10.jpg" },
];
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

// listen to events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");

      e.target.classList.add("fa-circle-pause");
      audioElement.src = `${songIndex + 1}.mp3`;
      mastersongname.innerHTML = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = "1";
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  mastersongname.innerHTML = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = "1";
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  mastersongname.innerHTML = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = "1";
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
