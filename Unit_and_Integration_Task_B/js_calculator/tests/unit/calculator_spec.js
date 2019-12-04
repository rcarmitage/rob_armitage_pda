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
    assert.equal(actual, 5)
  })

  // subtract
  it('should subtract numbers', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    const actual = calculator.runningTotal
    assert.equal(actual, 3)
  })

  // multiply
  it('should multiply numbers', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    const actual = calculator.runningTotal
    assert.equal(actual, 15)
  })

  // divide
  it('should divide numbers', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    const actual = calculator.runningTotal
    assert.equal(actual, 3)
  })

  // nunmberClick
  it('should concatenate multiple button clicks', function(){
    calculator.numberClick(5)
    calculator.numberClick(6)
    const actual = calculator.runningTotal
    assert.equal(actual, 56)
  })

  // operatorClick
  it('should chain multiple operations together', function(){
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.equal(actual, 12)
  })

  // clearClick
  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.clearClick()
    const actual = calculator.previousTotal
    assert.equal(actual, 6)
  })

});
