const track = document.getElementById("track");
const message = document.getElementById("message");
const startBtn = document.getElementById("startBtn");

const tortoiseScoreEl = document.getElementById("tortoiseScore");
const hareScoreEl = document.getElementById("hareScore");

let tortoisePos = 1;
let harePos = 1;
let raceInterval = null;
let tortoiseWins = 0;
let hareWins = 0;

function createTrack() {
    track.innerHTML = "";
    for (let i = 1; i <= 70; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        track.appendChild(cell);
    }
}
