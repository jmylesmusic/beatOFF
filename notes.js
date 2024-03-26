class Notes {
  constructor(gameScreen, left) {
    this.gameScreen = gameScreen;
    this.top = 120;
    this.left = left;
    this.element = document.createElement("div");
    this.element.setAttribute("id", value);
    this.element.style.display = "block";
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }

  move() {
    // Move the obstacle down by 3px
    this.top += 3;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }
}
