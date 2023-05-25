const formulario = document.getElementById('formulario');
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

formulario.addEventListener('submit', (evento)=> {
    evento.preventDefault()
});



function login(event){
    let  username = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("error");
    // let saldo;
            // let saldo = cliente[i].saldo;

    if(validar(username, password)=== 1){
        //entraa a tu otra pagina
        window.location.href = "login.html";
        

        let btnI = document.getElementById("btnI");
        btnI.disabled = true;
        username.readOnly = true;
        // console.log('si');
    }else{
        mensaje.style.color = "red";
        mensaje.innerText = "Datos Incorrectos";
        // console.log('no');
        //mandas msj de error
    }
}

function validar(user, pass){
        let response;
        // console.log(user);
        // console.log(pass);
        for( let i=0; i< cliente.length; i++){

            if(cliente[i].nombre == user && cliente[i].password === pass){
                response = 1;
                localStorage.setItem("user",cliente[i].nombre);
                localStorage.setItem("pass",cliente[i].password);
                localStorage.setItem("saldo",cliente[i].saldo);
                // console.log(response);
                break;
            }else{
                response = 0;
                // console.log(response);
            }
        }
    return response;
}






