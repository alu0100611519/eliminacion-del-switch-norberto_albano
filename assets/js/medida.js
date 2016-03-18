
  function Medida(valor,tipo)
  {
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km") */

  var  regexp = XRegExp('(?<val> [-+]?\\d+\\s*) -?       #val \n' +
                        '(?<tipo> ([cCfFkK])\\s* ) -?    #tipo \n', 'x');
  var val = XRegExp.exec(valor, regexp);
console.log(val);
    if(val){
      this.value = parseFloat(val.val);
      console.log(val.val);
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

  measures.c = Celsius;
  measures.k = Kelvin;
  measures.f = Fahrenheit;

  var match = Medida.match(valor);
  console.log(match);
  //compruebo si existe matching
  if(match){
    var val = parseFloat(match.valor),
        tipo = match.tipo1.toLowerCase();
        tipoDestino = match.tipo2.toLowerCase();

    try{
      console.log(measures[tipo](val));
      var source = new measures[tipo](val);
      var target = "to" + measures[tipoDestino].name;
      return source[target]().toFixed(2) + " "+measures[tipoDestino].name;
    }catch(ex){
      console.log(ex);
      return "Error en la conversion [" + tipo + "] >> [" + tipoDestino + "]";
    }
  } else{
    return " ... ERROR: INTRODUZCA TEMPERATURA VALIDA ... ";
  }
}
