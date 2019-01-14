class World {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  didBallCollideWithHorizontalBoundary(ballTop, ballRadius) {
    return ballTop === 0 || this.height === ballTop + ballRadius * 2;
  }

  negateDeltaTopOfBall(deltaTop) {
    return -deltaTop;
  }

  didBallCollideWithVerticalBoundary(ballLeft, ballRadius) {
    return ballLeft === 0 || this.width === ballLeft + ballRadius * 2;
  }

  negateDeltaLeftOfBall(deltaLeft) {
    return -deltaLeft;
  }
}
