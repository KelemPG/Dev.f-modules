// function Saludar(){
//     alert("Hola Mundo!")
// }

// function mostrarCoordenada(event){
//     alert ("Coordenadas del click en x: ", event.clientx, "y: ", event.clienty);
// }

    /* Obtener valores del campo de usario y contraseña a
    traves de document.getElementById */
    
    function login(event){
        let password = document.getElementById("password").value;
        let username = document.getElementById("username");
        let mensaje = document.getElementById("mensaje");

    if (username.value == "kel@gmail.com" && password === "1234"){/* Si contraseña && password coinciden nos redirecciona */
        window.location.href = "login.html"; 
        let bntLogin = document.getElementById("btn_login");
        bntLogin.disabled = true;/* Buscar nuestro boton para desahabilitar el boton de inicio de sesion  y establecer el campo de entrada de username como solo lectura*/
        username.readOnly = true;
    } else{
        mensaje.style.color ="red";
        mensaje.innerText = "Error al iniciar sesion";
    }
}