var btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    var avanceX = parseFloat(document.getElementById("x").value);
    var avanceY = parseFloat(document.getElementById("y").value);
        
    var pendiente = avanceY / avanceX;
        
    var dataAvanceX = parseFloat(document.getElementById("xCalc").value);
    var dataAvanceY = parseFloat(document.getElementById("yCalc").value);
    
    if (dataAvanceX == null) {
        var rAvanceX = dataAvanceY / pendiente;
        var texto = document.getElementById("parrafo");
        texto.innerText = "Cada " +rAvanceX+ " metros debe bajar " +dataAvanceY+ " metros.";
    } else {
        var rAvanceY = pendiente * dataAvanceX;
        var texto = document.getElementById("parrafo");
        texto.innerText = "Cada " +dataAvanceX+ " metros debe bajar " +rAvanceY+ " metros.";
    }

    var resultados = document.getElementById("mostrar");
    resultados.style = "display:block";
})