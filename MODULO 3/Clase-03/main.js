function busquedaLineal(lista, elemento){
    for(let i=0; i< lista.length; i++){
        if(lista[i] == elemento){
            return i;
        }
    }
    return -1;
}

const lista = [2,4,6,8,13,24,76,1,8,9];
const elementoBuscado = 76;

console.log(busquedaLineal(lista,elementoBuscado));



//Funcion para busqueda binaria

function busquedaBinaria(lista,elemento){
    let inicio = 0;
    let fin = lista.length -1;

    while(inicio <= fin){//Inicio no  puede ser mas grande que e  final
        let medio = Math.floor((inicio + fin)/2); 
    
        if(lista[medio]== elemento){
            return medio;
        }else if(lista[medio] < elemento){
        inicio = medio +1;
        }else{
            fin = medio -1;
        }
    }
    return -1;
}
const listaOrdenada = [2,3,5,7,8,9,10,12,15,18];
const elementoBuscado2 = 15;

console.log(busquedaBinaria(listaOrdenada,elementoBuscado2));