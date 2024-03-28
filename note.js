class Note {
  constructor(name, gameScreen) {
    this.gameScreen = gameScreen;
    this.name = name;
    this.top = 62;
    this.left;
    this.collide = document.querySelector(".collide-box");
    switch (name) {
      case "hi-hat":
        this.left = 27;
        break;
      case "crash":
        this.left = 127;
        break;
      case "snare":
        this.left = 227;
        break;
      case "hi-tom":
        this.left = 327;
        break;
      case "kick":
        this.left = 427;
        break;
      case "mid-tom":
        this.left = 527;
        break;
      case "low-tom":
        this.left = 627;
        break;
      case "ride":
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

  getIntersectionArea(hitbox) {
    const targetRect = this.element.getBoundingClientRect();
    const topRect = this.collide.getBoundingClientRect();

    const top = Math.max(topRect.top, targetRect.top);
    const bottom = Math.min(bottomRect.bottom, targetRect.bottom);
    const left = Math.max(topRect.left, targetRect.left);
    const right = Math.min(bottomRect.right, targetRect.right);

    const width = right - left;
    const height = bottom - top;

    const intersectionArea = width * height;

    return intersectionArea;
  }
}
