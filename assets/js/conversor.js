  function Temperatura(valor,tipo)
  {
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
    Medida.call(this, valor, tipo);
  }

  function Celsius(valor)
  {
    Temperatura.call(this, valor);
    this.toFarenheit = function(){
      return ((this.value * 9/5) + 32);
    }
    this.toKelvin = function(){
      return (this.value + 273.15);
    }
  }


  function Farenheit(valor)
  {
    this.toCelcius = function(){
      return ((this.value - 32) * 5/9);
    }
    this.toKelvin = function(){
      return ((this.value + 459.67) * 5/9);
    }
  }

  function Kelvin(valor)
  {
    this.toCelcius = function(){
      return (this.value - 237.15);
    }
    this.toFarenheit = function(){
      return ((this.value * 9/5) - 459.67);
    }
  }

  //definimos la herencia de las clases
  Temperatura.prototype = new Medida();
  Temperatura.prototype.contructor = Temperatura;

  Celsius.prototype = new Temperatura();
  Celsius.prototype.contructor = Celsius;

  Farenheit.prototype = new Temperatura();
  Farenheit.prototype.constructor = Farenheit;
  
  Kelvin.prototype = new Temperatura();
  Kelvin.prototype.constructor = Kelvin;

  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Farenheit = Farenheit;
