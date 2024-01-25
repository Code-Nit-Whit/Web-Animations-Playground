// Include anime.js library
const anime = require("animejs");

// Key variables (change IDs to match your SVG elements)
const ctrlKey = document.getElementById("ctrl-key-group");
const altKey = document.getElementById("alt-key-group");
const delKey = document.getElementById("del-key-group");
const serverEmbed = document.getElementById("server-embed");

let ctrlKeyState = "unpressed";
let altKeyState = "unpressed";
let delKeyState = "unpressed";

// Click event listeners for each key
ctrlKey.addEventListener("click", handleKeyClick);
altKey.addEventListener("click", handleKeyClick);
delKey.addEventListener("click", handleKeyClick);

// Function to handle key clicks
function handleKeyClick(event) {
  const clickedKey = event.target;

  // Determine animation based on key state
  if (clickedKey === ctrlKey) {
    if (ctrlKeyState === "unpressed") {
      animatePress(ctrlKey);
    } else {
      animateUnpress(ctrlKey);
    }
    ctrlKeyState = ctrlKeyState === "unpressed" ? "pressed" : "unpressed";
  } else if (clickedKey === altKey) {
    if (altKeyState === "unpressed") {
        animatePress(altKey);
      } else {
        animateUnpress(altKey);
      }
      altKeyState = ctrlKeyState === "unpressed" ? "pressed" : "unpressed";
  } else if (clickedKey === delKey) {
    if (delKeyState === "unpressed") {
        animatePress(delKey);
      } else {
        animateUnpress(delKey);
      }
      delKeyState = ctrlKeyState === "unpressed" ? "pressed" : "unpressed";
  }

  // Check if all keys are pressed
  if (ctrlKeyState === "pressed" && altKeyState === "pressed" && delKeyState === "pressed") {
    setTimeout(() => {
      serverEmbed.style.visibility = "visible";
      animateRelease(ctrlKey, altKey, delKey);
    }, 1500); // Delay for 1500 milliseconds (1.5 seconds)
  }  
}

// Placeholder animation functions (replace with your actual animations)
function animatePress(key) {
  anime({
    targets: key,
    // ... (animation properties for pressing)
  });
}

function animateUnpress(key) {
  anime({
    targets: key,
    // ... (animation properties for unpressing)
  });
}

function animateRelease(ctrlKey, altKey, delKey) {
  anime({
    targets: [ctrlKey, altKey, delKey],
    // ... (animation properties for releasing all keys)
  });
}
