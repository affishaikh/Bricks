const setWorldAttributes = function(worldDiv, world) {
  worldDiv.style.width = world.width + UNIT;
  worldDiv.style.height = world.height + UNIT;
};

const insertWorld = function(document, world) {
  const worldDiv = document.createElement('main');
  worldDiv.className = 'world';
  worldDiv.id = 'world';
  setWorldAttributes(worldDiv, world);
  document.getElementsByTagName('body')[0].appendChild(worldDiv);
};

const setPaddleAttributes = function(paddleDiv, paddle) {
  paddleDiv.style.width = paddle.getWidth() + UNIT;
  paddleDiv.style.height = paddle.getHeight() + UNIT;
  paddleDiv.style.left = paddle.getLeft() + UNIT;
  paddleDiv.style.top = paddle.getTop() + UNIT;
};

const insertPaddle = function(document, paddle) {
  const paddleDiv = document.createElement('div');
  paddleDiv.className = 'paddle';
  paddleDiv.id = 'paddle';
  setPaddleAttributes(paddleDiv, paddle);
  document.getElementById('world').appendChild(paddleDiv);
};

const setBallAttributes = function(ballDiv, ball) {
  const ballDiameter = ball.radius * 2;
  ballDiv.style.width = ballDiameter + UNIT;
  ballDiv.style.height = ballDiameter + UNIT;
  ballDiv.style.top = ball.position.top + UNIT;
  ballDiv.style.left = ball.position.left + UNIT;
  ballDiv.style.borderRadius = ball.radius + UNIT;
};

const insertBall = function(document, ball) {
  const ballDiv = document.createElement('div');
  ballDiv.className = 'ball';
  ballDiv.id = 'ball';
  setBallAttributes(ballDiv, ball);
  document.getElementById('world').appendChild(ballDiv);
};

const drawPaddle = function(document, paddle) {
  const paddleDiv = document.getElementById('paddle');
  setPaddleAttributes(paddleDiv, paddle);
};

const shouldMoveRight = (game, event) =>
  event.key === 'ArrowRight' && game.canPaddleMoveRight();

const shouldMoveLeft = (game, event) =>
  event.key === 'ArrowLeft' && game.canPaddleMoveLeft();

const handleKeyEvents = function(game, event) {
   if (shouldMoveRight(game, event)) {
     game.movePaddleRight();
   }
   if (shouldMoveLeft(game, event)) {
     game.movePaddleLeft();
   }
  drawPaddle(document, game.getPaddle());
};

const addEventListener = function(document, game) {
  const world = document.getElementById('world');
  const keyEventHandler = handleKeyEvents.bind(null, game);
  world.onkeydown = keyEventHandler;
};

const setFocus = function(document) {
  const world = document.getElementById('world');
  world.tabIndex = 0;
  world.focus();
};

const drawBall = function(document, game) {
  const ballDiv = document.getElementById('ball');
  setBallAttributes(ballDiv, game.getBall());
};

const moveBall = function(document, game) {
  setInterval(function() {
    game.moveBall();
    drawBall(document, game);
    game.handleCollisions();
  }, 10);
};

const createView = function(game) {
  insertWorld(document, game.getWorld());
  insertPaddle(document, game.getPaddle());
  insertBall(document, game.getBall());
};

const initialize = function() {
  const world = new World(960, 650);
  const paddle = new Paddle(100, 20, 610, 430);
  const ball = new Ball(10, 20, 20, 5, 5);
  const game = new Game(world, paddle, ball);
  createView(game);
  setFocus(document);
  addEventListener(document, game);
  //moveBall(document, game);
};

window.onload = initialize;

// Not sure about why to use this function
// const createPaddle = function(width, height, top, left) {
//   const paddle = new Paddle(width, heigh, top, left);
// }
