class Ball {
  constructor(radius, top, left, deltaTop, deltaLeft) {
    this.radius = radius;
    this.top = top;
    this.left = left;
    this.deltaTop = deltaTop;
    this.deltaLeft = deltaLeft;
  }

  move() {
    this.top = this.top + this.deltaTop;
    this.left = this.left + this.deltaLeft;
  }

  getTop() {
    return this.top;
  }

  getLeft() {
    return this.left;
  }

  getRadius() {
    return this.radius;
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
