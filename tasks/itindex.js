const startingHours = 2;
let time = startingHours * 3600;
let notificationDisplayed = false; // Flag to check if notification has been displayed
let countdownEl;
let countdownTimer;
let audio;

function updateCountdown() {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  const timeString = `${hours} : ${
    minutes < 10 ? "0" + minutes : minutes
  } : ${seconds}`;
  document.title = timeString;
  countdownEl.innerHTML = timeString;

  if (time > 0) {
    time--;
  } else {
    clearInterval(countdownTimer); // Stop the timer
    audio = new Audio("alarm.mp3");
    audio.play();
    if (!notificationDisplayed) {
      alert("Time's up!"); // Show the notification
      notificationDisplayed = true; // Set the flag to true to prevent further notifications
    }
  }
}

window.onload = function () {
  countdownEl = document.getElementById("countdown");
  updateCountdown();
  countdownTimer = setInterval(updateCountdown, 1000);
};

// Alert when leaving the page
window.addEventListener("beforeunload", function (event) {
  // Cancel the event
  event.preventDefault();

  // Display confirmation
  return "Are you sure you want to leave? Your countdown will be lost.";
});
