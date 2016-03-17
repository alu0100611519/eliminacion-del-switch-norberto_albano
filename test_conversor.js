var expect = chai.expect;

describe("Clase Temperatura", function(){
  describe("constructor", function(){
    it("Deberia existir un constructor", function(){
      var temp = new Temperatura(13, "K");
      expect(temp.valor).to.equal(13);
      expect(temp.tipo).to.equal('K');
    });
    it("Ejecucion con un solo parametro", function(){
      var temp = new Temperatura("13K");
      expect(temp.valor).to.equal(13);
      expect(temp.tipo).to.equal('K');
    });
  });
});

describe("Clase Celcius", function(){
  describe("constructor", function(){
    it("Deberia existir un constructor", function(){
      var celc = new Celsius (15e-25);
      expect(celc.valor).to.equal(15e-25);
    });
    describe("Comprobamos las funciones", function(){
      it("Conversion a farenheit", function(){
        var celc = new Celcius(552);
        expect(celc.toFarenheit()).to.equal(1025,6);
      });
      it("Conversion a Kelvin", function(){
        var celc = new Celcius(0);
        expect(celc.toKelvin()).to.equal(273,15);
      });
    });
  });
});

describe("Clase farenheit", function(){
  describe("constructor", function(){
    it("Deberia existir un constructor", function(){
      var far = new Farenheit (125);
      expect(far.valor).to.equal(125);
    });
    describe("Comprobamos las funciones", function(){
      it("Conversion a Celcuis", function(){
        var far = new Farenheit(552);
        expect(far.toCelcius()).to.equal(288,889);
      });
      it("Conversion a Kelvin", function(){
        var far = new Farenheit(0);
        expect(far.toKelvin()).to.equal(255,372);
      });
    });
  });
});

describe("Clase Kelvin", function(){
  describe("constructor", function(){
    it("Deberia existir un constructor", function(){
      var kel = new Kelvin (125,12);
      expect(kel.valor).to.equal(125,12);
    });
    describe("Comprobamos las funciones", function(){
      it("Conversion a Celcuis", function(){
        var kel = new Kelvin(552);
        expect(kel.toCelcius()).to.equal(533,93);
      });
      it("Conversion a Kelvin", function(){
        var kel = new Kelvin(0);
        expect(kel.toFarenheit()).to.equal(-459,67);
      });
    });
  });
});
