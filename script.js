// Hi-Hat
const hiHat = document.getElementById("hi-hat");
const hiHatSound = new Audio("./sounds/hi-hat.mp3");
let hiHatKey = "KeyA";
const hiHatLight = document.getElementById("hi-hat-light");
const hiHatWrapperLight = document.getElementById("hi-hat-wrapper-light");
buttonClicks(hiHat, hiHatSound, hiHatLight);
makeSoundAndLight(hiHatSound, hiHatKey, hiHatLight, hiHatWrapperLight);
// Crash Cymbal
const crashCymbal = document.getElementById("crash-cymbal");
const crashCymbalSound = new Audio("./sounds/crash-cymbal.mp3");
let crashCymbalKey = "KeyQ";
const crashCymbalLight = document.getElementById("crash-cymbal-light");
const crashCymbalWrapperLight = document.getElementById(
  "crash-cymbal-wrapper-light"
);
buttonClicks(crashCymbal, crashCymbalSound, crashCymbalLight);
makeSoundAndLight(
  crashCymbalSound,
  crashCymbalKey,
  crashCymbalLight,
  crashCymbalWrapperLight
);
// Snare Drum
const snareDrum = document.getElementById("snare-drum");
const snareDrumSound = new Audio("./sounds/snare-drum.mp3");
let snareDrumKey = "KeyS";
const snareDrumLight = document.getElementById("snare-drum-light");
const snareDrumWrapperLight = document.getElementById(
  "snare-drum-wrapper-light"
);
buttonClicks(snareDrum, snareDrumSound, snareDrumLight);
makeSoundAndLight(
  snareDrumSound,
  snareDrumKey,
  snareDrumLight,
  snareDrumWrapperLight
);
// Hi-Tom
const hiTom = document.getElementById("hi-tom");
const hiTomSound = new Audio("./sounds/hi-tom.mp3");
let hiTomKey = "KeyW";
const hiTomLight = document.getElementById("hi-tom-light");
const hiTomWrapperLight = document.getElementById("hi-tom-wrapper-light");
buttonClicks(hiTom, hiTomSound, hiTomLight);
makeSoundAndLight(hiTomSound, hiTomKey, hiTomLight, hiTomWrapperLight);
// Kick Drum
const kickDrum = document.getElementById("kick-drum");
const kickDrumSound = new Audio("./sounds/kick-drum.mp3");
let kickDrumKey = "KeyX";
const kickDrumLight = document.getElementById("kick-drum-light");
const kickDrumWrapperLight = document.getElementById("kick-drum-wrapper-light");
buttonClicks(kickDrum, kickDrumSound, kickDrumLight);
makeSoundAndLight(
  kickDrumSound,
  kickDrumKey,
  kickDrumLight,
  kickDrumWrapperLight
);
// Mid-Tom
const midTom = document.getElementById("mid-tom");
const midTomSound = new Audio("./sounds/mid-tom.mp3");
let midTomKey = "KeyE";
const midTomLight = document.getElementById("mid-tom-light");
const midTomWrapperLight = document.getElementById("mid-tom-wrapper-light");
buttonClicks(midTom, midTomSound, midTomLight);
makeSoundAndLight(midTomSound, midTomKey, midTomLight, midTomWrapperLight);
// Low-Tom
const lowTom = document.getElementById("low-tom");
const lowTomSound = new Audio("./sounds/low-tom.mp3");
let lowTomKey = "KeyD";
const lowTomLight = document.getElementById("low-tom-light");
const lowTomWrapperLight = document.getElementById("low-tom-wrapper-light");
buttonClicks(lowTom, lowTomSound, lowTomLight);
makeSoundAndLight(lowTomSound, lowTomKey, lowTomLight, lowTomWrapperLight);
// Floor Tom
const floorTom = document.getElementById("floor-tom");
const floorTomSound = new Audio("./sounds/floor-tom.mp3");
let floorTomKey = "KeyC";
buttonClicks(floorTom, floorTomSound, lowTomLight);
makeSoundAndLight(floorTomSound, floorTomKey, lowTomLight, lowTomWrapperLight);
// Ride Cymbal
const rideCymbal = document.getElementById("ride-cymbal");
const rideCymbalSound = new Audio("./sounds/ride-cymbal.mp3");
let rideCymbalKey = "KeyR";
const rideCymbalLight = document.getElementById("ride-cymbal-light");
const rideCymbalWrapperLight = document.getElementById(
  "ride-cymbal-wrapper-light"
);
buttonClicks(rideCymbal, rideCymbalSound, rideCymbalLight);
makeSoundAndLight(
  rideCymbalSound,
  rideCymbalKey,
  rideCymbalLight,
  rideCymbalWrapperLight
);
//FUNCTIONS
// Play the Sound
function playSound(sound) {
  sound.play();
  sound.currentTime = 0;
}
// Add the Light
function makeLight(light) {
  light.style.opacity = "0.75";
  setTimeout(function () {
    light.style.opacity = "0";
  }, 100);
}

// Sound and Light
function makeSoundAndLight(sound, key, drumsetLight, wrapperLight) {
  document.addEventListener("keydown", (event) => {
    if (event.code === key) {
      playSound(sound);
      makeLight(drumsetLight);
      makeLight(wrapperLight);
    }
  });
}
// Key Clicks and Light
function buttonClicks(instrument, sound, light) {
  instrument.addEventListener("click", () => {
    playSound(sound);
    makeLight(light);
  });
}

const getFreeJam = document.getElementById("free-jam");
getFreeJam.addEventListener("click", function () {
  freeJam();
});
// How about a game that runs?
window.onload = function () {
  const startButton = document.getElementById("new-game");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game = new Game();
    game.start();
  }

  const homeButton = document.getElementById("game-title");
  homeButton.addEventListener("click", function () {
    console.log("home");
    game.homeScreen();
  });

  const retryLevelButton = document.getElementById("retry-level");
  retryLevelButton.addEventListener("click", function () {
    console.log("home");
    startGame();
  });
};
