const { assert } = chai;

describe('paddle.moveLeft', function() {
  it('should decrease the left co-ordinate by 10', function() {
    const paddle = new Paddle(100, 20, 430, 10);
    paddle.moveLeft();
    assert.equal(paddle.left, 420);
  });
});

describe('paddle.moveRight', function() {
  it('should increase the left co-ordinate by 10', function() {
    const paddle = new Paddle(100, 20, 430, 10);
    paddle.moveRight();
    assert.equal(paddle.left, 440);
  });
});

describe('ball.move', function() {
  it('should increase the top and left of ball each by 10', function() {
    const top = 20;
    const left = 20;
    const ball = new Ball(10, top, left, 10, 10);
    ball.move();
    const actualOutput = new Ball(10, 30, 30, 10, 10);
    assert.deepEqual(ball, actualOutput);
  });
});

describe('ball.didCollideWithPaddle', function() {
  it('should return true when ball collides paddle', function() {
    const ball = new Ball(10, 590, 430, 10, 10);
    const paddle = new Paddle(100, 20, 430, 610 , 10);
    const actualOutput = ball.didCollideWithPaddle(paddle);
    assert.equal(actualOutput, true);
  });
});
