let modeSombre = false;

function changeModeSombre(){
    if(modeSombre) {
        // Si le mode lumière n'est pas activé le m'être en mode lumière
        modeSombre = false;
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--background-color", "#f1dce7");
        document.getElementById("mode-sombre-lumiere").innerHTML = "Mode Sombre"
    }
    else{
        // Si le mode sombre n'est pas activé, le m'être en mode sombre
        modeSombre = true;
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--background-color", "black");
        document.getElementById("mode-sombre-lumiere").innerHTML = "Mode Lumière"
    }
}