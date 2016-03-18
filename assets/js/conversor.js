  function Temperatura(valor,tipo)
  {
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
    Medida.call(this, valor, tipo);
  }

  function Celsius(valor)
  {
    Temperatura.call(this, valor);
    this.toFahrenheit = function(){
      return ((this.value * 9/5) + 32);
    }
    this.toKelvin = function(){
      return (this.value + 273.15);
    }
  }


  function Fahrenheit(valor)
  {
    Temperatura.call(this, valor);
    this.toCelsius = function(){
      return ((this.value - 32) * 5/9);
    }
    this.toKelvin = function(){
      return ((this.value + 459.67) * 5/9);
    }
  }

  function Kelvin(valor)
  {
    Temperatura.call(this, valor);
    this.toCelsius = function(){
      return (this.value - 237.15);
    }
    this.toFahrenheit = function(){
      return ((this.value * 9/5) - 459.67);
    }
  }

  //definimos la herencia de las clases
  Temperatura.prototype = new Medida();
  Temperatura.prototype.contructor = Temperatura;

  Celsius.prototype = new Temperatura();
  Celsius.prototype.contructor = Celsius;

  Fahrenheit.prototype = new Temperatura();
  Fahrenheit.prototype.constructor = Fahrenheit;

  Kelvin.prototype = new Temperatura();
  Kelvin.prototype.constructor = Kelvin;
