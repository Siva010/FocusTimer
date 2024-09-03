const startingMinutes = 0.1;
let time = startingMinutes * 60;
let notificationDisplayed = false;
let audio;
const countdownEl = document.getElementById("countdown");

const countdownTimer = setInterval(updateCountdown, 1000);
function notifyme() {
  if (!notificationDisplayed) {
    alert("Time's up!");
  }
  // Show the notification
  notificationDisplayed = true; // Set the flag to true to prevent further notifications
}

function playsound() {
  audio = new Audio("alarm.mp3");
  audio.play();
}

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.title = `${minutes} : ${seconds}`;
  countdownEl.innerHTML = `${minutes} : ${seconds}`;
  // Update the title with the countdown

  if (time > 0) {
    time--;
  } else {
    playsound();
  }
}

// Alert when leaving the page
window.addEventListener("beforeunload", function (event) {
  // Cancel the event
  event.preventDefault();

  // Display confirmation
  return "Are you sure you want to leave? Your countdown will be lost.";
});

updateCountdown();
