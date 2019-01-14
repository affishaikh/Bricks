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
    return (
      this.world.getWidth() > this.paddle.getLeft() + this.paddle.getWidth()
    );
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

  didBallCollideWithPaddle() {
    return this.paddle.didBallCollide(
      this.ball.getTop(),
      this.ball.getLeft(),
      this.ball.getRadius()
    );
  }

  didBallCollideWithHorizontalBoundary() {
    return this.world.didBallCollideWithHorizontalBoundary(
      this.ball.getTop(),
      this.ball.getRadius()
    );
  }

  didBallCollideWithVerticalBoundary() {
    return this.world.didBallCollideWithVerticalBoundary(
      this.ball.getLeft(),
      this.ball.getRadius()
    );
  }

  handleCollisions() {
    if (this.didBallCollideWithPaddle()) {
      this.ball.deltaTop = this.paddle.negateDeltaTopOfBall(this.ball.deltaTop);
    }
    if (this.didBallCollideWithHorizontalBoundary()) {
      this.ball.deltaTop = this.world.negateDeltaTopOfBall(this.ball.deltaTop);
    }
    if (this.didBallCollideWithVerticalBoundary()) {
      this.ball.deltaLeft = this.world.negateDeltaLeftOfBall(
        this.ball.deltaLeft
      );
    }
  }
}
