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
let mensajeR = document.getElementById("mensajeR");
let resultadoResta = document.getElementById('totalResta');

saldo.style.color = "black";
saldo.innerText = localStorage.getItem('saldo');



function resta(event){ 

        let saldo = Number (localStorage.getItem('saldo'));
        let retiro = Number (document.getElementById('ingresoResta').value);
        let totalResta = saldo - retiro;
        console.log(saldo);
        console.log(retiro);
        console.log(totalResta);

    if( totalResta < limiteInf){
        mensajeR.style.color = "red";
        mensajeR.innerText = "El monto ingresado retira el fondo mínimo, intente de nuevo";

        console.log('El monto ingresado excede el limite permitido, intente de nuevo');
    }else{
        // console.log(totalSuma1);
        localStorage.removeItem("saldo");
        saldo = totalResta;
        localStorage.setItem('saldo',saldo);
        cliente.saldo = saldo;

        resultadoResta.style.color = "black";
        resultadoResta.innerText = localStorage.getItem('saldo');
        }
    return totalResta;
}














































