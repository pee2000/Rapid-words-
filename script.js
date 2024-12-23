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
