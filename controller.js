const UNIT = 'px';
const ARROW_RIGHT = 'ArrowRight';
const ARROW_LEFT = 'ArrowLeft';
const SPEED = 50;

class Paddle {
  constructor(width, height, left, bottom) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.bottom = bottom;
  }

  moveRight() {
    this.left = this.left + SPEED;
  }

  moveLeft() {
    this.left = this.left - SPEED;
  }
}

const setPaddleAttributes = function(paddleDiv, paddle) {
  paddleDiv.style.width = paddle.width + UNIT;
  paddleDiv.style.height = paddle.height + UNIT;
  paddleDiv.style.left = paddle.left + UNIT;
  paddleDiv.style.bottom = paddle.bottom + UNIT;
};

const drawPaddle = function(paddle) {
  const paddleDiv = document.getElementById('paddleDiv');
  setPaddleAttributes(paddleDiv, paddle);
};

const handleKeyEvents = function(paddle, event) {
  if (event.key === 'ArrowRight') {
    paddle.moveRight();
  }
  if (event.key === 'ArrowLeft') {
    paddle.moveLeft();
  }
  drawPaddle(paddle);
};

const addEventListener = function(document, paddle) {
  const world = document.getElementById('world');
  const keyEventHandler = handleKeyEvents.bind(null, paddle);
  world.onkeydown = keyEventHandler;
  world.focus();
};

const insertPaddle = function(document, paddle) {
  const paddleDiv = document.createElement('div');
  paddleDiv.className = 'paddle';
  paddleDiv.id = 'paddleDiv';
  setPaddleAttributes(paddleDiv, paddle);
  document.getElementById('world').appendChild(paddleDiv);
  addEventListener(document, paddle);
};

const initialize = function() {
  const paddle = new Paddle(100, 20, 430, 20);
  insertPaddle(document, paddle);
};

window.onload = initialize;
