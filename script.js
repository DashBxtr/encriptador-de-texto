const textArea = document.getElementById("textArea");
const btnEncrip = document.getElementById("btnEncrip");
const btnDesencrip = document.getElementById("btnDesencrip");
const btnCopiar = document.getElementById("btnCopiar");
const msjInfo = document.getElementById("msjInfo");
const guy = document.getElementById("guy");
const msj = document.getElementById("msj");
const cont2 = document.getElementById("cont2");

//"e" es convertida para "enter"
//"i" es convertida para "imes"
//"a" es convertida para "ai"
//"o" es convertida para "ober"
//"u" es convertida para "ufat"

let reemplazar = [
    ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]
]

const repeat = (nuevoValor) => {
    msjInfo.innerHTML = nuevoValor;

    guy.style.display = "none";

    textArea.value = "";
    
    msj.style.display = "none";
    btnCopiar.style.display = "block";
    cont2.classList.add("action");
    msjInfo.classList.add ("action");

}

btnEncrip.addEventListener("click", () =>{
    const texto = textArea.value.toLowerCase();

    if(texto != ""){
    function encriptar (newText) {
        for (let i = 0; i < reemplazar.length; i++){
            if(newText.includes(reemplazar[i][0])){
                newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1])
            };
          };
          return newText;
     };
    } else {
        alert("No ha ingresado ningún texto")
    }

    // const textoEncriptado = encriptar(texto)
    repeat(encriptar(texto));



})

btnDesencrip.addEventListener("click",()=>{
    const texto = textArea.value.toLowerCase();

    if(texto != ""){
    function desencriptar (newText) {
        for (let i = 0; i < reemplazar.length; i++){
            if(newText.includes(reemplazar[i][1])){
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0])
            };
          };
          return newText;
     };
    } else{
        alert("No ha ingresado ningún texto")
    }
    repeat(desencriptar(texto));
})

btnCopiar.addEventListener("click", ()=>{
    let texto = msjInfo;
    navigator.clipboard.writeText(texto.value);

    msjInfo.innerHTML = "";

    guy.style.display = "block";
    msj.style.display = "block";
    btnCopiar.style.display = "none";
    cont2.classList.remove("action");
    msjInfo.classList.remove("action");
    textArea.focus();
})