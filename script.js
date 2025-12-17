const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');
const cursor = document.querySelector('.cursor');

// Resize Canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Rain Variables
const characters = 'SAYANTH0101';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawRain() {
    ctx.fillStyle = 'rgba(5, 5, 5, 0.1)'; // Trail effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ff003c'; // Neon Red
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Custom Cursor Movement
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Animate
setInterval(drawRain, 35);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});