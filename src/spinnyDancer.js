var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.$node = $('<span class="dancer spinny-dancer"></span>');
  this.setPosition(top, left);
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.spin = function() {
  console.log('Spin move');
}