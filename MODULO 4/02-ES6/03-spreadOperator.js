const misColores =[ "Amarillo", "Rojo",'Azul'];
const misColores2 =[ "Negro", "Blanco", ...misColores];

console.log(misColores2);

const misColores3 =['Amarillo', 'Rojo', 'Azul', 'Verde']
const misColores4 =['Negro', 'Blanco', 'Gris',]


const misColores5 =[...misColores4,...misColores3]
console.log(misColores5);