var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // add
  it('should add numbers', function(){
    calculator.previousTotal = 4
    calculator.add(1)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 5)
  })

  // subtract
  it('should subtract numbers', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 3)
  })

  // multiply
  it('should multiply numbers', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 15)
  })

  // divide
  it('should divide numbers', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 3)
  })

});
