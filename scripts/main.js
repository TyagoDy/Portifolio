const root = document.documentElement;


let targetX = window.innerWidth / 2; 
let targetY = window.innerHeight / 2;

// Where the glow CURRENTLY is
let currentX = window.innerWidth / 2;
let currentY = window.innerHeight / 2;

const ease = 0.08; 

document.addEventListener('pointermove', (event) => {
  targetX = event.clientX;
  targetY = event.clientY;
});

function animate() {

  currentX += (targetX - currentX) * ease;
  currentY += (targetY - currentY) * ease;


  root.style.setProperty('--mouse-x', `${currentX}px`);
  root.style.setProperty('--mouse-y', `${currentY}px`);

  requestAnimationFrame(animate);
}

animate();