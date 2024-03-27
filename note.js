class Note {
  constructor(name, gameScreen) {
    this.gameScreen = gameScreen;
    this.name = name;
    this.top = 62;
    this.left;
    switch (name) {
      case "hi-hat":
        this.left = 37;
        break;
      case "crash":
        this.left = 137;
        break;
      case "snare":
        this.left = 237;
        break;
      case "hi-tom":
        this.left = 337;
        break;
      case "kick":
        this.left = 437;
        break;
      case "mid-tom":
        this.left = 537;
        break;
      case "low-tom":
        this.left = 637;
        break;
      case "ride":
        this.left = 737;
    }
    // this.element = document.getElementById("high-hat-light");
    this.element = document.createElement("img");
    this.element.src = "./images/empty-space.png";
    this.element.setAttribute("id", `${name}-event`);
    this.element.style.display = "block";
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }

  move() {
    // Move the obstacle down by 3px
    this.top += 3;
    // Update the obstacle's position on the screen
    this.updatePosition();

    if (this.top >= 402) {
      this.element.style.display = "none";
    }
  }
}
