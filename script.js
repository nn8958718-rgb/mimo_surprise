const blowButton = document.getElementById("blowButton");
const flameOne = document.getElementById("flameOne");
const flameTwo = document.getElementById("flameTwo");
const flowerScene = document.getElementById("flowerScene");
const cakeScene = document.getElementById("cakeScene");
const letterScene = document.getElementById("letterScene");
const heading = document.getElementById("heading");
const intro = document.getElementById("intro");

blowButton.addEventListener("click", () => {
  flameOne.classList.add("hidden");
  flameTwo.classList.add("hidden");
  heading.textContent = "Wish made, my love ♡";
  intro.textContent = "You did it!";
  cakeScene.classList.add("hidden");
  flowerScene.classList.remove("hidden");
});

document.getElementById("letterButton").addEventListener("click", () => {
  flowerScene.classList.add("hidden");
  letterScene.classList.remove("hidden");
});

document.getElementById("replayButton").addEventListener("click", () => {
  letterScene.classList.add("hidden");
  flowerScene.classList.add("hidden");
  cakeScene.classList.remove("hidden");
  flameOne.classList.remove("hidden");
  flameTwo.classList.remove("hidden");
  heading.textContent = "Make a wish, my love";
  intro.textContent = "Tap the candles to blow them out ✨";
});
