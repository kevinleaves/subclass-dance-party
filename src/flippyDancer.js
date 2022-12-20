// make a new flippyDancer class that inherits from dancer
var makeFlippyDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer flippy-dancer"></span>');
  this.setPosition(top, left);
}

makeFlippyDancer.prototype = Object.create(makeDancer.prototype);
makeFlippyDancer.prototype.constructor = makeFlippyDancer;

// add flippydancer unique methods below
makeFlippyDancer.prototype.flip = function() {
  console.log('Learn some CSS!');
};

