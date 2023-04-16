function encriptarTexto() {
    const texto = document.getElementById("texto").value.toLowerCase(); // obtener el texto del textarea en minúsculas
    let resultado = ""; // variable donde se almacenará el resultado de la encriptación

    // aplicar la encriptación letra por letra
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "e":
                resultado += "enter";
                break;
            case "i":
                resultado += "imes";
                break;
            case "a":
                resultado += "ai";
                break;
            case "o":
                resultado += "ober";
                break;
            case "u":
                resultado += "ufat";
                break;
            default:
                resultado += texto[i];
        }
    }

    mostrarResultado(resultado); // llamar a la función que muestra el resultado
}

function desencriptarTexto() {
    const texto = document.getElementById("texto").value; // obtener el texto del textarea
    let resultado = texto.replace(/enter|imes|ai|ober|ufat/g, function (match) {
        switch (match) {
            case "enter":
                return "e";
            case "imes":
                return "i";
            case "ai":
                return "a";
            case "ober":
                return "o";
            case "ufat":
                return "u";
        }
    });

    mostrarResultado(resultado.trim()); // llamar a la función que muestra el resultado, eliminando espacios en blanco innecesarios
}

function mostrarResultado(resultado) {
    const areaResultado = document.querySelector(".areaResultado"); // obtener la sección "areaResultado"
    areaResultado.classList.add("areaResultado2"); // crear una nueva clase para modificar los stylos

    // crear los elementos necesarios

    const resultadoP = document.createElement("p");
    resultadoP.textContent = resultado;
    resultadoP.classList.add("areaResultado2", "resultado-p"); // agregar las clases correspondientes

    const resultadoButton = document.createElement("button");
    resultadoButton.textContent = "Copiar";
    resultadoButton.className = "boton-resultado areaResultado2"; // agregar la clase correspondiente

    resultadoButton.addEventListener("click", function () {
        navigator.clipboard.writeText(resultado); // copiar el resultado al portapapeles
    });

    // añadir los elementos al DOM
    areaResultado.innerHTML = ""; // vaciar la sección "areaResultado"
    areaResultado.appendChild(resultadoP);
    areaResultado.appendChild(resultadoButton);
}
