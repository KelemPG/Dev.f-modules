class Construccion {
    constructor( numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho){

        this.numPuertas = numPuertas;
        this.numVentanas = numVentanas;
        this.numPisos = numPisos;
        this.direccion = direccion;
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;

    }
    area(){
        let area = this.altura * this.ancho;
        console.log(`EL area del terreno es ${area} metros cuadrados`);
    }
    direccion(){
        console.log(`La direccion de la construccion es ${this.direccion}`);
    }
    modifDireccion(nuevaDireccion){
        this.direccion = nuevaDireccion;
    }
}


class Casa extends Construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho, jardin, cochera){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho);
        this.jardin = jardin;
        this.cochera = cochera;
    }
}

const casa1 = new Construccion ('2', '4','2', 'df', 6,5,'7');
console.log(casa1);
casa1.modifDireccion('sonora');
console.log(casa1.direccion);
casa1.area();
casa1.direccion();


