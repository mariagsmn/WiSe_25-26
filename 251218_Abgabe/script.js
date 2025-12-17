// Canvas und Kontext
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Canvas-Größe
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ball-Position
let x = canvas.width / 2;
let y = canvas.height / 2;

// Ball-Zustand
let falling = false; // fällt der Ball?
let velocity = 0;    // Fallgeschwindigkeit
const gravity = 0.5; // Schwerkraft

// Mausbewegung → Ball folgt NUR wenn er nicht fällt
canvas.addEventListener("pointermove", (e) => {
  if (!falling) {
    x = e.clientX;
    y = e.clientY;
  }
});

// Klick → Ball fällt los
canvas.addEventListener("pointerdown", () => {
  falling = true;
});

// Animationsloop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Falls der Ball fällt
  if (falling) {
    velocity += gravity; // schneller werden
    y += velocity;       // nach unten bewegen
  }

  // Ball zeichnen
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = "lightblue";
  ctx.fill();

  requestAnimationFrame(animate);
}

// Start
animate();
