console.log("Hello World!");

let x2 = "Oliver";
console.log("Valor inicial de x2: ", x2, "Tipo: ", typeof x2);

x2 = 7;
console.log("Nuevo valor de x2: ", x2, "Tipo: ", typeof x2);

const constante = 10;
console.log("Valor de la constante: ", constante, "Tipo: ", typeof constante);

console.log("Operadores lógicos");

/** 
 * Javascript: cualquier valor puede ser verdadero (Truthy)
 * Hay valores que son Falsy:
 * 
 * -false
 * -0
 * -"" " "
 * -null
 * -undefined
 * -NaN (Not a Number)
 * 
 */


let variableBool = false;
if (variableBool) {
    console.log("1. Entra a el bloque si/true")
} else {
    console.log("1. Entra a el bloque false")
}

let mensaje = "Hola";
if (mensaje) {
    console.log("2. Entra a el bloque si/true")
} else {
    console.log("2. Entra a el bloque false")
}

let numero6 = 6;
let string6 = "6";

console.log("Comparación débil (6 == '6'): ", numero6 == string6);
console.log("Comparación fuerte (6 === '6'): ", numero6 === string6);

