


function actualizarErrores() {
    var errores = document.getElementsByClassName('error')
    for (var i = 0; i < errores.length; i++) {
        errores[i].innerHTML = ""
    }
}

// Iniciar sesión -----------------------------------
function iniciar(sesion) {

    actualizarErrores()

    if (sesion.correo.value.trim().length == 0) {
        document.getElementById('errorEmail').innerText = 'Campo obligatorio'
        sesion.correo.focus()
        return false;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(sesion.correo.value)) {
        document.getElementById('errorEmail').innerText = 'Campo inválido'
        sesion.correo.focus()
        return false;
    }

    if (sesion.contrasena.value.trim().length == 0) {
        document.getElementById("errorContrasena").innerText = 'Campo obligatorio'
        sesion.contrasena.focus()
        return false;
    }

    if (sesion.contrasena.value.trim().length < 8) {
        document.getElementById("errorContrasena").innerText = 'Mínimo 8 caracteres'
        sesion.contrasena.focus()
        return false;
    }
    
    return true;

}


function registrar(registro) {

    actualizarErrores()

    if (registro.email.value.trim().length == 0) {
        document.getElementById("errorEmail").innerText = "Campo obligatorio";
        registro.email.focus()
        return false;
    }  
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(registro.email.value)) {
        document.getElementById("errorEmail").innerText = "Campo inválido";
        registro.email.focus()
        return false
    }   
    if (registro.contra.value.trim().length == 0) {
        document.getElementById("errorContrasena").innerText = "Campo obligatorio";
        registro.contra.focus()
        return false
    }   
    if (registro.contra.value.trim().length < 8) {
        document.getElementById("errorContrasena").innerText = "Campo inválido (Mínimo 8 caracteres)";         
        registro.contra.focus()
        return false     
    }   
    if (registro.confContra.value.trim().length == 0) {
        document.getElementById("errorContrasenaComfirmacion").innerText = "Campo obligatorio";
        registro.confContra.focus()
        return false;
    }   
    if (registro.contra.value != registro.confContra.value) {
        document.getElementById("errorContrasenaComfirmacion").innerText = "No coincide";
        registro.confContra.focus()
        return false;
    } 
    if (registro.checkEdad.value == "") {
        document.getElementById("errorEdad").innerText = "Campo obligatorio";
        return false;
    }    
    if (!registro.terminos.checked) {         
        document.getElementById("errorTerminos").innerText = "Debes aceptar los términos de uso";         
        registro.terminos.focus()         
        return false;      
    }  

    return true
    
}