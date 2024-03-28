const levelOne = [
  { type: "kick", timing: 120 },
  { type: "snare", timing: 120 },
  { type: "snare", timing: 150 },
  { type: "kick", timing: 180 },
  { type: "snare", timing: 210 },
  { type: "kick", timing: 240 },
  { type: "snare", timing: 270 },
  { type: "kick", timing: 285 },
  { type: "kick", timing: 300 },
  { type: "snare", timing: 330 },
  { type: "kick", timing: 360 },
  { type: "snare", timing: 390 },
  { type: "kick", timing: 420 },
  { type: "snare", timing: 450 },
  { type: "kick", timing: 480 },
  { type: "snare", timing: 510 },
  { type: "kick", timing: 525 },
  { type: "kick", timing: 540 },
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
  { type: "hi-hat", timing: 360 },
  { type: "hi-hat", timing: 375 },
  { type: "hi-hat", timing: 390 },
  { type: "hi-hat", timing: 405 },
  { type: "hi-hat", timing: 420 },
  { type: "hi-hat", timing: 435 },
  { type: "hi-hat", timing: 450 },
  { type: "hi-hat", timing: 465 },
  { type: "hi-hat", timing: 480 },
  { type: "hi-hat", timing: 495 },
  { type: "hi-hat", timing: 510 },
  { type: "hi-hat", timing: 525 },
  { type: "hi-hat", timing: 540 },
  { type: "hi-hat", timing: 555 },
  { type: "hi-hat", timing: 570 },
  { type: "hi-hat", timing: 585 },
];

class Game {
  constructor() {
    this.startScreen = document.querySelector(".game-title-screen");
    this.startScreen.style.display = "block";
    this.gameScreen = document.querySelector(".game-container");
    this.gameScreen.style.display = "none";
    this.freeJamScreen = document.querySelector(".free-jam-container");
    this.freeJamScreen.style.display = "none";
    this.drumLights = document.querySelector(".drum-lights-container");
    this.drumLights.style.display = "none";
    this.instructions = document.querySelector(".instructions-list");
    this.score = 0;
    this.mistakes = 3;
    this.notes = [];
    this.level = 1;
    this.levelCounter = document.getElementById("level");
    this.levelButton = document.getElementById("next-level");
    this.retryButton = document.getElementById("retry-level");
    this.notesLevelOne = levelOne;
    this.notesLevelTwo = levelTwo;
    this.notesLevelThree = levelThree;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.frameNumber = 0;
    this.countOne = document.getElementById("one");
    this.countTwo = document.getElementById("two");
    this.countThree = document.getElementById("three");
    this.countFour = document.getElementById("four");
    this.hiHatPress = false;
    this.snarePress = false;
    this.crashCymbalPress = false;
    this.hiTomPress = false;
    this.kickDrumPress = false;
    this.midTomPress = false;
    this.lowTomPress = false;
    this.rideCymbalPress = false;
  }

  start() {
    if (this.gameIntervalId) {
      clearInterval(this.gameIntervalId);
    }
    console.log("start");
    this.startScreen.style.display = "none";
    this.freeJamScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.drumLights.style.display = "block";
    this.levelButton.style.display = "none";
    this.retryButton.style.display = "none";
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
    if (this.gameIntervalId) {
      clearInterval(this.gameIntervalId);
    }
    window.location.reload();
    /*     this.startScreen.style.display = "block";
    this.gameScreen.style.display = "none";
    this.freeJamScreen.style.display = "none";
    this.instructions.style.display = "none";
    this.levelButton.style.display = "none";
    this.retryButton.style.display = "none";
    this.frameNumber = 0;
    this.level = 1; */
  }

  instructionsMenu() {
    this.instructions.style.display = "block";
  }

  freeJam() {
    this.startScreen.style.display = "none";
    this.freeJamScreen.style.display = "block";
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

    const notesToPlay = notesArray.filter(
      (currentNote) => currentNote.timing === frameNumber
    );
    if (notesToPlay.length > 0) {
      notesToPlay.forEach((currentNoteToPlay) => {
        this.notes.push(new Note(currentNoteToPlay.type, this.gameScreen));
      });
    }
  }

  levelScreen() {
    if (this.score === 1000 || this.frameNumber >= 650) {
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

  levelChange() {
    this.level += 1;
    this.score = 0;
    this.mistakes = 3;
    this.levelCounter.innerHTML = `Level ${this.level}`;
    this.start();
    this.levelButton.style.display = "none";
    this.retryButton.style.display = "none";
    if (this.level > 3) {
      gameComplete();
    }
  }
}
