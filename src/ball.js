class Ball {
  constructor(radius, top, left, deltaTop, deltaLeft) {
    this.radius = radius;
    this.top = top;
    this.left = left;
    this.deltaTop = deltaTop;
    this.deltaLeft = deltaLeft;
  }

  move() {
    this.top = this.top + this.deltaTop;
    this.left = this.left + this.deltaLeft;
  }

  getTop() {
    return this.top;
  }

  getLeft() {
    return this.left;
  }

  getRadius() {
    return this.radius;
  }
}
