const levelOne = [
  { type: "kick-drum", timing: 120 },
  { type: "snare-drum", timing: 120 },
  { type: "snare-drum", timing: 150 },
  { type: "kick-drum", timing: 180 },
  { type: "snare-drum", timing: 210 },
  { type: "kick-drum", timing: 240 },
  { type: "snare-drum", timing: 270 },
  { type: "kick-drum", timing: 285 },
  { type: "kick-drum", timing: 300 },
  { type: "snare-drum", timing: 330 },
  { type: "kick-drum", timing: 360 },
  { type: "snare-drum", timing: 390 },
  { type: "kick-drum", timing: 420 },
  { type: "snare-drum", timing: 450 },
  { type: "kick-drum", timing: 480 },
  { type: "snare-drum", timing: 510 },
  { type: "kick-drum", timing: 525 },
  { type: "kick-drum", timing: 540 },
  { type: "snare-drum", timing: 570 },
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
    this.scoreboard = document.getElementById("score");
    this.mistakes = 3;
    this.notes = [];
    this.level = 1;
    this.levelCounter = document.getElementById("level");
    this.levelButton = document.getElementById("next-level");
    this.retryButton = document.getElementById("retry-level");
    this.numberOfNotes;
    this.perfect = document.getElementById("perfect");
    this.good = document.getElementById("good");
    this.bad = document.getElementById("bad");
    this.notesLevelOne = levelOne;
    this.notesLevelTwo = levelTwo;
    this.notesLevelThree = levelThree;
    this.hitbox = document.getElementById("collide-box");
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.frameNumber = 0;
    this.countOne = document.getElementById("one");
    this.countTwo = document.getElementById("two");
    this.countThree = document.getElementById("three");
    this.countFour = document.getElementById("four");
    this.hiHatSound = false;
    this.snareDrumSound = false;
    this.crashCymbalSound = false;
    this.hiTomSound = false;
    this.kickDrumSound = false;
    this.midTomSound = false;
    this.lowTomSound = false;
    this.rideCymbalSound = false;
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
    this.perfect.style.display = "none";
    this.good.style.display = "none";
    this.bad.style.display = "none";
    this.collideBox = document.querySelector(".collide-box");
    this.scoreboard.innerText = `Score: 0`;
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
    for (let i = 0; i < this.notes.length; i++) {
      let note = this.notes[i];
      if (this.hiHatSound) {
        if (note.name === "hi-hat" && note.didCollide(this.hitbox)) {
          this.hiHatSound = false;
          note.element.remove();
          this.notes.splice(i, 1);
          i--;
          this.scoreMaker(note);
        }
      }
      if (this.crashCymbalSound) {
        if (note.name === "crash-cymbal" && note.didCollide(this.hitbox)) {
          this.crashCymbalSound = false;
          note.element.remove();
          this.notes.splice(i, 1);
          i--;
          this.scoreMaker(note);
        }
      }
      if (this.snareDrumSound) {
        if (note.name === "snare-drum" && note.didCollide(this.hitbox)) {
          this.snareDrumSound = false;
          note.element.remove();
          this.notes.splice(i, 1);
          i--;
          this.scoreMaker(note);
        }
      }
      if (this.hiTomSound) {
        if (note.name === "hi-tom" && note.didCollide(this.hitbox)) {
          this.hiTomSound = false;
          note.element.remove();
          this.notes.splice(i, 1);
          i--;
          this.scoreMaker(note);
        }
      }
      if (this.kickDrumSound) {
        if (note.name === "kick-drum" && note.didCollide(this.hitbox)) {
          this.kickDrumSound = false;
          note.element.remove();
          this.notes.splice(i, 1);
          i--;
          this.scoreMaker(note);
        }
      }
      if (this.midTomSound) {
        if (note.name === "mid-tom" && note.didCollide(this.hitbox)) {
          this.midTomSound = false;
          note.element.remove();
          this.notes.splice(i, 1);
          i--;
          this.scoreMaker(note);
        }
      }
      if (this.lowTomSound) {
        if (note.name === "low-tom" && note.didCollide(this.hitbox)) {
          this.lowTomSound = false;
          note.element.remove();
          this.notes.splice(i, 1);
          i--;
          this.scoreMaker(note);
        }
      }
      if (this.rideCymbalSound) {
        if (note.name === "ride-cymbal" && note.didCollide(this.hitbox)) {
          this.rideCymbalSound = false;
          note.element.remove();
          this.notes.splice(i, 1);
          i--;
          this.scoreMaker(note);
        }
      }
    }
  }

  scoreMaker() {
    this.score += 50;
    this.scoreboard.innerText = `Score: ${this.score}`;
  }

  noteGenerator(frameNumber) {
    let notesArray;
    switch (this.level) {
      case 1:
        notesArray = this.notesLevelOne;
        this.numberOfNotes = this.notesLevelOne.length;
        break;
      case 2:
        notesArray = this.notesLevelTwo;
        this.numberOfNotes = this.notesLevelTwo.length;
        break;
      case 3:
        notesArray = this.notesLevelThree;
        this.numberOfNotes = this.notesLevelThree.length;
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
    if (this.frameNumber >= 700) {
      this.levelButton.style.display = "block";
      this.retryButton.style.display = "block";
      clearInterval(this.gameIntervalId);
      if (this.score === this.numberOfNotes * 50) {
        this.perfect.style.display = "block";
      } else if (this.score < this.numberOfNotes * 35) {
        this.bad.style.display = "block";
      } else {
        this.good.style.display = "block";
      }
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
    this.levelCounter.innerText = `Level ${this.level}`;
    this.start();
    this.levelButton.style.display = "none";
    this.retryButton.style.display = "none";
    if (this.level > 3) {
      gameComplete();
    }
  }
}
