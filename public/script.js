var kucuk = true;
function kucult() {
    if (kucuk == false) {
        document.getElementById("navigator").style.minWidth = "0vw";
        document.getElementById("icons").style.visibility = "hidden";
        
        document.getElementById("butt").textContent = "→";
        document.getElementById("butt").style.float = "left";
      
        kucuk = true;
    }
    else
    {
        document.getElementById("navigator").style.minWidth = "5vw";
        document.getElementById("icons").style.visibility = "visible";
     
        document.getElementById("butt").textContent = "←";
        document.getElementById("butt").style.float = "right";
       
        kucuk = false;
    }
}
