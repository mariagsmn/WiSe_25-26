document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.querySelector("#startBtn");

    // Button wird nur auslösbar, wenn man drauf tippt
    startBtn.addEventListener("click", () => {
        alert("🎉 Start gedrückt! → Als nächstes: Eier anzeigen!");

        // Später: Button ausblenden und Eier laden
        // startBtn.setAttribute("visible", "false");
    });

});


    AFRAME.registerComponent('start-button', {
      init: function () {
        this.el.addEventListener('click', () => {
          alert("🎉 Start gedrückt! → Als nächstes: Eier auswählen!");
          // Später: Button ausblenden und Eier anzeigen
          // this.el.setAttribute('visible', 'false');
        });
      }
    });

    document.querySelector('#startBtn').setAttribute('start-button', '');
