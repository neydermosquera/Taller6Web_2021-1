$(function(){
    $('#birthday').on('change', calcularEdad);
});

function calcularEdad() {
    
    fecha = $(this).val();
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    $('#age').val(edad);
}


//REGISTRO DE USUARIO -----------------------------

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{5,15}$/, 
	password: /^[a-zA-Z0-9\#\%\/\&]{4,12}$/, 
}

const campos = {
    usuario: false,
    password: false,
}

const validarFormulario = (e) =>{
   switch (e.target.name){
       case "usuario":
        if(expresiones.usuario.test(e.target.value)){
            document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto');
            document.querySelector('#grupo__usuario #icono').classList.add('fa-check-circle');
            document.querySelector('#grupo__usuario #icono').classList.remove('fa-times-circle-o');
            document.querySelector('#grupo__usuario .formulario__input-error').classList.remove('formulario__input-error-activo');
        } else {
            document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto');
            document.querySelector('#grupo__usuario #icono').classList.add('fa-times-circle');
            document.querySelector('#grupo__usuario #icono').classList.remove('fa-times-circle-o');
            document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo');
        }
       break;
       case "usuario2":
        validarUsuario2();
       break;
       case "password":
        if(expresiones.password.test(e.target.value)){
            document.getElementById('grupo__password').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__password').classList.add('formulario__grupo-correcto');
            document.querySelector('#grupo__password #icono').classList.add('fa-check-circle');
            document.querySelector('#grupo__password #icono').classList.remove('fa-times-circle-o');
            document.querySelector('#grupo__password .formulario__input-error').classList.remove('formulario__input-error-activo');
        } else {
            document.getElementById('grupo__password').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__password').classList.remove('formulario__grupo-correcto');
            document.querySelector('#grupo__password #icono').classList.add('fa-times-circle-o');
            document.querySelector('#grupo__password #icono').classList.remove('fa-check-circle');
            document.querySelector('#grupo__password .formulario__input-error').classList.add('formulario__input-error-activo');
        };
        validarPassword2();
        
       break;
       case "password2":
        validarPassword2();
       break;
   }
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto');
		document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto');
		document.querySelector('#grupo__password2 #icono').classList.add('fa-times-circle-o');
		document.querySelector('#grupo__password2 #icono').classList.remove('fa-check-circle');
		document.querySelector('#grupo__password2 .formulario__input-error').classList.add('formulario__input-error-activo');
        campos['password'] = false;
	} else {
		document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto');
		document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto');
		document.querySelector('#grupo__password2 #icono').classList.remove('fa-times-circle-o');
		document.querySelector('#grupo__password2 #icono').classList.add('fa-check-circle');
		document.querySelector('#grupo__password2 .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos['password'] = true;
	}
}

const validarUsuario2 = () => {
	const inputUsuario1 = document.getElementById('usuario');
	const inputUsuario2 = document.getElementById('usuario2');

	if(inputUsuario1.value !== inputUsuario2.value){
		document.getElementById('grupo__usuario2').classList.add('formulario__grupo-incorrecto');
		document.getElementById('grupo__usuario2').classList.remove('formulario__grupo-correcto');
		document.querySelector('#grupo__usuario2 #icono').classList.add('fa-times-circle-o');
		document.querySelector('#grupo__usuario2 #icono').classList.remove('fa-check-circle');
		document.querySelector('#grupo__usuario2 .formulario__input-error').classList.add('formulario__input-error-activo');
		campos['usuario'] = false;
	} else {
		document.getElementById('grupo__usuario2').classList.remove('formulario__grupo-incorrecto');
		document.getElementById('grupo__usuario2').classList.add('formulario__grupo-correcto');
		document.querySelector('#grupo__usuario2 #icono').classList.remove('fa-times-circle-o');
		document.querySelector('#grupo__usuario2 #icono').classList.add('fa-check-circle');
		document.querySelector('#grupo__usuario2 .formulario__input-error').classList.remove('formulario__input-error-activo');
		campos['usuario'] = true;
	}
}


inputs.forEach( (input) =>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.usuario && campos.password){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

//GRILLA -----------------------


