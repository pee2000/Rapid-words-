// JavaScript code remains the same, referring to 'background-music' for playing the music.
const backgroundMusic = document.getElementById("background-music");

// Background music control within startGame() and endGame() functions:
function startGame() {
    backgroundMusic.play();
    backgroundMusic.volume = 0.5;
    // Other game start code...
}

function endGame() {
    backgroundMusic.pause();
    // Other game end code...
}
