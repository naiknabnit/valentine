const message = "Will you be my valentine muchiii? 💖";
const typedText = document.getElementById("typedText");
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const mainContent = document.getElementById("mainContent");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const fireworksContainer = document.getElementById("fireworks");

// Start Reveal
startBtn.onclick = () => {
    startScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");
    typeWriter();
};

// Typing Effect
let index = 0;
function typeWriter() {
    if (index < message.length) {
        typedText.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// YES click = fireworks + message
yesBtn.onclick = () => {
    typedText.innerHTML = "YAYYYY 😍💖 You made my day!!!";
    createFireworks();
};

// Moving NO button
noBtn.onmouseover = () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
};

// Petals + Hearts generator
for (let i = 0; i < 40; i++) {
    let petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "🌸";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (Math.random() * 5 + 5) + "s";
    document.body.appendChild(petal);
}

for (let i = 0; i < 30; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
    document.body.appendChild(heart);
}

// Fireworks
function createFireworks() {
    for (let i = 0; i < 30; i++) {
        let firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 100 + "vh";
        fireworksContainer.appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
    }
}
