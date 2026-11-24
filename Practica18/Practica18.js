console.log("Sección de funciones");

// Función declarada
function saludar(nombre = "Invitado", edad = "0"){
    return "Hola: " + nombre + " Edad: " + edad;
}

console.log(saludar("Oliver", 20));
console.log(saludar());

// Función anonima
let suma = function(num1, num2){
    return num1 + num2;
}

console.log("Resultado suma: ", suma(1, 63));

// funcoón flecha
let resta = (num1, num2) => {
    return num1 - num2;
}

console.log("Resultado resta: ", resta(10, 5));

// Función autoinvocada (Asincrónica)
(async function() {
    console.log("Hola desde función autoinvocada");
})();

console.log("Arreglos Dinámicos");

let numeros = [1, 2, 3];
console.log("Arreglo inicial: ", numeros);

numeros.push(4);
console.log("Arreglo después del push: ", numeros);

let ultimo = numeros.pop();
console.log("Arreglo después del pop: ", numeros);

let primero = numeros.shift();
console.log("Arreglo después del shift: ", numeros);

const persona = {
    nombre: "Oliver",
    edad: 20,
    carrera: "ISW",
    hobbies: ["videojuegos", "musica", "dormir"]
};

console.log("Nombre: ", persona.nombre);

persona.nombre = "Alejandro";
console.log("Nuevo nombre: ", persona.nombre);