
  function Medida(valor,tipo)
  {
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km") */

  var  regexp    = XRegExp('(?<valor> [-+]?\\d+(?:\.\\d+)?(?:e[+-]?\\d+)?\\s*) -?   #val \n' +
                        '(?<tipo> ([cCfFkK])\\s* ) -?                            #tipo \n', 'x');

    if(!tipo){
      var val = XRegExp.exec(valor, regexp);
      this.value = parseFloat(val.valor);
      this.type = val.tipo;
    } else {
      this.value = valor;
      this.type = tipo;
    }

  }

  Medida.match = function(valor){
    regexpression    = XRegExp('(?<valor> [-+]?\\d+(?:\.\\d+)?(?:e[+-]?\\d+)?\\s*) -?   #val  \n' +
                        '(?<tipo1> ([cCfFkK])\\s* ) -?    #tipo1     \n' +
                        '(?<to>       (?:to)?)\\s*                                        # to           \n' +
                        '(?<tipo2> ([cCfFkK])\\s* ) -?    #tipo2     \n', 'x');
    valor = XRegExp.exec(valor, regexpression);
    return valor;

  }
Medida.measures = {};
Medida.convertir = function(valor){
  var measures = Medida.measures;

  measures.c = Celcius;
  measures.k = kelvin;
  measures.f = Farenheit;

  var match = Medida.match(valor);
  //compruebo si existe matching
  if(match){
    var val = parseFloat(match.valor),
        tipo = match.tipo1.toLowerCase();
        tipoDestino = match.tipo2.toLowerCase();

    try{
      var source = new measures[tipo](val);
      var target = "to " + measures[tipoDestino].name;
      return source[target]().toFixed(2) + " " + measures[tipoDestino].name;
    }catch(ex){
      console.log(ex);
      return "Error en la conversion [" + tipo + "] >> [" + tipoDestino + "]";
    }
  } else{
    return " ... ERROR: INTRODUZCA TEMPERATURA VALIDA ... ";
  }
}
