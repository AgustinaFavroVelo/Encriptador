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

    if (texto.length != 0){
        texto = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.innerText=texto;
        meme.src ="./img/Dogecoin-2-1200x640.jpg";
    } else {
        meme.src="./img/angry-rat.jpg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire({
            title: 'Oops!',
            text: 'Debes ingresar un texto.',
            icon: 'warning',
            timer: 2000, // Duration of the notification in milliseconds
            showConfirmButton: false // Hide the "OK" button
          });
    }
}

function copyMessage() {
    // Get the textarea element
    let textarea = document.getElementById("text");
  
    // Select the text inside the textarea
    textarea.select();
  
    // Copy the selected text to the clipboard
    document.execCommand("copy");
  
    // Deselect the text
    textarea.setSelectionRange(0, 0);
  
    // Show a notification to indicate that the message has been copied
    Swal.fire({
      title: 'Copied!',
      text: 'El mensaje encriptado ha sido copiado al portapapeles.',
      icon: 'success',
      timer: 2000, // Duration of the notification in milliseconds
      showConfirmButton: false // Hide the "OK" button
    });
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
        parrafo.textContent = textoCifrado;
        meme.src = "./img/Dogecoin-2-1200x640.jpg";
    } else {
        meme.src = "./img/angry-rat.jpg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire({
            title: 'Oops!',
            text: 'Debes ingresar un texto.',
            icon: 'warning',
            timer: 2000, // Duration of the notification in milliseconds
            showConfirmButton: false // Hide the "OK" button
          });
    }
}