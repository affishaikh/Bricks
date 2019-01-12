const UNIT = 'px';
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

const isWithinRightBoundary = function(paddle) {
  return paddle.left < 860;
};

const isWithinLeftBoundary = function(paddle) {
  return paddle.left > 0;
};
