class Game {
  constructor() {
    this.startScreen = document.querySelector(".game-title-screen");
    this.gameScreen = document.querySelector(".game-container");
    this.score = 0;
    this.startScreen.style.display = "block";
    this.gameScreen.style.display = "none";
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
  }

  start() {
    console.log("start");
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {}
}
