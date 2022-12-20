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
    //select the button w/ jquery



    // initialize top value
    // for each dancer,
      // call its lineup method, pass positioning into params
      // increment top value by x pixels
  });

  $('.lineup').on('click', function(event) {
    //console.log('lineup clicked')
    // add event handler to button, looping through window.dancers
    //console.log(window.dancers, 'dancers array')
    var yCoordinate = 35;
    var xCoordinate = 20;
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      //console.log(dancer)
      dancer.lineup(yCoordinate, xCoordinate);
        // call its lineup method, pass positioning into params
      yCoordinate+=50;
    }
  })




});

