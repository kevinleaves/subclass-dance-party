// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  console.log(this)

  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  $('.dancer').mouseover(function() {
    console.log('Mouseover Test');
  // create mouseover
  //on mouseover
  // call bustAMove method
  var styleSettings = {
    transform: 'scale(2.0)'

  }
  // makes element larger
  this.$node.css(styleSettings)
    // moves to center of dance floor?
    // set a different CSS animation pattern as a dance this.$node.css(styleSettings) where styleSettings represents the new 'dance'
    // moves back in line?
  })


  this.step();
  // makeDancer is an object with a key step, value for that is is a function

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

// store makeDancer methods in its prototype
makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// lineUp method