const formulario = document.querySelector('#formulario');

const dbUSER = 'Kelem';
const dbPASSWORD = '123';


function mostrarError (tipo){
    console.log(`error${tipo}`);
    let error = document.getElementById(`error${tipo}`)
    error.classList.remove('escondido')
    error.classList.add('error')
    console.log(error)
    setTimeout(()=>{
        error.classList.remove('error')
        error.classList.add('escondido')
    }, 5000)
}


function validar(nombre, codigo){
    if(nombre === dbUSER && codigo === dbPASSWORD){
        console.log('Bienvenido');
        
    }else if(nombre === '' && codigo === ''){
        console.log('Ingresa tus datos');
        mostrarError('Datos')

    }else if(nombre != dbUSER){
        console.log('User incorrecto');
        mostrarError('Usuario')

    }else if(codigo != dbPASSWORD){
        console.log('Password incorrecta');
        mostrarError('Password')
    }else{
        console.log('Usuario y/o password incorrecto');
    }
}

formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    let usuario = document.querySelector('#usuario').value
    let password = document.querySelector('#password').value
    validar(usuario, password)
});




