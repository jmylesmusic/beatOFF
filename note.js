class Note {
  constructor(name, gameScreen) {
    this.gameScreen = gameScreen;
    this.name = name;
    this.top = 62;
    this.left;

    switch (name) {
      case "hi-hat":
        this.left = 27;
        break;
      case "crash-cymbal":
        this.left = 127;
        break;
      case "snare-drum":
        this.left = 227;
        break;
      case "kick-drum":
        this.left = 327;
        break;
      case "hi-tom":
        this.left = 427;
        break;
      case "mid-tom":
        this.left = 527;
        break;
      case "low-tom":
        this.left = 627;
        break;
      case "ride-cymbal":
        this.left = 727;
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
    this.top += 4;
    // Update the obstacle's position on the screen
    this.updatePosition();

    if (this.top >= 405) {
      this.element.remove();
    }
  }

  didCollide(hitbox) {
    const noteBlock = this.element.getBoundingClientRect();
    const hitboxBlock = hitbox.getBoundingClientRect();
    console.log(hitboxBlock);
    if (
      noteBlock.left < hitboxBlock.right &&
      noteBlock.right > hitboxBlock.left &&
      noteBlock.top < hitboxBlock.bottom &&
      noteBlock.bottom > hitboxBlock.top
    ) {
      return true;
    } else return false;
  }
}
