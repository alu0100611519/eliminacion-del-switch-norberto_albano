var expect = chai.expect;

describe("Clase Temperatura", function(){
  describe("constructor", function(){
    it("Deberia existir un constructor", function(){
      var temp = new Temperatura(13, "K");
      expect(temp.value).to.equal(13);
      expect(temp.type).to.equal('K');
    });
    it("Ejecucion con un solo parametro", function(){
      var temp = new Temperatura("13K");
      expect(temp.value).to.equal(13);
      expect(temp.type).to.equal('K');
    });
  });
});

describe("Clase Celsius", function(){
  describe("constructor", function(){
    it("Deberia existir un constructor", function(){
      var celc = new Celsius(15);
      expect(celc.value).to.equal(15);
    });
    describe("Comprobamos las funciones", function(){
      it("Conversion a fahrenheit", function(){
        var celc = new Celsius(552);
        expect(celc.toFahrenheit()).to.equal(1025.6);
      });
      it("Conversion a Kelvin", function(){
        var celc = new Celsius(0);
        expect(celc.toKelvin()).to.equal(273.15);
      });
    });
  });
});

describe("Clase fahrenheit", function(){
  describe("constructor", function(){
    it("Deberia existir un constructor", function(){
      var far = new Fahrenheit(125);
      expect(far.value).to.equal(125);
    });
    describe("Comprobamos las funciones", function(){
      it("Conversion a Celsius", function(){
        var far = new Fahrenheit(10e-1);
        expect(far.toCelsius()).to.equal(-17.22222222222222);
      });
      it("Conversion a Kelvin", function(){
        var far = new Fahrenheit(0);
        expect(far.toKelvin()).to.equal(255.3722222222222);
      });
    });
  });
});

describe("Clase Kelvin", function(){
  describe("constructor", function(){
    it("Deberia existir un constructor", function(){
      var kel = new Kelvin (125.12);
      expect(kel.value).to.equal(125.12);
    });
    describe("Comprobamos las funciones", function(){
      it("Conversion a Celsius", function(){
        var kel = new Kelvin(552);
        expect(kel.toCelsius()).to.equal(314.85);
      });
      it("Conversion a Fahrenheit", function(){
        var kel = new Kelvin(0);
        expect(kel.toFahrenheit()).to.equal(-459.67);
      });
    });
  });
});
