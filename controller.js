const UNIT = 'px';

class Paddle {
  constructor(width, height, left, bottom) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.bottom = bottom;
  }
}

const setPaddleAttributes = function(paddleDiv, paddle) {
  paddleDiv.style.width = paddle.width + UNIT;
  paddleDiv.style.height = paddle.height + UNIT;
  paddleDiv.style.left = paddle.left + UNIT;
  paddleDiv.style.bottom = paddle.bottom + UNIT;
};

const drawPaddle = function() {};

const insertPaddle = function(document, paddle) {
  const paddleDiv = document.createElement('div');
  paddleDiv.className = 'paddle';
  paddleDiv.id = 'paddleDiv';
  setDimensionAndPosition(paddleDiv, paddle);
  document.getElementById('world').appendChild(paddleDiv);
};

const initialize = function() {
  const paddle = new Paddle(100, 20, 430, 20);
  insertPaddle(document, paddle);
  drawPaddle();
};

window.onload = initialize;
