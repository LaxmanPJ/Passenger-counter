// document.getElementById("count").innerText = 5

// let bonusPoints = 50;
// console.log(bonusPoints);
// function increment(){
    // console.log("The button was clicked")
// }
// function invoke(){
    // console.log(42);
// }
// invoke()
/*let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0;

function increment(){
    document.getElementById("count")
    count += 1;
    countEl.innerText = count
}
function saving(){
    console.log(count)
}
let name = "my name is laxman"
let greeting = "Hi"
let myGreeting = greeting + ", " + name

console.log(myGreeting)
let name = "Laxman"
let greeting = "Welcome back"

let welcomeEl = document.getElementById("welcome-el")
let msg = name + " " + greeting
welcomeEl.innerText = msg

welcomeEl.innerText += " 👋"*/

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0;

function increment(){
    // document.getElementById("count")
    count += 1;
    countEl.textContent = count
}
function saving(){
    let countStr = count + " - "
    // saveEl.innerText += countStr
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}