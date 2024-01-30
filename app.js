function encriptar(){
    let texto = document.getElementById("text").value;
    let tituloMensaje = document.getElementById("mensaje-titulo");
    let parrafo = document.getElementById("mensaje-encriptado");
    let meme = document.getElementById("meme")

    if (validateInput(texto)) {
        let textoCifrado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

        document.getElementById("text").value = textoCifrado

        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        meme.src = "./img/Dogecoin-2-1200x640.jpg";
    } else {
        meme.src = "./img/angry-rat.jpg";
        tituloMensaje.textContent = "Error: Ingrese un texto con letras minúsculas";
        parrafo.textContent = "Ingresa un texto válido sin caracteres especiales ni mayúsculas";
        Swal.fire({
            title: 'Oops!',
            text: 'Solo minúsculas.',
            icon: 'warning',
            timer: 2000, 
            showConfirmButton: false
        });
    }
}

function validateInput(text) {
    // asi acepta solo minusculas
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}


function copyMessage() {
    // Get el elemeto textarea 
    let textarea = document.getElementById("text");
  
    // seleccionar dentro del textarea
    textarea.select();
  
    // copiar texto a clipboard
    document.execCommand("copy");
  
    // deseleccionar texto
    textarea.setSelectionRange(0, 0);
  
    // mensaje copiado notificacion
    Swal.fire({
      title: 'Copied!',
      text: 'El mensaje encriptado ha sido copiado al portapapeles.',
      icon: 'success',
      timer: 2000, // duracion
      showConfirmButton: false // esconde el "OK" button
    });
  }
 

  function desencriptar() {
    let texto = document.getElementById("text").value;
    let tituloMensaje = document.getElementById("mensaje-titulo");
    let parrafo = document.getElementById("mensaje-encriptado");
    let meme = document.getElementById("meme");

    if (texto.length != 0) {
        let textoDescifrado = texto
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");

        // Mostrat el texto desencriptado
        document.getElementById("text").value = textoDescifrado;

        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        meme.src = "./img/Dogecoin-2-1200x640.jpg";
    } else {
        meme.src = "./img/angry-rat.jpg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire({
            title: 'Oops!',
            text: 'Debes ingresar un texto.',
            icon: 'warning',
            timer: 2000, 
            showConfirmButton: false 
        });
    }
}
