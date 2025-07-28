let hunger = 80;
let energy = 70;
let happiness = 75;

function updateStats() {
  document.getElementById("hungerFill").style.width = hunger + "%";
  document.getElementById("energyFill").style.width = energy + "%";
  document.getElementById("happinessFill").style.width = happiness + "%";

  let mood = "😊 Happy";
  if (hunger < 30) mood = "🥺 Hungry";
  if (energy < 30) mood = "😴 Tired";
  if (happiness < 30) mood = "😢 Sad";

  document.getElementById("mood").textContent = "Mood: " + mood;
}

function feed() {
  hunger = Math.min(100, hunger + 20);
  energy = Math.max(0, energy - 5);
  updateStats();
}

function play() {
  happiness = Math.min(100, happiness + 20);
  energy = Math.max(0, energy - 15);
  hunger = Math.max(0, hunger - 10);
  updateStats();
}

function sleep() {
  energy = Math.min(100, energy + 25);
  hunger = Math.max(0, hunger - 10);
  updateStats();
}

// Auto decrease stats
setInterval(() => {
  hunger = Math.max(0, hunger - 2);
  energy = Math.max(0, energy - 1);
  happiness = Math.max(0, happiness - 1);
  updateStats();
}, 3000);

updateStats(); // initial update
