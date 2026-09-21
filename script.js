const boton = document.getElementById("boton");
const flores = document.getElementById("flores");

boton.addEventListener("click", function () {

    boton.style.display = "none";

    const mensajeInicial = document.createElement("p");
    mensajeInicial.textContent = "Estas flores son para ti 💛";
    flores.appendChild(mensajeInicial);

    crearJardin();

    // Después de que aparezcan las flores
    setTimeout(function () {
        mostrarMensajeFinal();
    }, 5500);
});


function crearJardin() {

    const cantidadFlores = 12;

    for (let i = 0; i < cantidadFlores; i++) {

        setTimeout(function () {
            crearFlor();
        }, i * 300);
    }
}


function crearFlor() {

    const flor = document.createElement("div");

    flor.classList.add("flor");

    // Cabeza de la flor
    const cabeza = document.createElement("div");
    cabeza.classList.add("cabeza");

    // Centro
    const centro = document.createElement("div");
    centro.classList.add("centro");

    cabeza.appendChild(centro);

    // Tallo
    const tallo = document.createElement("div");
    tallo.classList.add("tallo");

    // Hojas
    const hoja1 = document.createElement("div");
    hoja1.classList.add("hoja", "hoja1");

    const hoja2 = document.createElement("div");
    hoja2.classList.add("hoja", "hoja2");

    flor.appendChild(cabeza);
    flor.appendChild(tallo);
    flor.appendChild(hoja1);
    flor.appendChild(hoja2);

    // Posición aleatoria
    const posicion = Math.random() * 90;

    flor.style.left = posicion + "%";

    document.body.appendChild(flor);
}


function mostrarMensajeFinal() {

    const mensajeFinal = document.createElement("div");

    mensajeFinal.classList.add("mensaje-final");

    mensajeFinal.innerHTML = `
        <h2>🌼 Para ti, Mi amol 💛</h2>
        <p id="texto-escritura"></p>
    `;

    document.body.appendChild(mensajeFinal);

    const texto =
        "Aunque hoy no pueda darte estas flores en persona, " +
        "sabes lo especial que eres para mi. " +
        "Te amo mucho. 💛🌼";

    escribirTexto(texto);
}


function escribirTexto(texto) {

    const elemento = document.getElementById("texto-escritura");

    let indice = 0;

    const intervalo = setInterval(function () {

        elemento.textContent += texto[indice];

        indice++;

        if (indice >= texto.length) {
            clearInterval(intervalo);
        }

    }, 45);
}