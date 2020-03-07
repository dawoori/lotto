const btn = document.getElementById("btn");
let tmp = 1;
let numbers = [];

var startNum = 1;
var endNum = 45;

function input() {
  var startInput = document.getElementById("start").value;
  var endInput = document.getElementById("end").value;
  startNum = parseInt(startInput);
  endNum = parseInt(endInput);
}

function getindex(c) {
  let d = 0;
  for (d; c = c.previousElementSibling; d++);
  return d
}

function decryptEffect(elem, time) {
  const effect = setInterval(function () {
    elem.innerText = Math.floor(Math.random() * endNum)
  }, 10);
  setTimeout(function () {
    const random = Math.floor(Math.random() * numbers.length);
    clearInterval(effect),
      elem.classList.add("done"),
      elem.innerText = numbers[random],
      numbers.splice(random, 1)
  }, time * 1500 + 1500)
}

function lottery() {
  Array.from(document.querySelectorAll(".ball")).forEach(a => {
    a.classList.remove("done"),
      decryptEffect(a, getindex(a))
  })
}

function clicker() {
  if (numbers.length < 1) {
    clearb();
  }

  tmp === 1 && (
    tmp = 0,
    btn.classList.add("hide"),
    lottery(),
    setTimeout(function () {
      tmp = 1,
        btn.classList.remove("hide")
    }, 1500)
  )
}

function clearb() {
  numbers = [];
  for (var i = startNum; i < endNum + 1; i++) numbers.push(i);
}

btn.addEventListener("click", clicker)