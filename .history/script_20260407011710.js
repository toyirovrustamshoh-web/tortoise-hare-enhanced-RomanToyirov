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

function render() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.classList.remove("tortoise", "hare", "both");
        cell.textContent = "";
    });

    const tCell = document.querySelector(`.cell[data-index="${tortoisePos}"]`);
    const hCell = document.querySelector(`.cell[data-index="${harePos}"]`);

    if (tCell === hCell) {
        tCell.classList.add("both");
        tCell.textContent = "AUCHCHCH!";
    } else {
        tCell.classList.add("tortoise");
        tCell.textContent = "T";

        hCell.classList.add("hare");
        hCell.textContent = "H";
    }
}

function moveTortoise() {
    const roll = Math.floor(Math.random() * 10) + 1;

    if (roll <= 5) {
        tortoisePos += 3;
    } else if (roll <= 7) {
        tortoisePos -= 6;
    } else {
        tortoisePos += 1;
    }

    if (tortoisePos < 1) tortoisePos = 1;
    if (tortoisePos > 70) tortoisePos = 70;
}

function moveHare() {
    const roll = Math.floor(Math.random() * 10) + 1;

    if (roll <= 2) {
    } else if (roll <= 4) {
        harePos += 9;
    } else if (roll === 5) {
        harePos -= 12;
    } else if (roll <= 8) {
        harePos += 1;
    } else {
        harePos -= 2;
    }

    if (harePos < 1) harePos = 1;
    if (harePos > 70) harePos = 70;
}

// Check winner + update scoreboard
function checkWinner() {
    if (tortoisePos >= 70 && harePos >= 70) {
        message.textContent = "It's a tie!";
        return true;
    }

    if (tortoisePos >= 70) {
        tortoiseWins++;
        tortoiseScoreEl.textContent = tortoiseWins;
        message.textContent = "Tortoise wins!";
        return true;
    }

    if (harePos >= 70) {
        hareWins++;
        hareScoreEl.textContent = hareWins;
        message.textContent = "Hare wins!";
        return true;
    }

    return false;
}

// One race step
function raceStep() {
    moveTortoise();
    moveHare();
    render();

    if (checkWinner()) {
        clearInterval(raceInterval);
        startBtn.disabled = false;
    }
}

// Start race
function startRace() {
    tortoisePos = 1;
    harePos = 1;
    message.textContent = "And they're off!";
    render();

    startBtn.disabled = true;
    raceInterval = setInterval(raceStep, 300);
}

// Initialize
createTrack();
render();
startBtn.addEventListener("click", startRace);
