function encriptarTexto() {
    let textoPrincipal = document.getElementById("textoPrincipal").value;
    let mensajeUsuario = document.getElementById("mensajeUsuario");
    let parrafoMensajeUsuario = document.getElementById("parrafoMensajeUsuario");
    let imagenEncriptador = document.getElementById("imagenEncriptador");

    let textoEncriptado = textoPrincipal
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat")

    if (textoPrincipal.length != "") {
        document.getElementById("textoPrincipal").value = textoEncriptado;
        mensajeUsuario.textContent = "Texto encriptado exitosamente";
        parrafoMensajeUsuario.textContent = "";
        imagenEncriptador.src = "./img/diamod.png";
    } else {
        imagenEncriptador.src = "./img/Muñeco.png";
        mensajeUsuario.textContent = "Ningún mensaje fue encontrado";
        parrafoMensajeUsuario.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        mostrarMensajeEncriptar()
    }
}


function desencriptarTexto() {
    let textoPrincipal = document.getElementById("textoPrincipal").value;
    let mensajeUsuario = document.getElementById("mensajeUsuario");
    let parrafoMensajeUsuario = document.getElementById("parrafoMensajeUsuario");
    let imagenEncriptador = document.getElementById("imagenEncriptador");

    let textoEncriptado = textoPrincipal
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")

    if (textoPrincipal.length != "") {
        document.getElementById("textoPrincipal").value = textoEncriptado;
        mensajeUsuario.textContent = "Texto desencriptado exitosamente";
        parrafoMensajeUsuario.textContent = "";
        imagenEncriptador.src = "./img/diamod.png";
    } else {
        imagenEncriptador.src = "./img/Muñeco.png";
        mensajeUsuario.textContent = "Ningún mensaje fue encontrado";
        parrafoMensajeUsuario.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        mostrarMensajeDesencriptar();
    }

}

function mostrarMensajeDesencriptar() {
    Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "¡Escribe algún texto para desencriptar!",
      });
}

function mostrarMensajeEncriptar() {
    Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "¡Escribe algún texto para encriptar!",
      });
}