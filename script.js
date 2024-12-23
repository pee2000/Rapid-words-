const words = [
    // Biblical Words
    "Abraham", "Moses", "Jesus", "Paul", "David", "Solomon", "Genesis", "Exodus",
    "Revelation", "Faith", "Grace", "Salvation", "Prayer", "Worship", "Heaven",
    "Resurrection", "Messiah", "Prophet", "Judah", "Righteousness", "Covenant",

    // Conversational Words
    "Hello", "Welcome", "Goodbye", "Thanks", "Please", "Friend", "Love", "Joy",

    // Psychology Words
    "Behavior", "Cognition", "Emotion", "Perception", "Memory", "Learning",
    "Personality", "Therapy", "Stress", "Motivation", "Consciousness", "Mindset",

    // Communication Words
    "Message", "Media", "Signal", "Dialogue", "Feedback", "Conversation", "Language",

    // Science Words
    "Atom", "Molecule", "Physics", "Chemistry", "Biology", "Energy", "Galaxy",

    // Music Words
    "Melody", "Harmony", "Rhythm", "Chord", "Note", "Scale", "Tempo", "Pitch",

    // History Words
    "Empire", "Revolution", "War", "Dynasty", "Civilization", "Treaty", "Victory"
];

let currentWord = "";
let score = 0;
let time = 15; // seconds
let isPlaying = false;

const wordDisplay = document.getElementById("word-display");
const wordInput = document.getElementById("word-input");
const timer = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", startGame);

function startGame() {
    score = 0;
    time = 15;
    isPlaying = true;
    wordInput.value = "";
    wordInput.focus();
    message.textContent = "";
    scoreDisplay.textContent = "Score: 0";
    showWord();
    const countdownInterval = setInterval(() => {
        if (time > 0) {
            time--;
        } else {
            clearInterval(countdownInterval);
            isPlaying = false;
            message.textContent = "Game Over!";
        }
        timer.textContent = `Time: ${time}s`;
    }, 1000);
}

function showWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    wordDisplay.textContent = currentWord;
}

wordInput.addEventListener("input", () => {
    if (wordInput.value.toLowerCase() === currentWord.toLowerCase()) {
        message.textContent = "Correct!";
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        wordInput.value = "";
        showWord();
        time += 2; // Add 2 seconds for each correct answer
    }
});
