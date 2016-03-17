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
