let colorBoxs = document.querySelectorAll(".colorBox");
let targetColor = document.querySelector(".rgb");
let messageDisplay = document.querySelector(".message");
let startBtn = document.querySelector(".startBtn");
let easyBtn = document.querySelector(".easyBtn");
let hardBtn = document.querySelector(".hardBtn");
let h1Bg = document.querySelector("h1");
var maxBox = colorBoxs.length;
let colorList = randomColorGenerator(maxBox);
let pickedColor = setTargetColor(maxBox);

easyBtn.addEventListener("click", function () {
  maxBox = 3;
  setBoxColor();
  setTargetColor(maxBox);
});

targetColor.textContent = pickedColor.toUpperCase();

function randomColorGenerator(len) {
  let colors = [];
  for (let i = 0; i < len; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    colors[i] = "rgb(" + r + ", " + g + ", " + b + ")";
  }
  return colors;
}

function setBoxColor() {
  for (let i = 0; i < maxBox; i++) {
    colorBoxs[i].style.backgroundColor = colorList[i];
  }
}
function setTargetColor(len) {
  let i = Math.floor(Math.random() * len);
  return colorList[i];
}

function setAllSameColor(color) {
  for (let i = 0; i < maxBox; i++) {
    colorBoxs[i].style.backgroundColor = color;
  }
}

setBoxColor();
setTargetColor(maxBox);

for (let i = 0; i < maxBox; i++) {
  colorBoxs[i].addEventListener("click", function () {
    if (this.style.backgroundColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      setAllSameColor(pickedColor);
      startBtn.textContent = "RESTART";
      h1Bg.style.backgroundColor = this.style.backgroundColor;
    } else {
      messageDisplay.textContent = "Try Again!";
      this.style.backgroundColor = "rgb(0,0,0)";
    }
  });
}

// first.addEventListener("click", function () {
//   this.classList.add("non-display");
// });
