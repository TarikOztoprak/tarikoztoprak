var kucuk = false;
function kucult() {
    if (kucuk == false) {
        document.getElementById("navigator").style.minWidth = "0vw";
        document.getElementById("icons").style.visibility = "hidden";
        document.getElementById("navigator").style.background = "#dddddd";
        document.getElementById("butt").textContent = "→";
        document.getElementById("butt").style.float = "left";
        document.getElementById("hidd").style.visibility = "hidden";
        kucuk = true;
    }
    else
    {
        document.getElementById("navigator").style.minWidth = "5vw";
        document.getElementById("icons").style.visibility = "visible";
        document.getElementById("navigator").style.background = "#dddddd";
        document.getElementById("butt").textContent = "←";
        document.getElementById("butt").style.float = "right";
        document.getElementById("hidd").style.visibility = "visible";
        kucuk = false;
    }
}
