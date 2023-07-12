let fruta = { //objeto literal
    id: 1,
    nombre: "Manzana",
    color: "rojo",
    precio: 30,
    "tamaño-en-cm": 10  //se manda llamar en el console con []
}
console.log(fruta);

let { nombre, color} = fruta
// let nombre = "Manzana"

//ó

//let nombre = fruta.nombre

console.log(nombre, color);

let { nombre: name } = fruta

console.log(name);

const user = {
    id: 7,
    displayName: {
        firstName: "Kelem",
        lastName: "Perez"
    }
}

// function userId (user){
//     //let i{d} = user
//     return `${id} ${displayName}`
// }
// console.log("El Id del usuario es", userId(user));

