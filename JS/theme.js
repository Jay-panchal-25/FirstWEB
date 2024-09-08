var burger = document.querySelector(".burger");
var middle = document.querySelector(".middle");
var rightN = document.querySelector(".rightN");

burger.addEventListener("click", () => {
  middle.classList.toggle("hidden");
  rightN.classList.toggle("hidden");
});
