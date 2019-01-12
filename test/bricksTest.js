describe('paddle.moveLeft', function() {
  it('should decrease the left co-ordinate by 50', function() {
    const paddle = new Paddle(100, 20, 430, 20);
    paddle.moveLeft();
    chai.assert.equal(paddle.left, 380);
  });
});

describe('paddle.moveRight', function() {
    it('should increase the left co-ordinate by 50', function() {
      const paddle = new Paddle(100, 20, 430, 20);
      paddle.moveRight();
      chai.assert.equal(paddle.left, 480);
    });
  });