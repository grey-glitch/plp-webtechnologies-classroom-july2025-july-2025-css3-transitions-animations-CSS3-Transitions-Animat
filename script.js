/* -----------------------
   PART 2: Functions + Scope
-------------------------- */

// Global variable
let globalMessage = "Animation triggered!";

// Function with parameter + return value
function multiplyByTwo(num) {
  return num * 2;
}

// Local scope example
function showScopeExample() {
  let localMessage = "I'm local!";
  console.log(localMessage); // Accessible here
  console.log(globalMessage); // Global also accessible
}
// Uncomment to test
// showScopeExample();

/* -----------------------
   PART 3: JS + CSS Animations
-------------------------- */
const animBox = document.getElementById("animBox");
const animateBtn = document.getElementById("animateBtn");

// Reusable function to toggle animation
function toggleAnimation(element, className) {
  element.classList.toggle(className);
  console.log(globalMessage, "Box width doubled is:", multiplyByTwo(element.offsetWidth));
}

// Event listener
animateBtn.addEventListener("click", () => {
  toggleAnimation(animBox, "animate");
});
