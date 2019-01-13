const UNIT = 'px';
const RIGHT_BORDER = 860;
const LEFT_BORDER = 0;
const ARROW_RIGHT = 'ArrowRight';
const ARROW_LEFT = 'ArrowLeft';

class Paddle {
  constructor(width, height, left, bottom, speed = 10) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.bottom = bottom;
    this.speed = speed;
  }

  moveRight() {
    this.left = this.left + this.speed;
  }

  moveLeft() {
    this.left = this.left - this.speed;
  }
}

class Ball {
  constructor(radius, top, left, topVelocity, leftVelocity) {
    this.radius = radius;
    this.top = top;
    this.left = left;
    this.topVelocity = topVelocity;
    this.leftVelocity = leftVelocity;
  }

  move() {
    this.top = this.top + this.topVelocity;
    this.left = this.left + this.leftVelocity;
  }

  negateTopVelocity() {
    this.topVelocity = -this.topVelocity;
  }

  negateLeftVelocity() {
    this.leftVelocity = -this.leftVelocity;
  }

  didCollideWithPaddle(paddle) {
    return (
      this.top === 590 &&
      this.left >= paddle.left &&
      this.left <= paddle.left + paddle.width
    );
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

class World {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const isWithinRightBoundary = function(paddle) {
  return paddle.left < RIGHT_BORDER;
};

const isWithinLeftBoundary = function(paddle) {
  return paddle.left > LEFT_BORDER;
};
