"using strict";
var balance = 100;
let bet = 10;
let spin = 0;
let flag = 0;
var arr = [];
var selected = [];

// bets chosing
const title = document.querySelector(".title");
const allBets = document.querySelectorAll(".b");
const balanceElement = document.querySelector(".winnings");

allBets.forEach(function (i) {
  i.addEventListener("click", function () {
    if (!i.classList.contains("yes")) {
      i.style.border = "4px solid gold";
      i.classList.toggle("yes");
      selected.push(i);
      balance -= 10;
      balanceElement.innerHTML = `<p>Your Balance:${balance}k</p>`;
    } else {
      i.style.border = "1px solid white";
      i.classList.toggle("yes");
      const index = selected.indexOf(i);
      if (index > -1) {
        selected.splice(index, 1);
      }
      balance += 10;
      balanceElement.innerHTML = `<p>Your Balance:${balance}k</p>`;
    }
  });
});

//bet logics

function first12() {
  if (spin <= 12 && spin > 0) {
    balance += 30;
  }
}
function second12() {
  if (spin <= 24 && spin > 12) {
    balance += 30;
  }
}
function third12() {
  if (spin <= 36 && spin > 24) balance += 30;
}
function first18() {
  if (spin <= 18) balance += 20;
}
function second18() {
  if (spin <= 36 && spin > 18) balance += 20;
}
function even() {
  if (spin % 2 == 0) balance += 20;
}
function odd() {
  if (spin % 2 != 0) balance += 20;
}

// spinner

const output = document.querySelector(".output");
const spinner = document.querySelector(".spinner");
spinner.addEventListener("click", function () {
  spin = Math.floor(Math.random() * 36 + 1);

  output.innerHTML = `<p>${spin}</p>`;
  if (spin % 2 == 0) {
    output.style.backgroundColor = "black";
  } else {
    output.style.backgroundColor = "red";
  }

  selected.forEach((i) => {
    if (i.classList.contains("first12")) {
      first12();
    }
    if (i.classList.contains("second12")) {
      second12();
    }
    if (i.classList.contains("third12")) {
      third12();
    }
    if (i.classList.contains("first18")) {
      first18();
    }
    if (i.classList.contains("second18")) {
      second18();
    }
    if (i.classList.contains("even")) {
      even();
    }
    if (i.classList.contains("odd")) {
      odd();
    }
    balanceElement.innerHTML = `<p>Your Balance:${balance}k</p>`;
  });

  allBets.forEach((i) => {
    i.style.border = "1px solid white";
    i.classList.remove("yes");
  });
  selected = [];
  if (balance == 0) {
    title.innerHTML = "you Lost 😂😂";
  }
});
