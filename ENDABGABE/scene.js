document.addEventListener('DOMContentLoaded', () => {
  const marker = document.querySelector('#marker');
  const startBtn = document.querySelector('#startBtn');
  let buttonShown = false;

  // Marker erkannt → Button sichtbar & klickbar
  marker.addEventListener('markerFound', () => {
    if (!buttonShown) {
      startBtn.setAttribute('visible', 'true');
      startBtn.classList.add('clickable'); // jetzt klickbar
      buttonShown = true;
    }
  });

  // Marker verloren → Button unsichtbar & nicht klickbar
  marker.addEventListener('markerLost', () => {
    startBtn.setAttribute('visible', 'false');
    startBtn.classList.remove('clickable');
  });

  // Klick-Event für Button (nur bei echtem Touch/Click)
  startBtn.addEventListener('click', (evt) => {
    if (evt.type === 'click' || evt.type === 'touchstart') {
      alert("🎉 Start gedrückt! → Als nächstes: Eier auswählen!");
    }
  });
});






