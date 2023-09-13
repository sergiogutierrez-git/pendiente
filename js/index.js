var btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    var avanceX = parseFloat(document.getElementById("x").value);
    var avanceY = parseFloat(document.getElementById("y").value);

    var texto = document.getElementById("parrafo");
        
    var pendiente = avanceY / avanceX;
        
    var dataAvanceX = parseFloat(document.getElementById("xCalc").value);
    var dataAvanceY = parseFloat(document.getElementById("yCalc").value);

    if (document.getElementById("xCalc").value == "") {
        faltaX(pendiente, dataAvanceY,texto);
    } else {
        faltaY(pendiente, dataAvanceX,texto);
    }
    
    var resultados = document.getElementById("mostrar");
    resultados.style = "display:block";
})

function faltaX (pendiente,y,texto) {
    var datoY = y;
    var datoX = y / pendiente;
    texto.innerText = "Cada " +datoX+ " metros debe bajar " +datoY+ " metros.";
}

function faltaY (pendiente,x,texto) {
    var datoX = x;
    var datoY = pendiente * datoX;
    texto.innerText = "Cada " +datoX+ " metros debe bajar " +datoY+ " metros.";
}