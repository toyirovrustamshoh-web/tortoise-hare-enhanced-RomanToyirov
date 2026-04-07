const track = document.getElementById("track");
const message = document.getElementById("message");
const startBtn = document.getElementById("startBtn");

const tortoiseScoreEl = document.getElementById("tortoiseScore");
const hareScoreEl = document.getElementById("hareScore");

let tortoisePos = 1;
let harePos = 1;
let raceInterval = null;
