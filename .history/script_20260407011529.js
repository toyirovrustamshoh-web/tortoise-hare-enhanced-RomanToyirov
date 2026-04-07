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
