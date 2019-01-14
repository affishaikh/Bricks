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

  moveBall() {
    this.ball.move();
  }

  canPaddleMoveRight() {
    return this.world.getWidth() > this.paddle.getLeft() + this.paddle.getWidth();
  }

  canPaddleMoveLeft() {
    return this.paddle.getLeft() > 0;
  }

  movePaddleRight() {
    this.paddle.moveRight();
  }

  movePaddleLeft() {
    this.paddle.moveLeft();
  }

  // handleCollisions() { // This is ugly. Refactor it.
  //   console.log(this.paddle.didBallCollide(this.ball.position, this.ball.radius));
  // }
}
