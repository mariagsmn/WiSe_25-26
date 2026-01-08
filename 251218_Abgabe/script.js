// Canvas und Kontext
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Audio für Bouncing
const bounceSound = new Audio("bouncing-sound-single.mp3");

// Audio für Mausklick
const mouseclick = new Audio("mouse-click.mp3");

// Canvas-Größe
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const radius = 20;   // Ball als Konstante

// Ball-Position
let x = canvas.width / 2;
let y = canvas.height / 2;

// Ball-Zustand
let falling = false;
let velocity = 0;
const gravity = 0.5;

// Variable für das Absprung
let bounceCount = 0;          // Zählt wie oft der Ball noch springen soll
const maxBounces = 3;         // Maximale Anzahl der Sprünge
const bounceReduction = 0.7;  // Jeder Sprung ist 70% so hoch wie der vorherige

// Mausbewegung → Ball folgt nur wenn er nicht fällt
canvas.addEventListener("pointermove", (e) => {
  if (!falling) {
    x = e.clientX;
    y = e.clientY;
  }
});

// Wenn Klick dann: Ball fällt los bzw. hört auf zu fallen
canvas.addEventListener("pointerdown", () => {
  // Click-Sound abspielen
  mouseclick.currentTime = 0;
  mouseclick.play();
  
  falling = !falling;
});

// Animationsloop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (falling) {
    velocity += gravity;
    y += velocity;

    // Boden-Kollision => Ball springt nach oben
    if (y + radius > canvas.height) {
      y = canvas.height - radius;
      bounceCount++;
      
      // Sound abspielen beim ersten Bounce
      if (bounceCount === 1) {
        bounceSound.currentTime = 0;  // Sound von Anfang an abspielen
        bounceSound.play();
      }
      
      // Wenn noch Sprünge übrig sind: Ball springt mit reduzierter Kraft
      if (bounceCount < maxBounces) {
        velocity = -8 * Math.pow(bounceReduction, bounceCount);
      } else {
        // Wenn keine Sprünge mehr dann bleibt Ball  liegen und geht wieder zur Maus 
        velocity = 0;
        falling = false;
        bounceCount = 0;
      }
    }
  }

  // Ball zeichnen
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "lightblue";
  ctx.fill();

  requestAnimationFrame(animate);
}

animate();
