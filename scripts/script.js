// JavaScript Document
var zoek = document.querySelector("input[type=search]");

zoek.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        if (zoek.value === "ssx3" || zoek.value === "ssx 3" || zoek.value === "SSX3" || zoek.value === "SSX 3") {
            window.location.href = "detail.html";
        } else {
            console.log("boe");
            document.getElementsByName('search')[0].placeholder='Spel niet gevonden. Probeer opnieuw';
        }
    }
});