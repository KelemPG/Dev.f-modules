// var a = 1;
// var b = 4;
// var c = 8;
// var d = 13;
// var e = 20;


// var resultado = a + b;
// var resultado2 = a + c;
// var resultado3 = a + d;

// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);


// function suma(a,b){
//     var total = a + b;
//     return total;
// }
// function resta(a,b){
//     var totalResta = a - b;
//     return totalResta;
// }
// function multiplicacion(a,b){
//     var totalMult = a * b;
//     return totalMult;
// }
// function division(a,b){
//     var totaldiv = a / b;
//     return totaldiv;
// }
// function cambio(a,b){
//     var total = a - b;
//     return "Tenía 15$,compré un chicle y me regresaron " + total;
// }

// console.log(suma(5,5));
// console.log(resta(5,5));
// console.log(multiplicacion(5,5));
// console.log(division(5,5));
// console.log(cambio(15,2.5));

function datosCliente(nombre, localidad){
    var nombre = prompt("¿Cual es tu nombre?");
    var localidad = prompt("¿Cual es tu localidad?");
    
    return nombre + localidad;
}

console.log(datosCliente);

function calcularPrecio(a,b,c,d,e){
    return a+b+c+d+e;

}

console.log(calcularPrecio(2,3,5,6,7));
