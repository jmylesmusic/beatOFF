const levelOne = [
  { type: "hi-hat", timing: 120 },
  { type: "snare", timing: 150 },
  { type: "hi-hat", timing: 180 },
  { type: "snare", timing: 210 },
  { type: "hi-hat", timing: 240 },
  { type: "snare", timing: 270 },
  { type: "hi-hat", timing: 285 },
  { type: "hi-hat", timing: 300 },
  { type: "snare", timing: 330 },
  { type: "hi-hat", timing: 360 },
  { type: "snare", timing: 390 },
  { type: "hi-hat", timing: 420 },
  { type: "snare", timing: 450 },
  { type: "hi-hat", timing: 480 },
  { type: "snare", timing: 510 },
  { type: "hi-hat", timing: 525 },
  { type: "hi-hat", timing: 540 },
  { type: "snare", timing: 570 },
];

const levelTwo = [
  { type: "hi-hat", timing: 120 },
  { type: "hi-hat", timing: 135 },
  { type: "hi-hat", timing: 150 },
  { type: "hi-hat", timing: 165 },
  { type: "hi-hat", timing: 180 },
  { type: "hi-hat", timing: 195 },
  { type: "hi-hat", timing: 210 },
  { type: "hi-hat", timing: 225 },
  { type: "hi-hat", timing: 240 },
  { type: "hi-hat", timing: 255 },
  { type: "hi-hat", timing: 270 },
  { type: "hi-hat", timing: 285 },
  { type: "hi-hat", timing: 300 },
  { type: "hi-hat", timing: 315 },
  { type: "hi-hat", timing: 330 },
  { type: "hi-hat", timing: 345 },
];

const levelThree = [
  { type: "hi-hat", timing: 120 },
  { type: "hi-hat", timing: 135 },
  { type: "hi-hat", timing: 150 },
  { type: "hi-hat", timing: 165 },
  { type: "hi-hat", timing: 180 },
  { type: "hi-hat", timing: 195 },
  { type: "hi-hat", timing: 210 },
  { type: "hi-hat", timing: 225 },
  { type: "hi-hat", timing: 240 },
  { type: "hi-hat", timing: 255 },
  { type: "hi-hat", timing: 270 },
  { type: "hi-hat", timing: 285 },
  { type: "hi-hat", timing: 300 },
  { type: "hi-hat", timing: 315 },
  { type: "hi-hat", timing: 330 },
  { type: "hi-hat", timing: 345 },
];

class Game {
  constructor() {
    this.startScreen = document.querySelector(".game-title-screen");
    this.gameScreen = document.querySelector(".game-container");
    this.score = 0;
    this.notes = [];
    this.level = 1;
    this.levelButton = document.getElementById("next-level");
    this.retryButton = document.getElementById("retry-level");
    this.notesLevelOne = levelOne;
    this.notesLevelTwo = levelTwo;
    this.notesLevelThree = levelThree;
    this.startScreen.style.display = "block";
    this.gameScreen.style.display = "none";
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.frameNumber = 0;
    this.drumLights = document.querySelector(".drum-lights-container");
    this.drumLights.style.display = "none";
    this.countOne = document.getElementById("one");
    this.countTwo = document.getElementById("two");
    this.countThree = document.getElementById("three");
    this.countFour = document.getElementById("four");
  }

  start() {
    console.log("start");
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.drumLights.style.display = "block";
    this.frameNumber = 0;
    this.gameIntervalId = setInterval(() => {
      this.frameNumber += 1;
      this.levelScreen();
      this.gameLoop();
      this.countIn(this.frameNumber);
      this.noteGenerator(this.frameNumber);
    }, this.gameLoopFrequency);
  }

  homeScreen() {
    this.startScreen.style.display = "block";
    this.gameScreen.style.display = "none";
  }

  gameLoop() {
    this.notes.forEach((note) => note.move());
  }

  noteGenerator(frameNumber) {
    let notesArray;
    switch (this.level) {
      case 1:
        notesArray = this.notesLevelOne;
        break;
      case 2:
        notesArray = this.notesLevelTwo;
        break;
      case 3:
        notesArray = this.notesLevelThree;
        break;
    }
    const noteToPlay = notesArray.find(
      (currentNote) => currentNote.timing === frameNumber
    );
    if (noteToPlay) {
      this.notes.push(new Note(noteToPlay.type, this.gameScreen));
    }
  }

  levelScreen() {
    if (this.score === 1000 || this.frameNumber >= 720) {
      this.levelButton.style.display = "block";
      this.retryButton.style.display = "block";
    }
  }

  countIn(frame) {
    if (frame === 51) {
      this.countOne.style.display = "block";
    }
    if (frame === 80) {
      this.countOne.style.display = "none";
      this.countTwo.style.display = "block";
    }
    if (frame === 110) {
      this.countTwo.style.display = "none";
      this.countThree.style.display = "block";
    }
    if (frame === 140) {
      this.countThree.style.display = "none";
      this.countFour.style.display = "block";
    }
    if (frame === 170) {
      this.countFour.style.display = "none";
    }
  }
}
