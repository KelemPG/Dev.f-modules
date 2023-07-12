class Animal{ //Nombre de m i clase
    constructor( nombre,especie){ //Metodo para inicializar mi clase
        //Atributos
        this.nombre = nombre;
        this.especie = especie;
    }

    get nombre (){
        return this.nombre;
    }
    set nombre(nuevoNombre){
        if(nuevoNombre && typeof nuevoNombre == 'string'){
            return this.nombre = nuevoNombre;
        }else{
            console.log('Error: el nombre debe ser de tipo cadena');
        }
    }


    get especie (){ //get lee
        return this.especie;
    }
    set especie(nuevaEspecie){//set modifica
        if(nuevaEspecie && typeof nuevaEspecie == 'string'){
            return this.especie = nuevaEspecie;
        }else{
            console.log('Error: el nombre debe ser de tipo cadena');
        }
    }


    //Metodo que imprime informacion
    imprimirInformacion(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Especie: ${this.especie}`);
    }
//MEtodo para cambiar la informacion
    nuevaInf(nuevoNombre, nuevaEspecie){
        this.nombre = nuevoNombre;
        this.especie = nuevaEspecie;
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Especie: ${this.especie}`);
    }
}

const miAnimal = new Animal ( 'Max', 'Gato');

miAnimal.imprimirInformacion();
