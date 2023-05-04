// function saludar(nombre){
//     console.log("Hola", nombre, "bienvenido a la clase");

// }

// function Sumar(x, y, z){
//     console.log(numero1, numero2);
//     return
// }

// var resultadoSuma = Sumar (1,1,1);


// saludar("Kelem");

// Sumar ( 11, 12, 13);


// var semaforo = 'rojo';

// if( semaforo == 'verde'){
//     console.log('avanza');
// } else if (semaforo == 'amarillo'){
//     console.log('Comienza a frenar')
    
// }else if (semaforo == 'rojo'){
//     console.log('Detente')
// }


alert('Bienvenido, por favor registra tus datos para validar tu vacunacion');

var edad = Number (prompt('Que edad tienes?'));
var embarazo = prompt('Estas embarazada?');
var gestacion = Number (prompt ('Cuantas semanas tienes de embarazo?'));
var localidad = Boolean (prompt ('Te localizas en el norte del pais?'));




if( edad >= 30){
    console.log('Puede vacunarse')

} else if (edad < 30){
    console.log('No puede vacunarse')
    
}else if (gestacion >= 9){
    console.log('Puede Vacunarse')

}else if( gestacion < 9){
    console.log('No puede Vacunarse')

}else if(localidad == true ){
    console.log( "Puede Vacunarse")

}else if ( localidad == false){
    console.log('Por favor, localice el modulo de vacunacion correspondiente en la pagina principal')
}



   