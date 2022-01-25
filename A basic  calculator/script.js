let num1 =  Math.floor(Math.random()*15) + 1;
let num2 = Math.floor(Math.random()*20) + 1;
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;



let sumEl = document.getElementById('sum-el');

function add () {
let result = num1 + num2;
sumEl.textContent = "sum : " + result;

}

function substract () {
let result = num1 - num2;
sumEl.textContent = "sum : " + result;
}

function divide () {
let result = num1 / num2;
sumEl.textContent = "sum : " + result;
}

function multiply () {
let result = num1 * num2;
sumEl.textContent = "sum : " + result;

}

function refresh() {
    let num1 = location.reload();
    let num2 = location.reload();
}
