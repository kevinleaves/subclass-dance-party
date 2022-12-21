// make a new flippyDancer class that inherits from dancer
var makeFlippyDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('flippy-dancer')
  this.setPosition(top, left);
  this.flip();
}

makeFlippyDancer.prototype = Object.create(makeDancer.prototype);
makeFlippyDancer.prototype.constructor = makeFlippyDancer;

// add flippydancer unique methods below
makeFlippyDancer.prototype.flip = function() {

  var styleSettings = {
  }
  this.$node.css(styleSettings)
};

makeFlippyDancer.prototype.lineup = function (x, y) {
  this.setPosition(x, y)
}
