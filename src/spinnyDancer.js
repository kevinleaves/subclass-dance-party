var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.$node = $('<span class="dancer spinny-dancer"></span>');
  this.setPosition(top, left);
  this.spin()
  this.step();
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.spin = function() {
  // .spin
  var styleSettings = {
    transform: 'rotate(45deg)'
  }

  this.$node.css(styleSettings)
  // this.$node.css('transform', 'rotate(45deg)')

}

makeSpinnyDancer.prototype.lineup = function(x, y) {
  console.log('spinny lined up');
  this.setPosition(x, y)
}



// makeBlinkyDancer.prototype.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
//   makeDancer.prototype.step.call(this)
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();
// };