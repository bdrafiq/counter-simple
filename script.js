const number = document.getElementById("number");
const downBtn = document.getElementById("down");
const upBtn = document.getElementById("up");

let counter = 0;

upBtn.addEventListener("click", function () {
    // console.log("hello")
    counter = counter + 1;
    number.innerText = counter;
})

downBtn.addEventListener("click", function () {
    counter = counter - 1;
    number.innerText = counter;
})