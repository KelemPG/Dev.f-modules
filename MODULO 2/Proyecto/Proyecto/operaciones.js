const cliente =[
    {nombre: 'persona1',
    password: "123",
    saldo:400},

    {nombre: 'persona2',
    password: "456",
    saldo: 100},

    {nombre: 'persona3',
    password: "789",
    saldo: 50}
]
const limiteSup = 990;
const limiteInf = 10;
let saldo = document.getElementById("saldo");
let mensajeS = document.getElementById("mensajeS");
let totalSuma = document.getElementById('totalSuma');

saldo.style.color = "black";
saldo.innerText = localStorage.getItem('saldo');



function suma(event){ 

        let saldo = Number (localStorage.getItem('saldo'));
        let ingreso = Number (document.getElementById('ingresoSuma').value);
        let totalSuma1 = saldo + ingreso;
        console.log(saldo);
        console.log(ingreso);
        console.log(totalSuma1);

    if( totalSuma1 > limiteSup){
        mensajeS.style.color = "red";
        mensajeS.innerText = "El monto ingresado excede el limite permitido, intente de nuevo";

        console.log('El monto ingresado excede el limite permitido, intente de nuevo');
    }else{
        // console.log(totalSuma1);
        localStorage.removeItem("saldo");
        saldo = totalSuma1;
        localStorage.setItem('saldo',saldo);
        cliente.saldo = saldo;

        totalSuma.style.color = "black";
        totalSuma.innerText = localStorage.getItem('saldo');
        }
    return totalSuma1;
}














































