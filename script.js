// Random programmer jokes
const JOKES = [
  "Why do Java developers often wear glasses? They can't C#.",
  "A SQL query walks into a bar, goes up to two tables and says \"can I join you?\"",
  "Wasn't hard to crack Forrest Gump's password. 1forrest1.",
  "I love pressing the F5 key. It's refreshing.",
  "Called IT support and a chap from Australia came to fix my network connection. I asked \"Do you come from a LAN down under?\"",
  "There are 10 types of people in the world. Those who understand binary and those who don't.",
  "Why are assembly programmers often wet? They work below C level.",
  "My favourite computer based band is the Black IPs.",
  "What programme do you use to predict the music tastes of former US presidential candidates? An Al Gore Rhythm.",
  "An SEO expert walked into a bar, pub, inn, tavern, hostelry, public house.",
];

/** Display a random joke */
function showRandomJoke() {
  const display = document.getElementById("joke-display");
  if (!display) return;
  const index = Math.floor(Math.random() * JOKES.length);
  display.textContent = JOKES[index];
}

// --- Counter ---
let counterValue = 0;

function updateCounterDisplay() {
  const el = document.getElementById("counter-value");
  if (el) el.textContent = String(counterValue);
}

// --- Init ---
document.addEventListener("DOMContentLoaded", () => {
  // Joke button
  const jokeBtn = document.getElementById("joke-btn");
  if (jokeBtn) {
    jokeBtn.addEventListener("click", showRandomJoke);
  }

  // Counter buttons
  const decBtn = document.getElementById("counter-dec");
  const incBtn = document.getElementById("counter-inc");
  if (decBtn) {
    decBtn.addEventListener("click", () => {
      counterValue -= 1;
      updateCounterDisplay();
    });
  }
  if (incBtn) {
    incBtn.addEventListener("click", () => {
      counterValue += 1;
      updateCounterDisplay();
    });
  }
});