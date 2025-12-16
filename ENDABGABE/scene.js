document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.querySelector("#startBtn");

    // Button wird nur auslösbar, wenn man drauf tippt
    startBtn.addEventListener("click", () => {
        alert("🎉 Start gedrückt! → Als nächstes: Eier anzeigen!");

        // Später: Button ausblenden und Eier laden
        // startBtn.setAttribute("visible", "false");
    });

});

const marker = document.querySelector('#marker');
const startBtn = document.querySelector('#startBtn');

let buttonShown = false;

// Event: Marker erkannt
marker.addEventListener('markerFound', () => {
    if (!buttonShown) {
        startBtn.setAttribute('visible', 'true'); // Button erscheint
        buttonShown = true; // Flag: einmal gezeigt → bleibt sichtbar
    }
});

// Klick-Event für Button
startBtn.addEventListener('click', () => {
    alert("🎉 Start gedrückt! → Als nächstes: Eier auswählen!");
    // Optional: Button ausblenden
    // startBtn.setAttribute('visible', 'false');
});

