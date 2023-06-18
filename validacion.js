var spanNombre = document.getElementById('errorNombre');
var spanPrimerApellido = document.getElementById('errorPrimerApellido');
var spanSegundoApellido = document.getElementById('errorSegundoApellido');
var spanEmail = document.getElementById('errorEmail');
var spanLogin = document.getElementById('errorLogin');
var spanPassword = document.getElementById('errorPassword');

var inputNombre = document.getElementById('nombre');
var inputPrimerApellido = document.getElementById('primerApellido');
var inputSegundoApellido = document.getElementById('segundoApellido');
var inputEmail = document.getElementById('email');
var inputLogin = document.getElementById('login');
var inputPassword = document.getElementById('password');

const form = document.getElementById('formulario');
form.noValidate = true;

inputNombre.oninput = function () {
    validarNombre();
};
inputPrimerApellido.oninput = function () {
    validarPrimerApellido();
};
inputSegundoApellido.oninput = function () {
    validarSegundoApellido();
};
inputEmail.oninput = function () {
    validarEmail();
};
inputLogin.oninput = function () {
    validarLogin();
};
inputPassword.oninput = function () {
    validarPassword();
};

function validarNombre() {
    inputNombre.setCustomValidity("");
    if (!inputNombre.value) {
        spanNombre.style.display = "block"
        spanNombre.innerHTML = 'Rellene este campo';
        inputNombre.classList.add('input-nombre')
    } else if
        (!comprobarPatronNombre()) {
        inputNombre.setCustomValidity("Invalid field.");
        spanNombre.style.display = "block"
        spanNombre.innerHTML = 'Nombre inv&aacute;lido';
        inputNombre.classList.add('input-nombre')
    } else {
        spanNombre.style.display = "none"
        spanNombre.innerHTML = '';
    }
}

function validarPrimerApellido() {
    inputPrimerApellido.setCustomValidity("");
    if (!inputPrimerApellido.value) {
        spanPrimerApellido.style.display = "block"
        spanPrimerApellido.innerHTML = 'Rellene este campo';
        inputPrimerApellido.classList.add('input-primer-apellido')
    } else if
        (!comprobarPatronPrimerApellido()) {
        inputPrimerApellido.setCustomValidity("Invalid field.");
        spanPrimerApellido.style.display = "block"
        spanPrimerApellido.innerHTML = 'Primer apellido inv&aacute;lido';
        inputPrimerApellido.classList.add('input-primer-apellido')
    } else {
        spanPrimerApellido.style.display = "none"
        spanPrimerApellido.innerHTML = '';
    }
}

function validarSegundoApellido() {
    inputSegundoApellido.setCustomValidity("");
    if (!inputSegundoApellido.value) {
        spanSegundoApellido.style.display = "block"
        spanSegundoApellido.innerHTML = 'Rellene este campo';
        inputSegundoApellido.classList.add('input-apellido')
    } else if
        (!comprobarPatronSegundoApellido()) {
        inputSegundoApellido.setCustomValidity("Invalid field.");
        spanSegundoApellido.style.display = "block"
        spanSegundoApellido.innerHTML = 'Segundo apellido inv&aacute;lido';
        inputSegundoApellido.classList.add('input-segundo-apellido')
    } else {
        spanSegundoApellido.style.display = "none"
        spanSegundoApellido.innerHTML = '';
    }
}

function validarEmail() {
    inputEmail.setCustomValidity("");
    if (!inputEmail.value) {
        spanEmail.style.display = "block"
        spanEmail.innerHTML = 'Rellene este campo';
        inputEmail.classList.add('input-email')
    } else if
        (!comprobarPatronEmail()) {
        inputEmail.setCustomValidity("Invalid field.");
        spanEmail.style.display = "block"
        spanEmail.innerHTML = 'Email inv&aacute;lido';
        inputEmail.classList.add('input-email')
    } else {
        spanEmail.style.display = "none"
        spanEmail.innerHTML = '';
    }
}

function validarLogin() {
    if (!inputLogin.value) {
        spanLogin.style.display = "block"
        spanLogin.innerHTML = 'Rellene este campo';
        inputLogin.classList.add('input-login')
    } else if
        (!comprobarPatronLogin()) {
        spanLogin.style.display = "block"
        spanLogin.innerHTML = 'Login inv&aacute;lido';
        inputLogin.classList.add('input-login')
    } else {
        spanLogin.style.display = "none"
        spanLogin.innerHTML = '';
    }
}

function validarPassword() {
    if (!inputPassword.value) {
        spanPassword.style.display = "block"
        spanPassword.innerHTML = 'Rellene este campo';
        inputPassword.classList.add('input-password')
    } else if
        (!comprobarPatronPassword()) {
        spanPassword.style.display = "block"
        spanPassword.innerHTML = 'Password inv&aacute;lido';
        inputPassword.classList.add('input-password')
    } else {
        spanPassword.style.display = "none"
        spanPassword.innerHTML = '';
    }
}

function comprobarPatronNombre() {
    var pattern = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    return pattern.test(inputNombre.value);
}

function comprobarPatronPrimerApellido() {
    var pattern = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    return pattern.test(inputPrimerApellido.value);
}

function comprobarPatronSegundoApellido() {
    var pattern = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    return pattern.test(inputSegundoApellido.value);
}

function comprobarPatronEmail() {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(inputEmail.value);
}

function comprobarPatronLogin() {
    var pattern = /^[A-Za-z0-9]+$/;
    return pattern.test(inputLogin.value);
}

function comprobarPatronPassword() {
    var pattern = /^.{4,8}$/;
    return pattern.test(inputPassword.value);
}
