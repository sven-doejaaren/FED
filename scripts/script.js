// JavaScript Document
var zoek = document.querySelector("input[type=search]");

zoek.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        if (zoek.value === "ssx3") {
            window.location.href = "detail.html";
        } else {
            console.log("boe");
            // micro-interactie "Spel niet gevonden" tekst oid
        }
    }
});