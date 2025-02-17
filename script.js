//your JS code here. If required.
// Variables to hold references to audio, video, and time display
let audio = document.getElementById("meditation-audio");
let video = document.getElementById("meditation-video");
let timeDisplay = document.getElementById("time-display");
let timer;
let timeLeft = 10 * 60;  // Default 10 minutes in seconds

// Function to switch the audio and video based on selection
function switchSound(type) {
    if (type === 'beach') {
        audio.src = "Sounds/beach.mp3";
        video.src = "video/beach.mp4";
    } else if (type === 'rain') {
        audio.src = "Sounds/rain.mp3";
        video.src = "video/rain.mp4";
    }
    audio.play();
    video.play();
}

// Function to handle time selection
function selectTime(minutes) {
    timeLeft = minutes * 60;  // Convert minutes to seconds
    updateTimeDisplay();
    startTimer();
}

// Function to update the time display on the screen
function updateTimeDisplay() {
    let mins = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;
    timeDisplay.textContent = `${mins}:${secs < 10 ? '0' + secs : secs}`;
}

// Timer function to countdown the time
function startTimer() {
    if (timer) clearInterval(timer); // Clear any existing timers
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimeDisplay();
        } else {
            clearInterval(timer);
            alert('Meditation time is over!');
        }
    }, 1000);
}

// Function to toggle play/pause of audio and video
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        video.play();
    } else {
        audio.pause();
        video.pause();
    }
}
