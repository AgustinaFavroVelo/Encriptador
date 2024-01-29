function encriptar(){
    let texto = document.getElementById("text").value;
    let tituloMensaje = document.getElementById("mensaje-titulo");
    let parrafo = document.getElementById("mensaje-encriptado");
    let meme = document.getElementById("meme")

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.lenght != 0){
        texto = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito"
        parrafo.textContent="";
        meme.src ="./img/Dogecoin-2-1200x640.jpg";
    } else {
        meme.src="./img/angry-rat.jpg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar() {
    let texto = document.getElementById("text").value;
    let tituloMensaje = document.getElementById("mensaje-titulo");
    let parrafo = document.getElementById("mensaje-encriptado");
    let meme = document.getElementById("meme");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("text").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      meme.src = "./img/Dogecoin-2-1200x640.jpg";
    } else {
      meme.src = "./img/angry-rat.jpg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}