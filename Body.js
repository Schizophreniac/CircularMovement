export class Body {
  /**
   * Create a moving body.
   * @param {HTMLElement} element Corresponding HTML element.
   * @param {Object} options Movement options.
   * @param {HTMLElement} options.elementToFollow Followed HTML element.
   * @param {Object} options.movementCenter
   * @param {number} options.movementCenter.x
   * @param {number} options.movementCenter.y
   * @param {number} options.angularVelocity KRad / s.
   * @param {number} options.movementRadius
   */
  constructor(element, options) {
    this.el = element;
    this.elementToFollow = options.elementToFollow;
    if (typeof this.elementToFollow === 'undefined') {
      this.movementCenter = options.movementCenter || {x: 200, y: 200};
    }
    this.angularVelocity = options.angularVelocity || Math.PI / 700;
    this.movementRadius = options.movementRadius || 150;
    this.angle = 0;
  }

  /**
   * @param {number} x
   */
  set x(x) {
    this.el.style.left = x + 'px';
  }
  /** 
   * @returns {number} Body's x coordinate.
   */
  get x() {
    return parseFloat(this.el.style.left);
  }
  /**
   * @param {number} y
   */
  set y(y) {
    this.el.style.top = y + 'px';
  }
  /**
   * @returns {number} Body's y coordinate.
   */
  get y() {
    return parseFloat(this.el.style.top);
  }
  /**
   * @param {number} x Movement center's x coordinate.
   */

  set centerX(x) {
    this.movementCenter.x = x;
  }
  /**
   * @returns {number} Movement center's x coordinate.
   */
  get centerX() {
    if (typeof this.elementToFollow !== 'undefined') {
      return parseFloat(this.elementToFollow.style.left);
    } 
    return this.movementCenter.x;
  }
  /**
   * @param {number} y Movement center's y coordinate.
   */
  set centerY(y) {
    this.movementCenter.y = y;
  }
  /**
   * @returns {number} Movement center's y coordinate.
   */
  get centerY() {
    if (typeof this.elementToFollow !== 'undefined') {
      return parseFloat(this.elementToFollow.style.top);
    }
    return this.movementCenter.y;
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  moveTo(x, y) {
    this.x = this.centerX + x;
    this.y = this.centerY + y;
  }
  // nextFrame() {
  //   this.angle += this.angularVelocity;
  //   let x = Math.cos(this.angle) * this.movementRadius;
  //   let y = Math.sin(this.angle) * this.movementRadius;
  //   this.x = this.centerX + x;
  //   this.y = this.centerY + y;
  // }

  /**
   * Start a circular moving around the center.
   * Restart moving from last point.
   */
  startMoving() {
    this.movementInterval = setInterval(() => {
      // this.angle += this.angularVelocity;
      // let x = Math.cos(this.angle) * this.movementRadius;
      // let y = Math.sin(this.angle) * this.movementRadius;
      this.moveTo(x, y);
    }, 10);
  }
  /**
   * Stop moving in last point.
   */
  stopMoving() {
    clearInterval(this.movementInterval);
  }
}
