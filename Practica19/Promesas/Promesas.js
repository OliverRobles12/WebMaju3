
function obtenerDatos() {
// Tiene tres estados
// Pending -> Se realizando la petición
// resolve/écito -> La petición salió bien
// reject/error -> La petición salió mal
    return new Promise((resolve, reject)=> {
        console.log("[obtenerDatos] Iniciando obtención de datos ")

        setTimeout(() => {
           let exito = true;
           if (exito) {
                resolve("Datos obtenidos correctamente");
           } else {
                reject("Ocurrió un error al solicitar los datos");
           }
        }, 2000);

    });

}

// Consumo básico de promesas con .then() y .catch()
console.log("Iniciando obtención de datos");
obtenerDatos().then((resultado)=> {
    console.log("Resultado obtenido: ", resultado);
}).catch((error)=>{
    console.log("Error: ", error);
})

function buscarUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let exito = true;
            if (exito) {
                let usuario = {
                    nombre: "Oliver",
                    edad: 20,
                }
                resolve(usuario);
            } else {
                reject("No se pudo obtener el usuario");
            }
        }, 4000)
    })
}

console.log("Obtener usuario con encadenamiento");
buscarUsuario().then(usuario => {
    console.log("Usuario encontroado: ", usuario);
    // Retornan un valor aquí lo pasa al siguiente .then()
    return usuario.nombre.toUpperCase();
}).then(nombreMayuscula => {
    console.log("Procesando nombre: ", nombreMayuscula);
}).catch(error => {
    console.log("Error: ", error);
}).finally(() => {
    console.log("Fin del flujo");
})