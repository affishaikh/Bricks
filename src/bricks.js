class Paddle {
  constructor(width, height, left, top, speed = 10) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.top = top;
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

  negateTopVelocity() {
    this.deltaTop = -this.deltaTop;
  }

  negateLeftVelocity() {
    this.deltaLeft = -this.deltaLeft;
  }

  didCollideWithPaddle(paddle) {
    return (
      this.top === paddle.top - paddle.height &&
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

class Game {
  constructor(world, paddle, ball) {
    this.world = world;
    this.paddle = paddle;
    this.ball = ball;
  }
  getWorld() {
    return this.world;
  }
  getPaddle() {
    return this.paddle;
  }
  getBall() {
    return this.ball;
  }
}

const isWithinRightBoundary = function(paddle) {
  return paddle.left < RIGHT_BORDER;
};

const isWithinLeftBoundary = function(paddle) {
  return paddle.left > LEFT_BORDER;
};
