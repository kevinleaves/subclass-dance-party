$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make

    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineup').on('click', function(event) {
    // add event handler to button, looping through window.dancers
    var yCoordinate = 35;
    var xCoordinate = 20;
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      // call its lineup method, pass positioning into params
      dancer.lineup(yCoordinate, xCoordinate);
      yCoordinate+=75;
    }
  })

  // windows.dancers stores each dancer we create with our add dancer buttons
  // loop through windows.dancers
  //
  // pick random dancer from window.dancers
  // move both to center of dance floor for 5 seconds
  // then move each dancer to random location

  var slowDanceButton = $('<button type=button>slow-dance</button>');
  $('.topbar').append(slowDanceButton);
  slowDanceButton.on('click', function () {
    // if less than 2 dancers in array, button does nothing
    if (window.dancers.length > 1) {
      // generate random idx 1;
      var randomIdx1 = Math.floor(Math.random() * window.dancers.length);
      // generate random idx 2;
      var randomIdx2 = Math.floor(Math.random() * window.dancers.length);

      // ensure we don't pick same dancer twice
      while (randomIdx2 === randomIdx1) {
        randomIdx2 = Math.floor(Math.random() * window.dancers.length);
      }

      // access random dancers using random idxs
      var randomDancer1 = window.dancers[randomIdx1];
      var randomDancer2 = window.dancers[randomIdx2];

      // call slowdance on each of them
      randomDancer1.slowDance();
      randomDancer2.slowDance();
    }
  })
});


