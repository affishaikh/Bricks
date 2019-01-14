class Paddle {
  constructor(width, height, top, left, speed = 10) {
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;
    this.speed = speed;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getTop() {
    return this.top;
  }

  getLeft() {
    return this.left;
  }

  moveRight() {
    this.left = this.left + this.speed;
  }

  moveLeft() {
    this.left = this.left - this.speed;
  }

//   didBallCollide(positionOfBall, radiusOfBall) {
//     // Take this return statement in its separate function
//     return (
//       this.position.top === positionOfBall.top + radiusOfBall * 2 &&
//       positionOfBall.left <= this.left &&
//       positionOfBall.left >= this.left + this.width
//     );
//   }
}
