// Das <canvas>-Element aus dem HTML holen
const canvas = document.getElementById("c");

// 2D-Zeichenkontext vom Canvas holen (Context 2D)
const ctx = canvas.getContext("2d");

// Funktion zum Anpassen der Canvas-Größe an das Fenster
function resize() {
  // Device Pixel Ratio (wichtig für scharfe Darstellung auf Retina-Displays)
  const dpr = window.devicePixelRatio || 1;

  // Tatsächliche interne Auflösung des Canvas
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);

  // Sichtbare Größe des Canvas (CSS-Pixel)
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  // Koordinatensystem so skalieren,
  // dass wir weiterhin mit normalen CSS-Pixeln arbeiten können
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

// Wenn das Fenster seine Größe ändert → Canvas neu anpassen
window.addEventListener("resize", resize);

// Einmal initial aufrufen
resize();

// Objekt, das den aktuellen Pointer-Zustand speichert
const pointer = {
  // x-Position des Pointers
  x: window.innerWidth / 2,

  // y-Position des Pointers
  y: window.innerHeight / 2,

  // true = Pointer gedrückt, false = losgelassen
  down: false
};

// Wird ausgelöst, wenn der Pointer (Maus / Touch / Stift) gedrückt wird
canvas.addEventListener("pointerdown", (e) => {
  // Merken: Pointer ist gedrückt
  pointer.down = true;

  // Pointer-Position aus dem Event übernehmen
  pointer.x = e.clientX;
  pointer.y = e.clientY;

  // Pointer an das Canvas "binden" (wichtig für Touch)
  canvas.setPointerCapture(e.pointerId);
});

// Wird ausgelöst, wenn sich der Pointer bewegt
canvas.addEventListener("pointermove", (e) => {
  // Pointer-Position aktualisieren
  pointer.x = e.clientX;
  pointer.y = e.clientY;
});

// Wird ausgelöst, wenn der Pointer losgelassen wird
canvas.addEventListener("pointerup", (e) => {
  // Merken: Pointer ist nicht mehr gedrückt
  pointer.down = false;

  // Pointer wieder freigeben
  canvas.releasePointerCapture(e.pointerId);
});

// Objekt für den Ball
const ball = {
  // Startposition x (am Pointer)
  x: pointer.x,

  // Startposition y (am Pointer)
  y: pointer.y,

  // Radius des Balls
  r: 25
};

// Die Animationsfunktion (läuft jedes Frame)
function animate() {
  // Halbtransparenter Hintergrund,
  // erzeugt einen "Trail"-Effekt
  ctx.fillStyle = "rgba(17, 17, 17, 0.25)";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  // Geschwindigkeit:
  // schneller, wenn Pointer gedrückt ist
  const speed = pointer.down ? 0.2 : 0.08;

  // Ball bewegt sich sanft Richtung Pointer (Interpolation)
  ball.x += (pointer.x - ball.x) * speed;
  ball.y += (pointer.y - ball.y) * speed;

  // Neuen Pfad beginnen (für den Ball)
  ctx.beginPath();

  // Kreis zeichnen (Ball)
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);

  // Farbe abhängig vom Pointer-Zustand
  ctx.fillStyle = pointer.down ? "#ff4d6d" : "#4dabf7";

  // Kreis füllen
  ctx.fill();

  // Neuer Pfad für den kleinen Ring um den Pointer
  ctx.beginPath();

  // Kleiner Kreis an der Pointer-Position
  ctx.arc(pointer.x, pointer.y, 10, 0, Math.PI * 2);

  // Linienfarbe für den Ring
  ctx.strokeStyle = "rgba(255,255,255,0.6)";

  // Linienstärke
  ctx.lineWidth = 2;

  // Ring zeichnen
  ctx.stroke();

  // Nächstes Frame anfordern (Endlosschleife)
  requestAnimationFrame(animate);
}

// Animation starten
requestAnimationFrame(animate);
