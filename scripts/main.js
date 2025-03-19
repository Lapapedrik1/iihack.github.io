// Matrix Rain Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
let matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
let drops = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops = Array(Math.floor(canvas.width/20)).fill(0);
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0f0';
    ctx.font = '18px monospace';

    drops.forEach((y, x) => {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, x * 20, y * 20);
        
        if(y * 20 > canvas.height || Math.random() > 0.975) {
            drops[x] = 0;
        }
        drops[x]++;
    });
}

// Hack Simulation
const terminal = document.querySelector('.hack-terminal');
const terminalContent = document.getElementById('terminal');
const progressFill = document.querySelector('.progress-fill');

async function simulateHack() {
    const steps = [
        {text: 'Initializing neural interface...', delay: 1000},
        {text: 'Bypassing firewall...', delay: 1500},
        {text: 'Accessing mainframe...', delay: 2000},
        {text: 'Decrypting security layers...', delay: 2500},
        {text: 'Injecting payload...', delay: 3000},
        {text: 'System compromised!', delay: 500}
    ];

    terminal.style.height = '400px';
    terminal.style.opacity = '1';

    for(let i = 0; i < steps.length; i++) {
        const step = steps[i];
        const line = document.createElement('div');
        line.className = 'glitch';
        line.textContent = `> ${step.text}`;
        line.setAttribute('data-text', `> ${step.text}`);
        terminalContent.appendChild(line);
        
        progressFill.style.width = `${(i+1)/steps.length*100}%`;
        
        // Sound effect
        if(i < steps.length - 1) {
            document.getElementById('hackSound').play();
        }
        
        await new Promise(resolve => setTimeout(resolve, step.delay));
    }
    
    document.getElementById('clickSound').play();
    progressFill.style.background = '#f00';
    terminalContent.innerHTML += '<div class="glitch" data-text="*** SYSTEM HACKED ***">*** SYSTEM HACKED ***</div>';
}

// Event Listeners
document.getElementById('hackButton').addEventListener('click', () => {
    document.getElementById('clickSound').play();
    document.querySelector('.cyber-button').style.display = 'none';
    simulateHack();
});

document.querySelector('.cyber-button').addEventListener('mouseenter', () => {
    document.getElementById('hoverSound').play();
});

// Init
resizeCanvas();
setInterval(drawMatrix, 50);
