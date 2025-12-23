let h4 = document.querySelector("h4");
let level = 0;
let started = false;
let color = ["red", "green", "yellow", "purple"];
let gamePattern = [];
let userPattern = [];
let button = document.querySelector("button");
let hint = document.getElementById("hint");

button.addEventListener("click", function () {
  hint.classList.add("clr");
  hint.innerText = gamePattern;
  setTimeout(function () {
    hint.classList.remove("clr");
    hint.innerText = "";
  }, 2000);
});

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelup();
  }
});

function levelup() {
  userPattern = [];
  level++;
  h4.innerText = `Level ${level}`;
  let randItem = Math.floor(Math.random() * 3);
  let randColor = color[randItem];
  gamePattern.push(randColor);
  btnFlash(document.querySelector(`.${randColor}`));
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 200);
}

function checkSeq(index) {
  if (userPattern[index] === gamePattern[index]) {
    if (userPattern.length == gamePattern.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h4.innerText = `Game Over!! Press any key to start`;
    level = 0;
    gamePattern = [];
    started = false;
  }
}

function btnpress() {
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  userPattern.push(userColor);
  checkSeq(userPattern.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
console.log(allbtns);
for (let btn of allbtns) {
  btn.addEventListener("click", btnpress);
}
