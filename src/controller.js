const setPaddleAttributes = function(paddleDiv, paddle) {
  paddleDiv.style.width = paddle.width + UNIT;
  paddleDiv.style.height = paddle.height + UNIT;
  paddleDiv.style.left = paddle.left + UNIT;
  paddleDiv.style.top = paddle.top + UNIT;
};

const drawPaddle = function(paddle) {
  const paddleDiv = document.getElementById('paddleDiv');
  setPaddleAttributes(paddleDiv, paddle);
};

const shouldMoveRight = (event, paddle) =>
  event.key === 'ArrowRight' && isWithinRightBoundary(paddle);

const shouldMoveLeft = (event, paddle) =>
  event.key === 'ArrowLeft' && isWithinLeftBoundary(paddle);

const handleKeyEvents = function(paddle, event) {
  if (shouldMoveRight(event, paddle)) {
    paddle.moveRight();
  }
  if (shouldMoveLeft(event, paddle)) {
    paddle.moveLeft();
  }
  drawPaddle(paddle);
};

const addEventListener = function(document, paddle) {
  const world = document.getElementById('world');
  const keyEventHandler = handleKeyEvents.bind(null, paddle);
  world.onkeydown = keyEventHandler;
};

const insertPaddle = function(document, paddle) {
  const paddleDiv = document.createElement('div');
  paddleDiv.className = 'paddle';
  paddleDiv.id = 'paddleDiv';
  setPaddleAttributes(paddleDiv, paddle);
  document.getElementById('world').appendChild(paddleDiv);
  addEventListener(document, paddle);
};

const setWorldAttributes = function(worldDiv, world) {
  worldDiv.style.width = world.width + UNIT;
  worldDiv.style.height = world.height + UNIT;
};

const setFocus = function(document) {
  const world = document.getElementById('world');
  world.tabIndex = 0;
  world.focus();
};

const insertWorld = function(document, world) {
  const worldDiv = document.createElement('main');
  worldDiv.className = 'world';
  worldDiv.id = 'world';
  setWorldAttributes(worldDiv, world);
  document.getElementsByTagName('body')[0].appendChild(worldDiv);
  setFocus(document);
};

const setBallAttributes = function(ballDiv, ball) {
  const ballDiameter = ball.radius * 2;
  ballDiv.style.width = ballDiameter + UNIT;
  ballDiv.style.height = ballDiameter + UNIT;
  ballDiv.style.top = ball.top + UNIT;
  ballDiv.style.left = ball.left + UNIT;
  ballDiv.style.borderRadius = ball.radius + UNIT;
};

const insertBall = function(document, ball) {
  const ballDiv = document.createElement('div');
  ballDiv.className = 'ball';
  ballDiv.id = 'ball';
  setBallAttributes(ballDiv, ball);
  document.getElementById('world').appendChild(ballDiv);
};

const drawBall = function(document, ball) {
  const ballDiv = document.getElementById('ball');
  setBallAttributes(ballDiv, ball);
};

const moveBall = function(document, ball, paddle) {
  setInterval(function() {
    ball.move();
    drawBall(document, ball);
    ball.handleCollisions(paddle);
  }, 10);
};

const createView = function(game) {
  insertWorld(document, game.getWorld());
  insertPaddle(document, game.getPaddle());
  insertBall(document, game.getBall());
};

const initialize = function() {
  const world = new World(960, 650);
  const paddle = new Paddle(100, 20, 430, 610);
  const ball = new Ball(10, 20, 20, 5, 5);
  const game = new Game(world, paddle, ball);
  createView(game);
  moveBall(document, ball, paddle);
};

window.onload = initialize;

// Not sure about why to use this function
// const createPaddle = function(width, height, top, left) {
//   const paddle = new Paddle(width, heigh, top, left);
// }
