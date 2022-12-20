describe('spinnyDancer', function () {
  var spinnyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinnyDancer = new makeSpinnyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(spinnyDancer.$node).to.be.an.instanceOf(jQuery);
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
  it('should have a spin method', function () {
    expect();
  });

  //css related tests
})

