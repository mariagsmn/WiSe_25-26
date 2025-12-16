document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.querySelector('#startBtn');
    const marker = document.querySelector('#marker');
    let buttonShown = false;

    // Marker erkannt → Button sichtbar machen
    marker.addEventListener('markerFound', () => {
        if (!buttonShown) {
            startBtn.setAttribute('visible', 'true'); // Button erscheint
            buttonShown = true; // bleibt danach sichtbar
        }
    });

    // Klick-Event für Button
    startBtn.addEventListener('click', () => {
        alert("🎉 Start gedrückt! → Als nächstes: Eier auswählen!");
        // Optional: Button ausblenden
        // startBtn.setAttribute('visible', 'false');
    });

});



