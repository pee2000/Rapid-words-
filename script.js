const words = [
    // Biblical Words
    "Abraham", "Moses", "Jesus", "Paul", "David", "Solomon", "Genesis", "Exodus",
    "Revelation", "Faith", "Grace", "Salvation", "Prayer", "Worship", "Heaven",
    "Resurrection", "Messiah", "Prophet", "Judah", "Righteousness", "Covenant",
    "Commandments", "Scripture", "Kingdom", "Anointing",

    // Conversational Words
    "Hello", "Welcome", "Goodbye", "Thanks", "Please", "Friend", "Love", "Joy",
    "Happy", "Family", "Life", "Peace", "Hope", "Light", "Strong", "Dream",
    "Power", "Win", "Smile", "Fun",

    // Psychology Words
    "Behavior", "Cognition", "Emotion", "Perception", "Memory", "Learning",
    "Personality", "Therapy", "Stress", "Motivation", "Consciousness", "Intelligence",
    "Trauma", "Mindset", "Belief", "Habits", "Self-esteem", "Anxiety", "Depression",
    "Counseling", "Neuroscience",

    // Communication Words
    "Message", "Media", "Signal", "Dialogue", "Feedback", "Conversation", "Language",
    "Listening", "Speaking", "Writing", "Broadcast", "Speech", "Presentation", "Public",
    "Connection", "Information", "Negotiation", "Audience", "Expression", "Tone",

    // Science Words
    "Atom", "Molecule", "Physics", "Chemistry", "Biology", "Astronomy", "Energy",
    "Gravity", "Evolution", "Ecosystem", "Experiment", "Hypothesis", "Observation",
    "Data", "Theory", "Force", "Light", "Matter", "Electron", "Planet", "Galaxy",

    // Government Words
    "Policy", "Legislation", "Democracy", "Republic", "Congress", "Parliament",
    "President", "Election", "Senate", "Vote", "Constitution", "Court", "Justice",
    "Law", "Rights", "Freedom", "Citizen", "State", "Nation", "Budget", "Tax",

    // Music Words
    "Melody", "Harmony", "Rhythm", "Chord", "Note", "Scale", "Tempo", "Pitch",
    "Dynamics", "Composition", "Instrument", "Guitar", "Piano", "Drum", "Bass",
    "Violin", "Flute", "Singer", "Choir", "Orchestra", "Symphony", "Opera",

    // History Words
    "Empire", "Revolution", "War", "Dynasty", "Civilization", "Ancient", "Medieval",
    "Modern", "Renaissance", "Colony", "Monarchy", "Treaty", "Artifact", "Exploration",
    "Archaeology", "Industrial", "Conquest", "Independence", "Victory", "Defeat"
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
