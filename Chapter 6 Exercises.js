//Vector Exercise
class Vec {
    constructor (x, y) {
      this.x = x
      this.y = y
    }
    plus(vec2) {
      return {x: this.x + vec2.x, y: this.y + vec2.y}
    }
    minus(vec2) {
      return {x: this.x - vec2.x, y: this.y - vec2.y}
    }
    get length() {
      return Math.sqrt((this.x * this.x) + (this.y * this.y))
    }
  }

  