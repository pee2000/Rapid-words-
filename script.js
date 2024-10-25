const words = [
    "apple", "banana", "computer", "elephant", "soccer", "gravity", "hello", "please", "thank", "goodbye"
];

let score = 0;
let time = 15;
let timer;
let currentWord;

const wordDisplay = document.getElementById("word-display");
const wordInput = document.getElementById("word-input");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const messageDisplay = document.getElementById("message");
const startButton = document.getElementById("start-button");

const backgroundMusic = document.getElementById("background-music");

// Play music only after user interaction
backgroundMusic.addEventListener('canplaythrough', () => {
    console.log("Background music is ready to play.");
    backgroundMusic.volume = 0.5;
});
backgroundMusic.addEventListener('error', (e) => {
    console.error("Error loading background music:", e);
});

startButton.addEventListener("click", startGame);
wordInput.addEventListener("input", checkInput);

function startGame() {
    if (backgroundMusic.paused) backgroundMusic.play().catch(e => console.log("Autoplay error:", e));
    score = 0;
    time = 15;
    wordInput.value = "";
    wordInput.disabled = false;
    startButton.disabled = true;
    messageDisplay.textContent = "";
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time: ${time}s`;

    nextWord();
    startTimer();
}

function nextWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    let hintWord = currentWord.split('');
    let randomIndex = Math.floor(Math.random() * hintWord.length);
    hintWord[randomIndex] = '_';
    wordDisplay.textContent = hintWord.join('');
}

function checkInput() {
    if (wordInput.value.toLowerCase() === currentWord.toLowerCase()) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        wordInput.value = "";
        nextWord();
        resetTimer();
    }
}

function startTimer() {
    timer = setInterval(() => {
        time--;
        timerDisplay.textContent = `Time: ${time}s`;
        if (time === 0) {
            endGame();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    time = 15;
    timerDisplay.textContent = `Time: ${time}s`;
    startTimer();
}

function endGame() {
    clearInterval(timer);
    wordInput.disabled = true;
    startButton.disabled = false;
    messageDisplay.textContent = `Game Over! Your score is ${score}.`;
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reset music to start
}
