let maxBox;
let colorList = [];
let pickedColor;
let colorBoxs = document.querySelectorAll(".Box");
let targetColor = document.querySelector(".rgb");
let messageDisplay = document.querySelector(".message");
let startBtn = document.querySelector(".startBtn");
let modeBtn = document.querySelectorAll(".mode");
let h1Bg = document.querySelector("h1");

init();

function init() {
  maxBox = 6;
  colorList = randomColorGenerator(maxBox);
  pickedColor = setTargetColor(maxBox);
  targetColor.textContent = pickedColor;
  setBoxColor(maxBox);
  reset();
  clickBox();
  setMode();
}

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

function setBoxColor(len) {
  for (let i = 0; i < len; i++) {
    colorBoxs[i].style.backgroundColor = colorList[i];
  }
}

function clickBox() {
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
}

function setAllSameColor(color) {
  for (let i = 0; i < maxBox; i++) {
    colorBoxs[i].style.backgroundColor = color;
  }
}

function reset() {
  colorList = randomColorGenerator(maxBox);
  pickedColor = setTargetColor(maxBox);
  startBtn.textContent = "NEW COLOR";
  h1Bg.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  setBoxColor(maxBox);
  for (var i = 0; i < colorBoxs.length; i++) {
    if (colorList[i]) {
      colorBoxs[i].style.display = "block";
      colorBoxs[i].style.background = colorList[i];
    } else {
      colorBoxs[i].style.display = "none";
    }
  }
  startBtn.addEventListener("click", function () {
    this.textContent = "NEW COLOR";
    h1Bg.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    colorList = randomColorGenerator(maxBox);
    pickedColor = setTargetColor(maxBox);
    targetColor.textContent = pickedColor;
    setBoxColor(maxBox);
  });
}

function setTargetColor(len) {
  let i = Math.floor(Math.random() * len);
  return colorList[i];
}

function setMode() {
  for (let i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function () {
      modeBtn[0].classList.remove("selected");
      modeBtn[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "EASY" ? (maxBox = 3) : (maxBox = 6);
      reset();
    });
  }
}
