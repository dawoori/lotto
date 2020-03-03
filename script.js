const btn = document.getElementById("btn");
let tmp = 1, numbers;

function getindex(c) {
    let d = 0;
    for (d; c = c.previousElementSibling; d++);
    return d
}

function decryptEffect(elem, time) {
    const effect = setInterval(function() {
        elem.innerText = Math.floor(Math.random()*44 + 1)
    }, 10);
    setTimeout(function() {
        const random = Math.floor(Math.random() * numbers.length);
        clearInterval(effect),
        elem.classList.add("done"),
        elem.innerText = numbers[random],
        numbers.splice(random, 1)
    },  time * 1000 + 1000)
}

function lottery() {
    Array.from(document.querySelectorAll(".ball")).forEach(a => {
        a.classList.remove("done"),
        decryptEffect(a, getindex(a))
    })
}

btn.addEventListener("click", function() {
    tmp === 1 && (
        numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
        tmp = 0,
        btn.classList.add("hide"),
        lottery(),
        setTimeout(function() {
            tmp = 1,
            btn.classList.remove("hide")
        }, 8500)
    )
})