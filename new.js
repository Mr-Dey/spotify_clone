console.log("welcome to spotify");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("music/0.mp3");
let masterplay = document.getElementById("masterplay");
let myPrgressbar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songItemplay = Array.from(document.getElementsByClassName("songItemplay"));
let nowplaying = document.getElementById("nowPlaying");
console.log(songItems);
let songs = [
  {
    songName: "BEAUZ - Illusion (feat. Crunr)",
    filePath: "music/0.mp3",
    coverPath: "cover/0.jpg",
  },
  {
    songName: "No Rival-Maestro Chives & Alaina Cross",
    filePath: "music/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Elektronomia x Stahl x RUD - Caramel",
    filePath: "music/2.mp3",
    coverPath: "cover/2.jpg",
  },
  {
    songName: "Lost Sky x She Is Jules - Darkness",
    filePath: "music/3.mp3",
    coverPath: "cover/3.jpg",
  },
  {
    songName: "Max Brhon - Redemption",
    filePath: "music/4.mp3",
    coverPath: "cover/4.jpg",
  },
  {
    songName: "Sharks - Shiver",
    filePath: "music/5.mp3",
    coverPath: "cover/5.jpg",
  },
  {
    songName: "T & Sugah x NCT - Find A Way",
    filePath: "music/6.mp3",
    coverPath: "cover/6.jpg",
  },
  {
    songName: "Zack Merci - BOUNCE (feat. Nieko)",
    filePath: "music/7.mp3",
    coverPath: "cover/7.jpg",
  },
];

songItems.forEach((Element, i) => {
  Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  Element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
  Element.getElementsByClassName("duration")[0].innerHTML = "Will add duration";
});

//Listen to Events
//master play/pause
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
    gif.style.opacity = 1;
    nowplaying.innerHTML == 0
      ? (nowplaying.innerHTML = songs[0].songName)
      : console.log("NULL");
    nowplaying.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause");
    masterplay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});
//progress bar
audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myPrgressbar.value = progress;
});
myPrgressbar.addEventListener("change", () => {
  audioElement.currentTime = (myPrgressbar.value * audioElement.duration) / 100;
});

//make all list icon play button
const listPlaybutton = () => {
  songItemplay.forEach((Element) => {
    Element.classList.add("fa-play");
  });
};

//Play music from list
songItemplay.forEach((Element) => {
  Element.addEventListener("click", (e) => {
    listPlaybutton();
    let index = parseInt(e.target.id);
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    audioElement.src = `music/${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
    nowplaying.innerHTML = songs[index].songName;
    nowplaying.style.opacity = 1;
  });
});
