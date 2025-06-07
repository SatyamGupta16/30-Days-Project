const display = document.getElementById("display");
const greeting = document.getElementById("greeting");
const clock = document.getElementById("clock");
const themeToggle = document.getElementById("theme-toggle");

// Ask user's name when they open the site
let userName = prompt("Hi there! What's your name?");
if (!userName || userName.trim() === "") {
  userName = "User";
}

// Time-based greeting
function updateGreeting() {
  const hour = new Date().getHours();
  let greetingText = "";

  if (hour < 12) {
    greetingText = "Good Morning";
  } else if (hour < 17) {
    greetingText = "Good Afternoon";
  } else {
    greetingText = "Good Evening";
  }

  greeting.textContent = `${greetingText}, ${userName}! 👋`;
}

// Live clock
function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

// Initial run
setInterval(updateClock, 1000);
updateGreeting();
updateClock();

// Calculator functions
function append(character) {
  if (display.innerText === "0" && character !== ".") {
    display.innerText = character;
  } else {
    display.innerText += character;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  if (display.innerText.length <= 1) {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    let result = eval(display.innerText.replace(/÷/g, "/").replace(/×/g, "*"));
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  themeToggle.textContent = document.body.classList.contains("light-theme")
    ? "☀️ Light"
    : "🌙 Dark";
});
