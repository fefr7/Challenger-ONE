

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


const textarea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(textarea.value);
    mensagem.value = textoEncriptado;
    textarea.value = " ";
}

function btndescriptografar() {
    const textoDecriptado = descriptografar(textarea.value);
    mensagem.value = textoDecriptado;
    textarea.value = " ";
}
function encriptar(stringencripitada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //console.table(matrizCodigo)
    stringencripitada = stringencripitada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringencripitada.includes(matrizCodigo[i][0])) {
            stringencripitada = stringencripitada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringencripitada;
}

function descriptografar(stringdescriptografada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringdescriptografada = stringdescriptografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringdescriptografada.includes(matrizCodigo[i][1])) {
            stringdescriptografada = stringdescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringdescriptografada;
}
 