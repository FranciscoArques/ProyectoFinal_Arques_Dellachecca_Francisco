//Creación de un "Usuario" a través del Local Storage

class Usuario {
    constructor (nombre){
        this.nombre = nombre;
    }
}

const inputNombre = document.querySelector("#nombre");
const inputEnviar = document.querySelector("#enviar");

inputNombre.addEventListener("click", function(){
    inputNombre.value = "";
})

inputNombre.addEventListener("blur", function(){
    let usuario = new Usuario;
    usuario = inputNombre.value;
    localStorage.setItem("usuario", usuario)
})

inputEnviar.addEventListener("click", function(){
    if(inputNombre.value == ""){
        inputNombre.value = "Usuario No Registrado"
    }

    let usuarioCreado1 = document.createElement("h2");
    usuarioCreado1.innerHTML = "Bienvenido, " + inputNombre.value;
    let tituloPrincipal = document.querySelector("h1");
    tituloPrincipal.insertBefore(usuarioCreado1, tituloPrincipal.firstElementChild)
})

window.onunload = function () {
	sessionStorage.clear();
}

//Juego 1: Encontrar el Número Par

let respuestaIncorrecta = document.querySelectorAll(".botonIncorrecto");

for(const botonIncorrecto of respuestaIncorrecta){
    botonIncorrecto.onclick = () => {Swal.fire({
        icon: 'error',
        title: 'Oops... ' + inputNombre.value + '!',
        text: '¡Este Número NO es Par!',
    })}
}

let respuestaCorrecta = document.querySelectorAll(".botonCorrecto");

for(const botonCorrecto of respuestaCorrecta){
    botonCorrecto.onclick = () => {Swal.fire({
        icon: 'success',
        title: '¡Correcto ' + inputNombre.value + '!',
        text: '¡Este Número SÍ es Par!',
    })}
}

//Juego 2: Explorando Números Pares E Impares

let numeroIngresado = document.getElementById("input1");
let boton1 = document.getElementById("boton1");

const valoresPar = [];
const valoresImpar = [];

function par() {
    let numPar = document.createElement("p");
    numPar.innerHTML = "<h3>El Número que Ingresó " + inputNombre.value + " es PAR</h3>";
    let numParLink = document.getElementById("ResultadoParidad");
    numParLink.insertBefore(numPar, numParLink.firstElementChild)

    sessionStorage.setItem("valuesPar", numeroIngresado.value);
    valoresPar.push(sessionStorage.getItem("valuesPar"))
}

function impar() {
    let numImpar = document.createElement("p");
    numImpar.innerHTML = "<h3>El Número que Ingresó " + inputNombre.value + " es IMPAR</h3>";
    let numImparLink = document.getElementById("ResultadoParidad");
    numImparLink.insertBefore(numImpar, numImparLink.firstElementChild)

    sessionStorage.setItem("valuesImpar", numeroIngresado.value);
    valoresImpar.push(sessionStorage.getItem("valuesImpar"))
}

boton1.onclick = () => {
    (numeroIngresado.value)%2 ? impar() : par();
}

boton2.onclick = () => {
    const valores = [
        ...valoresPar,
        ...valoresImpar,
    ]

    if((sessionStorage.valuesPar /= "") || (sessionStorage.valuesImpar /= "")){
        let pares = document.createElement("p");
        pares.innerHTML = `<h3> Los Números Pares que Ingresó ${inputNombre.value} Fueron: ${valoresPar.join(", ") || "Todavía No Ingresaste Ningún Número Par"}. Siendo el Último Ingresado ${valoresPar[valoresPar.length - 1] || "Todavía No Ingresaste Ningún Número Par"}.</h3>
                        <h3> Los Números Impares que Ingresó ${inputNombre.value} Fueron: ${valoresImpar.join(", ") || "Todavía No Ingresaste Ningún Número Impar"}. Siendo el Último Ingresado ${valoresImpar[valoresImpar.length - 1] || "Todavía No Ingresaste Ningún Número Impar"}.</h3>
                        <h3> Los Números Pares e Impares, Ordenados de Mayor a Menor, Ingresados Por ${inputNombre.value} Fueron: ${(valores.sort ((a, b) => b - a)).join(", ")}. </h3>`;
        let paresLink = document.getElementById("ResultadoParidad");
        paresLink.insertBefore(pares, paresLink.firstElementChild);
    }else{
    Swal.fire({
        icon: 'error',
        title: '¡No Podemos Realizar esta Operación ' + inputNombre.value + '!',
        text: '¡Ingresa Un Número Primero!',
    })
    }
}

boton3.onclick = () => {
    const suma = {
        valPar: parseInt(valoresPar[valoresPar.length - 1]), 
        valImpar: parseInt(valoresImpar[valoresImpar.length - 1]),
    }
    
    let {valPar: Par, valImpar: Impar} = suma

    if((sessionStorage.valuesPar /= "") && (sessionStorage.valuesImpar /= "")){
        let resultado = document.createElement("p");
        resultado.innerHTML = "<h3>" + "La Suma que Realizó " + inputNombre.value + " es: " + (Par + Impar) + ". </h3>";
        let resultadoLink = document.getElementById("ResultadoParidad");
        resultadoLink.insertBefore(resultado, resultadoLink.firstElementChild)
    }else{
    Swal.fire({
        icon: 'error',
        title: '¡No Podemos Realizar esta Operación ' + inputNombre.value + '!',
        text: '¡Ingresa Un Número Par E Impar Primero!',
    })
    }

}

boton4.onclick = () => {
    let resultadosJuego2 = document.getElementById("ResultadoParidad");
    resultadosJuego2.innerHTML = "";
    sessionStorage.clear();
}

//Juego 3: Ordenar Números de Mayor a Menor y Sumatoria

let ordenarN = document.getElementById("input2")
const orden = [];

let boton5 = document.getElementById("case1");
boton5.addEventListener("click", function(){
    sessionStorage.setItem("vals", ordenarN.value);
    orden.push(sessionStorage.getItem("vals"));

    if(sessionStorage.vals /= ""){    
        let caso1 = document.createElement("p");
        caso1.innerHTML = `<h3>El Número que ${inputNombre.value} Ingresó es: ${orden[orden.length - 1]}.</h3>`
        let caso1Link = document.getElementById("ResultadoOrdenadora");
        caso1Link.insertBefore(caso1, caso1Link.firstElementChild);
    }else{
        Swal.fire({
            icon: 'error',
            title: '¡No Podemos Realizar esta Operación ' + inputNombre.value + '!',
            text: '¡Ingresa Un Número Primero!',
        })
    }
})

let boton5b = document.getElementById("case1b");
    boton5b.addEventListener("click", function(){

        if(sessionStorage.vals /= ""){
            let resultadoOrdenadora = document.createElement("p");
            resultadoOrdenadora.innerHTML = `<h3>Los Números Ordenados de Mayor a Menor son: ${(orden.sort ((a, b) => b - a)).join(", ")}. </h3>
                                <h3>Los Números Ordenados de Menor a Mayor son: ${(orden.sort ((b, a) => b - a)).join(", ")}. </h3>`;
            let resultadoOrdenadoraLink = document.getElementById("ResultadoOrdenadora");
            resultadoOrdenadoraLink.insertBefore(resultadoOrdenadora, resultadoOrdenadoraLink.firstElementChild)
        }else{
            Swal.fire({
                icon: 'error',
                title: '¡No Podemos Realizar esta Operación ' + inputNombre.value + '!',
                text: '¡Ingresa Un Número Primero!',
            })
        }
    })

let sumatoria = document.getElementById("case1c");
sumatoria.addEventListener("click", function(){
    let suma = 0;
    for (let i = 0; i < orden.length; i+=1) {
        suma += Number(orden[i])
    }

    let resultadoSumatoria = document.createElement("p");
    resultadoSumatoria.innerHTML = "<h3>La Suma de Todos los Valores Ingresados Es: " + suma + ".</h3>"
    let resultadoSumatoriaLink = document.getElementById("ResultadoOrdenadora");
    resultadoSumatoriaLink.insertBefore(resultadoSumatoria, resultadoSumatoriaLink.firstElementChild)
})

case2.onclick = () => {
    let resultadoOrdenadora = document.getElementById("ResultadoOrdenadora");
    resultadoOrdenadora.innerHTML = "";
    sessionStorage.clear();
}

//Juego 4: Calculadora

let valorIngresadoN = document.getElementById("input3");
let cuotasIngresadasN =document.getElementById("input4");
let interésMensualN = document.getElementById("input5"); 

let boton6 = document.getElementById("case3");
boton6.onclick = function(){
    let valorIngresado = parseFloat(valorIngresadoN.value)
    let cuotasIngresadas = parseInt(cuotasIngresadasN.value)
    let interésMensual = parseFloat(interésMensualN.value)

    function calcuEnCuotas (valor= 1, cuotas=1, interés=0) {
        return (valor * interés + valor) / cuotas;  
    }
    
    if (interésMensual >= 0 && interésMensual < 1 && valorIngresado > 0 && cuotasIngresadas >= 1) {
        let caso3a = document.createElement("p");
        caso3a.innerHTML = "<h3>Su cantidad a pagar en " + cuotasIngresadas + " meses es de " + calcuEnCuotas(valorIngresado, cuotasIngresadas, interésMensual) + " pesos argentinos por mes.</h3>"
        let caso3aLink = document.getElementById("resultadoCalculadora");
        caso3aLink.insertBefore(caso3a, caso3aLink.firstElementChild)

        localStorage.setItem("cuotas", calcuEnCuotas(valorIngresado, cuotasIngresadas, interésMensual))
    
    }else{
        let caso3b = document.createElement("p");
        caso3b.innerHTML = "<h3>Ingrese un número de valor, de cuota o interés calculable.</h3>"
        let caso3bLink = document.getElementById("resultadoCalculadora");
        caso3bLink.insertBefore(caso3b, caso3bLink.firstElementChild)
    }
}

case4.onclick = () => {
    let resultadoCalculadora = document.getElementById("resultadoCalculadora");
    resultadoCalculadora.innerHTML = "";
}

//Uso de FETCH y una API

function createNode(elemento) {
    return document.createElement(elemento);
}

function append(padre, el) {
    return padre.appendChild(el);
}

const ul = document.getElementById('autores');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let autores = data.results;
    return autores.map(function(autor) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = autor.picture.medium;
    span.innerHTML = `${autor.name.first} ${autor.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
    })
})
.catch(function(error) {
    console.log(error);
});