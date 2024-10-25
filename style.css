const words = [
    // Fruits
    "apple", "banana", "orange", "grape", "pineapple", "strawberry", "melon", "kiwi", "mango",
    
    // Technology
    "computer", "algorithm", "database", "keyboard", "software", "hardware", "internet", "encryption", "network",

    // Animals
    "elephant", "giraffe", "tiger", "kangaroo", "dolphin", "penguin", "zebra", "lion", "panda",

    // Sports
    "soccer", "basketball", "tennis", "cricket", "baseball", "volleyball", "swimming", "boxing", "cycling",

    // Science
    "gravity", "atom", "molecule", "photosynthesis", "evolution", "magnetism", "electricity", "nucleus", "protein",

    // Conversational Words
    "hello", "please", "thank", "sorry", "yes", "no", "maybe", "goodbye", "happy", "morning", "night", "friend", 
    "family", "love", "help", "wait", "stop", "go", "why", "because", "always", "never", "soon", "yesterday", "tomorrow"
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

startButton.addEventListener("click", startGame);
wordInput.addEventListener("input", checkInput);

function startGame() {
    backgroundMusic.play();  // Play background music
    backgroundMusic.volume = 0.5;  // Set volume to 50%
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

    // Remove one letter from the current word for the hint
    let hintWord = currentWord.split('');
    let randomIndex = Math.floor(Math.random() * hintWord.length);
    hintWord[randomIndex] = '_';  // Replace one letter with an underscore
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
    backgroundMusic.pause();  // Stop background music
}
