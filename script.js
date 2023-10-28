"using strict";
var balance = 100;
let bet = 10;
let spin = 0;
const spinner = document.querySelector(".spinner");
spinner.addEventListener("click", function () {
  spin = Math.floor(Math.random() * 36 + 1);
});
