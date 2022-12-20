describe('flippyDancer', function () {
  var flippyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    flippyDancer = new makeFlippyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(flippyDancer.$node).to.be.an.instanceOf(jQuery);
  })

  //flippydancer should inherit from makeDancer
  it('should inherit from makeDancer', function () {
    expect();
  })

  // jquery node should have both super and descendent classes
  it('jQuery node should have both super and descendant classes', function () {
    expect();
  });

  //should have flip method
  it('should have a flip method', function () {
    expect();
  });

  //css related tests
})

