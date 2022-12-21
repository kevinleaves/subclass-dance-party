// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag

  this.$node = $('<img class="dancer" src="assets/spiderman.webp"></img>');

  this.$node.hover(function(event) {
    // convert event target to jquery element
  var target = $(event.target)

  var styleSettings = {
    transform: 'scale(2.0)',
    'box-shadow': '0px 0px 5px #fff',
    border: 'none'
  }

  target.css(styleSettings)
    // set a different CSS animation pattern as a dance this.$node.css(styleSettings) where styleSettings represents the new 'dance'
    // moves back in line?
  }, function(event) {
    var target = $(event.target)

    var styleSettings = {
      transform: 'scale(1.0)',
      'box-shadow': 'none'
    }
    target.css(styleSettings)
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

makeDancer.prototype.slowDance = function (top, left) {
  var styleSettings = {
    'position': 'absolute',
    left: '0',
    right: '0',
    'margin-right': 'auto',
    'margin-left': 'auto',
    'width': '100px',

    // 'justify-content': 'center',
    // 'align-items': 'center';
  };
  this.$node.css(styleSettings);
}