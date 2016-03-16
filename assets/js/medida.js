
  function Medida(valor,tipo)
  {
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km") */

    regexp    = XRegExp('(?<valor> [-+]?\\d+(?:\.\\d+)?(?:e[+-]?\\d+)?\\s*) -?   #val  \n' +
                        '(?<tipo> ([cCfFkK])\\s* ) -?    #tipo2     \n', 'x');

    if(!tipo){
      var val = XRegExp.exec(valor, regexp);
      this.value = val.valor;
      this.type = val.tipo;
    } else {
      this.value = valor;
      this.type = tipo;
    }

  }

  Media.match = function(valor){
    regexpression    = XRegExp('(?<valor> [-+]?\\d+(?:\.\\d+)?(?:e[+-]?\\d+)?\\s*) -?   #val  \n' +
                        '(?<tipo1> ([cCfFkK])\\s* ) -?    #tipo1     \n' +
                        '(?<to>       (?:to)?)\\s*                                        # to           \n' +
                        '(?<tipo2> ([cCfFkK])\\s* ) -?    #tipo2     \n', 'x');
    valor = XRegExp.exec(valor, regexpression);
    return valor;

  }
