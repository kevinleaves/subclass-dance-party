var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)

  this.$node.addClass('spinny-dancer')
  this.$node.attr('src', 'assets/sonic.webp')
  this.setPosition(top, left);
  this.spin()
  this.step();
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.spin = function() {

  var styleSettings = {
  }

  this.$node.css(styleSettings)
}

makeSpinnyDancer.prototype.lineup = function(x, y) {
  this.setPosition(x, y)
}
