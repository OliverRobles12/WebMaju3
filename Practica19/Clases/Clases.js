class Persona {
    
    constructor(nombre = "", edad = 0){
        this.nombre = nombre;
        this.edad = edad;
        this.id = this.#generarId();
    }

    #generarId() {
        return Math.floor(Math.random() * 1000);
    }

    saludar() {
        return `Hola, soy ${nombre}`;
    }

}

class Estudiante extends Persona {

    constructor() {
        super();
        this.carrera = ""; 
    }

    estudiar() {
        return `${this.nombre} está estudiando`;
    }

}