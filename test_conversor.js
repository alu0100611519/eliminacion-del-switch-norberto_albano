var expect = chai.expect;

describe("Clase Temperatura", function(){
  describe("constructor", function(){
    it("Deberia existir un constructor", function(){
      var temp = new Temperatura(13, "K");
      expect(temp.valor).to.equal(13);
      expect(temp.tipo).to.equal('K');
    });
  })
})
