/**
 * Que sucede aquí?
 */

//Declaración e inicialización de variables.
let variable1 = 1;
let variable2 = 2;
let variable3 = 3;
let variable4 = 4;

//Inicialización de variables con otros valores, en algunos casos.
variable2= 2;
variable3= 4;
variable4= 1;
variable1= -7;

/**
  * En este punto, que valor tendrá 'variable2'. ¿Por qué? ¿Cómo podrías comprobarlo?
  */

  variable2 = variable1;
  console.log(variable2);//-7, se le ha vuelto a otorgar y la variable 2 contiene el valor de variable1.

/**
  * En este punto, que valor tendrá 'variable4'. ¿Por qué? ¿Cómo podrías comprobarlo?
  */

  variable4 = variable2 * 2;
  console.log(variable4)//-14