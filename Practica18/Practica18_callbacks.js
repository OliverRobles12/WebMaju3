console.log("1.- Inicio");

setTimeout(function(){
    console.log("2.- Pasaron tres segundos");
}, 3000);

console.log("3.- Fin");

function prepararCafe(callback) {
    console.log("Preparando café");
    setTimeout(function() {
        console.log("Café listo");
        callback();
    }, 2000);
}

prepararCafe(function(){
    console.log("Ahora si, a desayunar");
})