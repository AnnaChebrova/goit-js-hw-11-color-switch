const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const body = document.body;
const DELAY = 1000;
let intervalId = null;

btnStart.addEventListener('click', onColorChange);

function onColorChange(e) {
  e.target.disabled = true;
intervalId = setInterval(() => {
const index = randomIntegerFromInterval(0, colors.length - 1);
body.style.background = colors[index];
}, DELAY);
}

btnStop.addEventListener('click', onColorChangeStop);

function onColorChangeStop() {
  btnStart.disabled = false;
  clearInterval(intervalId);
}
