import {saludar, despedida} from "./saludo.mjs";

console.log(saludar("Oliver"));
console.log(despedida("Oliver"));

import Estudiante from "./Estudiante.js";

let estudiante1 = new Estudiante();
estudiante1.nombre = "Oliver";
estudiante1.edad = 20;
estudiante1.carrera = "ISW";