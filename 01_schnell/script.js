const titleContainer = document.getElementById('title-container');
const canvas = document.getElementById('IDcanvas');
const context = canvas.getContext('2d');

window.addEventListener('resize', updateCanvasSize);
updateCanvasSize();

/* canvas */
function updateCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    context.fillStyle = "rgba (255, 0, 0, 0.5";
    context.strokeStyle = "rgba (255, 0, 0, 0.5";
    context.lineWidth = 3;

    for (let i = 0; i < 10; i++) {
        context.beginPath();

        const r = (Math.random() * 256);
        const g = (Math.random() * 256);
        const b = (Math.random() * 256);

        context.fillStyle = 
        context.strokeStyle = 

        const x = Math.random() * 1000;
        const y = Math.random() * 1000;
        context.moveTo(x, y);
        context.arc(x, y, 100, 0.1 * Math.PI, 1.9 * Math.PI);
        context.lineTo(x, y);

        context.fill();
        context.stroke();
    }
}
