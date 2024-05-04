let btnSound = document.querySelector(".btn-sound");
let sound = document.querySelector("audio");
console.dir(sound);
btnSound.onclick = () => {
  if (sound.paused) {
    console.log("Включаем");
    sound.play();
  } else {
    console.log("выключаем");
    sound.pause();
  }
};
