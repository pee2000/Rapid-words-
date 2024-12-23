const words = [
    // Biblical Words
    "Abraham", "Moses", "Jesus", "Paul", "David", "Solomon", "Genesis", "Exodus",
    "Revelation", "Disciple", "Faith", "Grace", "Salvation", "Trinity", "Gospel",
    "Jerusalem", "Bethlehem", "Commandments", "Prayer", "Worship", "Heaven",
    "Resurrection", "Messiah", "Apostle", "Epistle", "Prophet", "Judah", "Righteousness",
    "Covenant", "Ark", "Miracle", "Scripture", "Fellowship", "Kingdom", "Anointing",

    // Conversational Words
    "Hello", "Welcome", "Goodbye", "Thanks", "Please", "Friend", "Love", "Joy",
    "Happy", "Family", "Life", "Learn", "Peace", "Hope", "Light", "Work", "Strong",
    "Dream", "Power", "Quick", "Smart", "Game", "Play", "Kind", "Good", "Trust",
    "Fast", "Win", "Smile", "Fun",

    // Psychology Words
    "Behavior", "Cognition", "Emotion", "Perception", "Memory", "Learning",
    "Personality", "Therapy", "Stress", "Motivation", "Consciousness", "Intelligence",
    "Trauma", "Mindset", "Belief", "Habits", "Self-esteem", "Anxiety", "Depression",
    "Counseling", "Neuroscience", "Development", "Psychology", "Behavioral",

    // Communication Words
    "Message", "Media", "Signal", "Dialogue", "Feedback", "Conversation", "Language",
    "Interaction", "Listening", "Speaking", "Writing", "Broadcast", "Speech", "Presentation",
    "Public", "Connection", "Information", "Negotiation", "Audience", "Context",
    "Expression", "Tone", "Gesture", "Verbal", "Nonverbal", "Response", "Argument",
    "Persuasion", "Interpretation",

    // Science Words
    "Atom", "Molecule", "Physics", "Chemistry", "Biology", "Astronomy", "Energy",
    "Gravity", "Evolution", "Ecosystem", "Climate", "Experiment", "Hypothesis",
    "Observation", "Data", "Theory", "Force", "Light", "Matter", "Electron", "Planet",
    "Galaxy", "Cell", "Organism", "Genetics", "Telescope", "Microscope", "Temperature",
    "Pressure", "Density", "Spectrum",

    // Government Words
    "Policy", "Legislation", "Democracy", "Republic", "Congress", "Parliament",
    "President", "Prime", "Minister", "Government", "Election", "Senate", "Vote",
    "Constitution", "Court", "Justice", "Law", "Rights", "Freedom", "Citizen", "State",
    "Nation", "Public", "Budget", "Tax", "Security", "Diplomacy", "Campaign",
    "International", "Defense",

    // Music Words
    "Melody", "Harmony", "Rhythm", "Chord", "Note", "Scale", "Tempo", "Pitch",
    "Dynamics", "Composition", "Instrument", "Guitar", "Piano", "Drum", "Bass",
    "Violin", "Flute", "Singer", "Choir", "Orchestra", "Symphony", "Opera", "Concert",
    "Lyric", "Band", "Song", "Album", "Genre", "Tune", "Beats",

    // History Words
    "Empire", "Revolution", "War", "Dynasty", "Civilization", "Ancient", "Medieval",
    "Modern", "Renaissance", "Colony", "Monarchy", "Treaty", "Artifact", "Exploration",
    "Archaeology", "Industrial", "Era", "Conquest", "Alliance", "Independence", "Victory",
    "Defeat", "Constitution", "Reformation", "Protest", "Battle", "King", "Queen",
    "Legacy", "Discovery", "Trade"
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

function startGame() {
    score = 0;
    time = 15;
    isPlaying = true;
    wordInput.value = "";
    wordInput.focus();
    showWord();
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}

function showWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    wordDisplay.textContent = currentWord;
}

function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    timer.textContent = `Time: ${time}s`;
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        message.textContent = "Game Over!";
        scoreDisplay.textContent = `Score: ${score}`;
    }
}

wordInput.addEventListener("input", () => {
    if (wordInput.value === currentWord) {
        message.textContent = "Correct!";
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        wordInput.value = "";
        showWord();
        time += 2; // Add 2 seconds for each correct answer
    }
});
