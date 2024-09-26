
function calcularInteres() {
    let capital = document.getElementById('capital').value;
    
    if (capital <= 0 || isNaN(capital)) {
        alert("Ingrese un valor válido para el capital inicial.");
        return;
    }
    
    let tasaInteres = 0.02;
    let montoFinal = capital * (1 + tasaInteres);
    
    document.getElementById('resultado').innerHTML = 
        "El monto final después de un mes será: $"  + montoFinal.toFixed(2);
}
/*------------------------------------------------------------------------------------------------------------------------------------------------*/
function calcularSalario() {
    let suelBase = parseFloat(document.getElementById('suelBase').value);
    let vent1 = parseFloat(document.getElementById('vent1').value);
    let vent2 = parseFloat(document.getElementById('vent2').value);
    let vent3 = parseFloat(document.getElementById('vent3').value);

    if (isNaN(suelBase) || suelBase <= 0 || isNaN(vent1) || vent1 < 0 || isNaN(vent2) || vent2 < 0 || isNaN(vent3) || vent3 < 0) {
        alert("Ingrese valores válidos para el sueldo y las ventas");
        return;
    }

    let comision = 0.1 * (vent1 + vent2 + vent3);
    let salriTotal = suelBase + comision;

    if (!isNaN(salriTotal)) {
        document.getElementById('resltSalari').textContent = "Total de comisiones: $" + comision.toFixed(2) + "Salario total: $" + salriTotal.toFixed(2);
    } else {
        alert("Error al calcular el salario total. Verifica los valores ingresados.");
    }
}
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
function calcularDescuento() {
    let totalCompra = parseFloat(document.getElementById('totalCompra').value);

    if (isNaN(totalCompra) || totalCompra <= 0) {
    alert("Ingrese un monto de compra válido.");
    return;
    }

    let descuento = totalCompra * 0.15;
    let precioFinal = totalCompra - descuento;

    document.getElementById('resultadoDescuento').textContent = "Descuento: $" + descuento.toFixed(2) + " Total a pagar: $" + precioFinal.toFixed(2);
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function calcularCalificacion() {
    let par1 = parseFloat(document.getElementById('par1').value);
    let par2 = parseFloat(document.getElementById('par2').value);
    let par3 = parseFloat(document.getElementById('par3').value);
    let exaF = parseFloat(document.getElementById('exaF').value);
    let traF = parseFloat(document.getElementById('traf').value);

if (isNaN(par1) || par1 < 0 || par1 > 10 || isNaN(par2) || par2 < 0 || par2 > 10 || isNaN(par3) || par3 < 0 || par3 > 10 || 
isNaN(exaF) || exaF < 0 || exaF > 10 || isNaN(trabF) || traF < 0 || traF > 10) {
    alert("Ingrese calificaciones válidas entre 0 y 10");
    return;
}

let prompar = (par1 + par2 + par3) / 3;
let caliF = (prompar * 0.55) + (exaF * 0.3) + (traF * 0.15);

document.getElementById('rescali').textContent = "Calificación final: " + caliF.toFixed(2);
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function calcularEdad() {
let fechaNa = new Date(document.getElementById('anioNacimiento').value);
let fechaAc= new Date();

if (isNaN(fechaNa.getTime())) {
    alert("Ingrese una fecha de nacimiento válida.");
    return;
}

let edad = fechaAc.getFullYear() - fechaNa.getFullYear();
let mes = fechaAc.getMonth() - fechaNa.getMonth();
if (mes < 0 || (mes === 0 && fechaAc.getDate() < fechaNa.getDate())) {
    edad--;
}

document.getElementById('resulEdad').textContent = "Edad: " + edad + " años.";
}
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function palabrasANumeros() {
let palbrs = document.getElementById('palbrs').value.split(',');
let result = palbrs .map(function(palabra) {
    switch (palabra.trim().toLowerCase()) {
        case 'cero': return 0;
        case 'uno': return 1;
        case 'dos': return 2;
        case 'tres': return 3;
        case 'cuatro': return 4;
        case 'cinco': return 5;
        case 'seis': return 6;
        case 'siete': return 7;
        case 'ocho': return 8;
        case 'nueve': return 9;
        default: return -1;
    }
});

document.getElementById('resulpalbrs').textContent = "Traducción: " + result.join(', ');
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function calcularHorasExtras() {
let hrsTrbjds = parseFloat(document.getElementById('hrsTrbjds').value);
let salarioPorhora = parseFloat(document.getElementById('pagoHora').value);

if (isNaN(hrsTrbjds) || hrsTrbjds < 0 || isNaN(salarioPorhora) || salarioPorhora <= 0) {
    alert("Ingrese valores válidos para las horas trabajadas y el salario por hora.");
    return;
}

let salarioNormal = Math.min(40,  hrsTrbjds) * salarioPorhora;
let horasEx = Math.max(0,  hrsTrbjds - 40);
let pagohex = 0;

if (horasEx  > 0) {
    if (horasEx  <= 8) {
        pagohex  = horasEx  * salarioPorhora * 2;
    } else {
        pagohex  = (8 * salarioPorHora * 2) + 
                             ((horasEx  - 8) * salarioPorhora * 3);
    }
}

let salaritotal = salarioNormal + pagohex ;

document.getElementById('resulthE').textContent = "Salario total con horas extras: $" + salaritotal.toFixed(2);
}
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function calcularUtilidad() {
let salariomen = parseFloat(document.getElementById('salariomen').value);
let antig = parseFloat(document.getElementById('antig').value);

if (isNaN(salariomen) || salariomen <= 0 || isNaN(antig) || antig < 0) {
    alert("Ingrese valores válidos para el salario y la antigüedad.");
    return;
}

let porcenutili;
if (antig < 1) {
    porcenutili = 0.05;
} else if (antig < 2) {
    porcenutili = 0.07;
} else if (antig < 5) {
    porcenutili = 0.1;
} else if (antig < 10) {
    porcenutili = 0.15;
} else {
    porcenutili = 0.2;
}

let utili= salariomen * porcenutili;

document.getElementById('resulutili').textContent = "Utilidad anual: $" + utili.toFixed(2);
}

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function calcularLetraDNI() {
let dni = parseInt(document.getElementById('dni').value);

if (isNaN(dni) || dni < 0 || dni > 99999999) {
    alert("Ingrese un número de DNI válido (entre 0 y 99999999).");
    return;
}

let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
let letra = letras.charAt(dni % 23);

document.getElementById('resDNI').textContent = "Letra del DNI: " + letra;
}
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function validarFormulario() {
let nombre = document.getElementById('nombre').value;
let email = document.getElementById('email').value;
let coment = document.getElementById('coment').value;
let password = document.getElementById('password').value;
let aceptoCon = document.getElementById('aceptoCon').checked;

if (!nombre || !email || !comentarios || !password) {
    alert("Todos los campos son obligatorios.");
    return false;
}

let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!regexEmail.test(email)) {
    alert("Ingresa un email válido.");
    return false;
}

if (coment.length > 50) {
    alert("El comentario no debe exceder los 50 caracteres.");
    return false;
}

let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
if (!regexPassword.test(password)) {
    alert("La contraseña debe tener al menos 6 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número.");
    return false;
}

if (!aceptoCon) {
    alert("Debe aceptar las condiciones del servicio.");
    return false;
}

alert("Formulario enviado correctamente.");
return true;
}
