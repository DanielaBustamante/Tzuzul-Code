console.log("Hola") // lo que muestra por consola
// var -> variable
var mensaje = "Hola mundo" // espresiones

var dinero = 125.45 // number
var estadoCivil = true // boolean siempre tiene 2 valores (true o false)

/*
float -> tiene una presicion de 7 digitos decimales
double -> tiene una presicion de 15 digitos decimales

El parsing se utiliza para ver si podemos convertir un tipo de
dato a otro (Existe la forma explicita e implicita)
*/

// operadores aritmeticos
var impuesto = dinero * 0.16 // por 16%

console.log("Impuesto:",impuesto)

// prompt("Hola") -> ventana flotante con "alerta" para rellenar
var dineroUsuario = prompt("Ingresa un valor")

console.log(dineroUsuario)

console.log(typeof dineroUsuario) // nos da el tipo de dato

impuesto = parseFloat(dineroUsuario) * 0.16 // para convertir a flotante

console.log("Impuesto:",impuesto)

console.log(typeof impuesto)

console.log(Math.random()*100)

/*
####### Operaciones ####### 
Math.floor()
Math.round()
Math.max()
Math.sqrt()
*/

var hoy = Date.now() // timestamp: milisegundos desde el 1/1/1970

console.log(hoy)

// UNICODE en Strings 
// UTF-16 (cada uno de los caracteres que vemos tiene 16 bits)

var infinito = "∞"

console.log(infinito)

var emoji = "😉"

console.log(emoji)

var nombre = "Dani"

var saludo = "Hola"

var union = saludo + " " + nombre // concatenacion

console.log(union) 

// operadores artimeticos

var suma = 5 + 10
var resta = 5 - 10
var mult = 5 * 10
var div = 10 / 5
var residuo = 10 % 5 // me da el resto de la division
console.log(suma)
console.log(resta)
console.log(mult)
console.log(div)
console.log(residuo)