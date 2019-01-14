class Ball {
  constructor(radius, top, left, deltaTop, deltaLeft) {
    this.radius = radius;
    this.position = { top, left };
    this.deltaTop = deltaTop;
    this.deltaLeft = deltaLeft;
  }

  move() {
    this.position.top = this.position.top + this.deltaTop;
    this.position.left = this.position.left + this.deltaLeft;
  }

  negateTopVelocity() {
    this.deltaTop = -this.deltaTop;
  }

  negateLeftVelocity() {
    this.deltaLeft = -this.deltaLeft;
  }

  didCollideWithWalls() {
    return this.top === 0 || this.top === 630;
  }

  didCollideWithSideWalls() {
    return this.left === 0 || this.left === 940;
  }

  handleCollisions(paddle) {
    if (this.didCollideWithPaddle(paddle)) {
      this.negateTopVelocity();
    }
    if (this.didCollideWithWalls()) {
      this.negateTopVelocity();
    }
    if (this.didCollideWithSideWalls()) {
      this.negateLeftVelocity();
    }
  }
}
