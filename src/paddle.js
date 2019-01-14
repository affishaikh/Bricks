class Paddle {
  constructor(width, height, top, left, speed = 10) {
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;
    this.speed = speed;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getTop() {
    return this.top;
  }

  getLeft() {
    return this.left;
  }

  moveRight() {
    this.left = this.left + this.speed;
  }

  moveLeft() {
    this.left = this.left - this.speed;
  }

  didBallCollide(ballTop, ballLeft, radiusOfBall) {
    // Take this return statement in its separate function
    return (
      this.top === ballTop + radiusOfBall * 2 &&
      ballLeft >= this.left &&
      ballLeft <= this.left + this.width
    );
  }

  negateDeltaTopOfBall(deltaTop) {
    return -deltaTop;
  }
}
