var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // call the parent class
  makeDancer.call(this, top, left, timeBetweenSteps)

  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function



  // return blinkyDancer;
};
// set the prototype
MakeBlinkyDancer.prototype = Object.create(makeDancer.prototype)
// set the constructor
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this)
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};



/*
var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.top = top
  this.left = left
  this.timeBetweenSteps = timeBetweenSteps
}

MakeBlinkyDancer.prototype.makeDancer = function(top, left, timeBetweenSteps)


*/
//
// add methods to prototype
