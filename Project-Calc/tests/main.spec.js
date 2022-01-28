var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', function() {
  // smoke teste, teste mais básico, testa o funcinamento inicial
  describe('Smoke tests', function() {

    it('should exist the calc lib', function() {
      expect(calc).to.exist;
    });

    it('should exist the method SUM', function() {
      expect(calc.sum).to.exist;
    });
    it('should exist the method DIV', function() {
      expect(calc.div).to.exist;
    });
    it('should exist the method SUB', function() {
      expect(calc.sub).to.exist;
    });
    it('should exist the method MUL', function() {
      expect(calc.mul).to.exist;
    });
    
  })
  
})