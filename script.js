const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const mainContent = document.getElementById("mainContent");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

startBtn.onclick = () => {
    startScreen.style.display = "none";
    mainContent.classList.remove("hidden");
};

yesBtn.onclick = () => {
    alert("Yayyyyy 😍💖 I knew it!");
};

noBtn.onmouseover = () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
};

// Petals
for (let i = 0; i < 30; i++) {
    let petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "🌸";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (Math.random() * 5 + 5) + "s";
    document.body.appendChild(petal);
}

// Hearts
for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
    document.body.appendChild(heart);
}

