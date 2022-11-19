const txtInput_palindromo = document.querySelector(".inputs input[name='text-palindromo']"),
      txtInput_num1 = document.querySelector(".inputs input[name='num1']"),
      txtInput_num2 = document.querySelector(".inputs input[name='num2']"),
      txtInput_vocales = document.querySelector(".inputs input[name='text-vocalesentexto']"),
      txtInput_vocalescounter = document.querySelector(".inputs input[name='text-vocalescounter']"),
      vowelsLetters = 'aeiouAEIOU';

checkBtn_palindromo = document.querySelector(".inputs button[id='btn-palindromo']"),
checkBtn_comparaNumeros = document.querySelector(".inputs button[id='btn-comparaNumeros']"),
checkBtn_vocales = document.querySelector(".inputs button[id='btn-vocalesentexto']"),
checkBtn_vocalesCounter = document.querySelector(".inputs button[id='btn-vocalescounter']"),

infoTxt_palindromo = document.querySelector(".info-txt-palindromo"),
infoTxt_CompararNumeros = document.querySelector(".info-txt-CompararNumeros"),
infoTxt_vocales = document.querySelector(".info-txt-vocales"),
infoTxt_vocalesCounter = document.querySelector(".info-txt-vocalesCounter");
let userInput;

function searchVowels(text) {
    let vowels = [];
    for (let char of text) {
        // If the char is a vowel, we push it to `vowels` array
        if (vowelsLetters.includes(char)) {
            vowels.push(char);
        }
    }
    return vowels;
}


function countVowels(acc, char) {
    
    var { a = 0, e = 0, i = 0, o = 0, u = 0 } = acc;
    
    if (char === "a") {
      return {...acc, a: a + 1};
    }
    if (char === 'i') {
      return { ...acc, i: i + 1}
    }
    if (char === 'e') {
      return { ...acc, e: e + 1}
    }
    if (char === 'o') {
      return { ...acc, o: o + 1}
    }
    if (char === 'u') {
      return { ...acc, u: u + 1}
    }
    
    return acc;
  }

// PUNTO 1
checkBtn_palindromo.addEventListener("click", () => {
    let reverseInput = userInput.split("").reverse().join("");
    infoTxt_palindromo.style.display = "block";
    if(userInput != reverseInput) {
        return infoTxt_palindromo.innerHTML = `No, <span>'${txtInput_palindromo.value}'</span> no es un palindromo!`;
    }
    infoTxt_palindromo.innerHTML = `Si, <span>'${txtInput_palindromo.value}'</span> es un palíndromo!`;



  });

  checkBtn_palindromo.addEventListener('click', function(e) {
    e.preventDefault();
    //let params = new FormData(document.forms.register);
    let request = new XMLHttpRequest();
    let url = window.location.href;
    
    //console.log("URL: ",  url)

    request.open("GET", "programs.html", true);
    request.send();

    //console.log("console output:", request)
    //console.log("URL: ",request.responseURL)
    //console.log("Response: ", request.response)

    
    let code_readyState = request.readyState;
    if(code_readyState == 0) {
      console.log("Estado #0 : No enviada");
    }

    if(code_readyState == 1) {
      console.log("Estado #1 : Abierta");
    }

    if(code_readyState == 2) {
      console.log("Estado #2 : Cabeceras recibidas");
    }

    if(code_readyState == 3) {
      console.log("Estado #3 : Cargando");
    }
    if(code_readyState == 4) {
      console.log("Estado #4 : Completada");
    }

    console.log(request)
    console.log("Response: ", request.response)


  });



txtInput_palindromo.addEventListener("keyup", () => {
    userInput = txtInput_palindromo.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(userInput) {
        return checkBtn_palindromo.classList.add("active");
    }
    infoTxt_palindromo.style.display = "none";
    checkBtn_palindromo.classList.remove("active");
});



// PUNTO 2

checkBtn_comparaNumeros.addEventListener("click", () => {
    
    var x = parseInt(document.querySelector(".inputs input[name='num1']").value);
    var y = parseInt(document.querySelector(".inputs input[name='num2']").value);

    infoTxt_vocales.style.display = "block";

    if (x > y) {
        return infoTxt_CompararNumeros.innerHTML = `<span>${x}</span> es mayor que <span>${y}</span>.`;
        // TODO: what about x == y ?
      } else {
        return infoTxt_CompararNumeros.innerHTML = `<span>${y}</span> es mayor que <span>${x}</span>.`;
      }
      
    });

txtInput_num1.addEventListener("keyup", () => {

    userInput = txtInput_num1.value;
    if(userInput) {
        return checkBtn_comparaNumeros.classList.add("active");
    }

    txtInput_num1.style.display = "none";
    checkBtn_comparaNumeros.classList.remove("active");
});


function calculate() {
    var checkBtn = document.querySelector(".inputs #btn");
    var infoTxt = document.querySelector(".result");
    var x = parseInt(document.getElementById("num1").value);
    var y = parseInt(document.getElementById("num2").value);
  
    if (x > y) {
        document.querySelector("#result").innerHTML += (x + " es mayor que " + y + ".");
        // TODO: what about x == y ?
      } else {
        document.querySelector("#result").innerHTML += (y + " es mayor que  " + x + ".");
      }
    infoTxt.style.display = "none"
  };



// PUNTO 3
checkBtn_vocales.addEventListener("click", () => {
    const counter = document.getElementById('counter');
    const vowels = document.getElementById('#info-txt-vocales');
    let countedVowels = searchVowels(txtInput_vocales.value.toLowerCase());

    infoTxt_vocales.style.display = "block";

    if (countedVowels.length) {
        return infoTxt_vocales.innerHTML = `Las vocales de la frase/palabra, <span>'${txtInput_vocales.value}'</span> son <span>'${countedVowels.join('-')}'</span>`;
    }
    
    infoTxt_vocales.innerHTML = `La palabra/frase, <span>'${txtInput_vocales.value}'</span> no tiene vocales`

    });

txtInput_vocales.addEventListener("keyup", () => {

    userInput = txtInput_vocales.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(userInput) {
        return checkBtn_vocales.classList.add("active");
    }

    txtInput_vocales.style.display = "none";
    checkBtn_vocales.classList.remove("active");
});

//PUNTO 4

checkBtn_vocalesCounter.addEventListener("click", () => {
    const strArr = txtInput_vocalescounter.value.toLowerCase().split('');
    const mapVowels = JSON.stringify(strArr.reduce(countVowels, {})); 

    const counter = document.getElementById('counter');
    const vowels = document.getElementById('#info-txt-vocalesCounter');
    let countedVowels = countVowels(txtInput_vocalescounter.value, {});

    infoTxt_vocalesCounter.style.display = "block";

    if (strArr.length) {
        return infoTxt_vocalesCounter.innerHTML = `Las vocales de la frase/palabra <span>'${txtInput_vocalescounter.value}'</span> son <span>'${mapVowels}'</span>`;
    }
    
    infoTxt_vocalesCounter.innerHTML = `La palabra/frase, <span>'${txtInput_vocalescounter.value}'</span> no tiene vocales`

    });

txtInput_vocalescounter.addEventListener("keyup", () => {

    userInput = txtInput_vocalescounter.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(userInput) {
        return checkBtn_vocalesCounter.classList.add("active");
    }

    txtInput_vocalescounter.style.display = "none";
    checkBtn_vocales.classList.remove("active");
});


var URLactual = window.location;
alert(URLactual);

// AJAX
String.prototype.transformaCaracteresEspeciales = function () {
  return unescape(escape(this).
      replace(/%0A/g, '<br/>').
      replace(/%3C/g, '&lt;').
      replace(/%3E/g, '&gt;'));
}

var estadosPosibles = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];
var tiempoInicial = 0;

window.onload = function () {
  // Cargar en el input text la URL de la página
  var recurso = document.getElementById('recurso');
  recurso.value = location.href;

  // Cargar el recurso solicitado cuando se pulse el botón MOSTRAR CONTENIDOS
  document.getElementById('enviar').onclick = cargaContenido;
}

function cargaContenido() {
  // Borrar datos anteriores
  document.getElementById('contenidos').innerHTML = "";
  document.getElementById('estados').innerHTML = "";

  // Instanciar objeto XMLHttpRequest
  if (window.XMLHttpRequest) {
      peticion = new XMLHttpRequest();
  }
  else {
      peticion = new ActiveXObject("Microsoft.XMLHTTP");
  }

  // Preparar función de respuesta
  peticion.onreadystatechange = muestraContenido;

  // Realizar petición
  tiempoInicial = new Date();
  var recurso = document.getElementById('recurso').value;
  peticion.open('GET', recurso + '?nocache=' + Math.random(), true);
  peticion.send(null);
}

// Función de respuesta
function muestraContenido() {
  var tiempoFinal = new Date();
  var milisegundos = tiempoFinal - tiempoInicial;

  var estados = document.getElementById('estados');
  estados.innerHTML += "[" + milisegundos + " mseg.] " + estadosPosibles[peticion.readyState] + "<br/>";

  if (peticion.readyState == 4) {
      if (peticion.status == 200) {
          var contenidos = document.getElementById('contenidos');
          contenidos.innerHTML = peticion.responseText.transformaCaracteresEspeciales();
      }
      muestraCabeceras();
      muestraCodigoEstado();
  }
}

function muestraCabeceras() {
  var cabeceras = document.getElementById('cabeceras');
  cabeceras.innerHTML = peticion.getAllResponseHeaders().transformaCaracteresEspeciales();
}

function muestraCodigoEstado() {
  var codigo = document.getElementById('codigo');
  codigo.innerHTML = peticion.status + "<br/>" + peticion.statusText;
}

