function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Typing effect
const text =
  "I love you because you make my ordinary days special. You are my safe place, my favorite person, and my forever ❤️";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i++);
    setTimeout(typeEffect, 50);
  }
}
window.onload = typeEffect;

// Popup
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");

function wrongAnswer() {
  popupText.innerHTML = "WRONG 😤 Try again… carefully 😈";
  popup.style.display = "flex";
}

function correctAnswer() {
  popupText.innerHTML = "Correct 😌❤️ You know me well.";
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}

// NO button runs
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", moveButton);

function moveButton() {
  noBtn.style.left = Math.random() * 250 + "px";
  noBtn.style.top = Math.random() * 80 + "px";
}

// YES clicked
function yesClicked() {
  document.getElementById("finalMessage").innerHTML =
    "YAYYY 😭💘 I knew it! I love you so much ❤️ Always. Forever. Only you.";
  document.querySelector(".buttons").style.display = "none";
  launchConfetti();
}

// Floating hearts
const heartsContainer = document.querySelector(".hearts-container");
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  heartsContainer.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 300);

// Confetti
const confettiContainer = document.querySelector(".confetti-container");
const colors = ["#ff4d6d", "#ffc0cb", "#ff69b4"];

function launchConfetti() {
  for (let i = 0; i < 150; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    confettiContainer.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}
