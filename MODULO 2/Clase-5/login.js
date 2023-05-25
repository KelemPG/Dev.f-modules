function pantallaAzul(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor = "blue"
}
function pantallaRosa(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor = "pink"
}
function pantallaMorada(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor = "purple"
}
function pantallaAmarilla(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor = "yellow"
}
function pantallaVerde(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor = "green"
}

function sumar(){
    let num1 = document.getElementById("a").value;
    let num2= document.getElementById("b").value;
    let resultado = parseInt (num1) + parseInt (num2);
    document.getElementById("c").value = resultado;

}
//agrgar la resta
//agrgar otros dos colores