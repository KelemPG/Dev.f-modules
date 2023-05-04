// var frutas = ['Platano', 'Fresa', 'Banana', 'Manzana']

// console.log(frutas);

// console.log(frutas[2]);

// console.log(frutas.length);

// frutas[2] = 'papaya';

// console.log(frutas[2]);

// frutas.push('Mora'); //agrega un elemento al final de la lista

// console.log(frutas);

// frutas.pop(); // elimina el ultio elemento de la lista

// console.log(frutas);

// frutas.unshift('Mora');//agrega un elemento al principio de la lista

// console.log(frutas);

// frutas.shift();//elmina el primer elemento de la lista

// console.log(frutas);

//WHILE
// var index = 0;

// console.log('entra al bucle');

// while( index < 11){
//     console.log('Ahora el valor de index es:', index); //repite el ciclo hasta que se deje de cumplir la condicion especificada en el ciclo while
//     index++;
// }

// console.log('Sale del el bucle');


// //DO WHILE

// do{
//     console.log(index);
//     index++;
// }
// while(indice < 11);

//FOR

// let arreglo = ['1','2','3','4','5']
// console.log(arreglo);

//EJERCICIO FOR

// for (let i = 1; i <= 100; i++){
    
//     if( i % 3 === 0 && i % 5 === 0){
//         console.log(i, 'FizzBuzz');
//     }else if( i % 3 === 0){
//         console.log(i, 'Fizz');
//     }else if( i % 5 === 0){
//         console.log( i, 'Buzz');
//     }else{

//         console.log(i);
//     }
    
// }

//OBJETOS

const dataDB = [
    {
        usuario: 'miguel',
        password: '123'
    },
    {
        usuario: 'ana',
        password: '123'
    },
    {
        usuario: 'roberto',
        password: '123'
    },
    {
        usuario: 'kelem',
        password: '123'
    },
    {
        usuario: 'luis',
        password: '123'
    }
]


for( i=0; i< dataDB.length; i++){
    console.log(dataDB[i].usuario)

    if(dataDB[i].usuario === 'kelem'){
        console.log(dataDB[i].password);
    }

 
}






