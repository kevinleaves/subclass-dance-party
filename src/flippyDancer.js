// make a new flippyDancer class that inherits from dancer
var makeFlippyDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer flippy-dancer"></span>');
  this.setPosition(top, left);
  this.flip();
}

makeFlippyDancer.prototype = Object.create(makeDancer.prototype);
makeFlippyDancer.prototype.constructor = makeFlippyDancer;

// add flippydancer unique methods below
makeFlippyDancer.prototype.flip = function() {
  console.log('Learn some CSS!');
  var styleSettings = {
    transform: 'scale(3.0)'
  }
  this.$node.css(styleSettings)
};

// lineUp method
// check global window array
// loop through array
// for each dancer
  // set their left value to 0
    // iterate their top value by 20 (this will form a column of dancers)

