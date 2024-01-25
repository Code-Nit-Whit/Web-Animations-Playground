// Include anime.js library
const anime = require("animejs");

// Key variables (replace with your actual element IDs)
const ctrlKey = document.getElementById("ctrl-key-group");
const altKey = document.getElementById("alt-key-group");
const delKey = document.getElementById("del-key-group");

// Placeholder animation functions (replace with your actual animations)
function animatePress(key) {
    anime({
      targets: key,
      // ... (animation properties for pressing)
    });
}

function animateRelease(ctrlKey, altKey, delKey) {
    anime({
      targets: [ctrlKey, altKey, delKey],
      // ... (animation properties for releasing all keys)
    });
}

// Function to sequence the animations
function animateKeys() {
  anime({
    targets: ctrlKey,
    animatePress(ctrlKey);
  }).finished.then(() => {
    anime.timeline({ delay: 500 }).add({
      targets: altKey,
      animatePress(altKey);
    }).finished.then(() => {
      anime.timeline({ delay: 500 }).add({
        targets: delKey,
        animatePress(delKey);
      }).finished.then(() => {
        anime.timeline({ delay: 1000 }).add({
          targets: [ctrlKey, altKey, delKey],
          animateRelease();
        }).finished.then(() => {
          animateKeys(); // Loop the animation
        });
      });
    });
  });
}

// Start the animation on SVG load
document.addEventListener("DOMContentLoaded", animateKeys);
