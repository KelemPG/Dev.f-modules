class Persona {   //clase persona - Mi plantilla
    constructor ( nombre, apellidoPaterno, apellidoMaterno, edad, genero){
//metodo constructor para inicializar objetos
    this.nombre = nombre;    //Atributos
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
    this.edad = edad;
    this.genero = genero;
    }

    //Metodos
    dormir(){
        console.log(` ${this.nombre} está durmiendo`)
    }

    comer(){
        console.log(`${this.nombre} esta comiendo`)
    }
}

const persona1 = new Persona ('Kelem','Perez', 'guzman', 28,'hombre');
persona1.dormir();

const persona2 = new Persona ('Lucy','Pereyra', 'Lagunez', 31,'mujer');
persona2.comer();

class Alumno extends Persona{ //palabra reservada extense
    constructor(nombre, apellidoPaterno, apellidoMaterno,edad,genero, promedio, nivelEscolar){

    super(nombre, apellidoPaterno, apellidoMaterno, edad, genero); //heredando atributos
        this.promedio = promedio;            //y agragaando nuevos
        this.nivelEscolar = nivelEscolar
    }
    

    estudiar(){ 
        console.log(`${this.nombre} esta estudiando`);
    }
    hacerTarea(){ 
        console.log(`${this.nombre} esta haciendo tarea`);
    }
}


class Profesor extends Persona{
    constructor( nombre, apellidoPaterno, apellidoMaterno, edad, genero, materia, horasImpartidas){

        super(nombre, apellidoPaterno, apellidoMaterno, edad, genero);
        this.materia = materia;
        this.horasImpartidas =  horasImpartidas;
    }

    enseñar(){
        console.log(`El profesor ${this.nombre} enseña ${this.materia}`)
    }


}

const profesor1 = new Profesor ('Alberto', 'Gonzalez', 'Gutierritos', 48, 'Masculino', 'Quimica', 800);

profesor1.enseñar();


