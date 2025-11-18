AFRAME.registerComponent('face-camera', {
  tick: function () {
    const camera = document.querySelector('[camera]');
    if (camera) {
      this.el.object3D.lookAt(camera.object3D.position);
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const snowflow = document.getElementById("snow");
  const flakeCount = 150;   
  const radius = 4;         

  
  if (!snowflow) {
    console.warn("Kein Element mit ID 'snowflow' gefunden!");
    return;
  }

  for (let i = 0; i < flakeCount; i++) {
    const flake = document.createElement("a-plane");
    flake.setAttribute("width", "0.1");
    flake.setAttribute("height", "0.1");
    flake.setAttribute("material", "src: assets/schneeflocke.png; transparent: true;");
    flake.setAttribute("face-camera", "");

    const x = (Math.random() - 0.5) * radius * 2;
    const z = (Math.random() - 0.5) * radius * 2;
    const y = Math.random() * 3 + 1;
    flake.setAttribute("position", `${x} ${y} ${z}`);

    const duration = 3000 + Math.random() * 4000;
    flake.setAttribute(
      "animation__fall",
      `property: position; to: ${x} -0.5 ${z}; dur: ${duration}; easing: linear; loop: true; dir: alternate;`
    );

    snowflow.appendChild(flake);
  }
});
