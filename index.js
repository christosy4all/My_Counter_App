let count = 0;
let savedValues = [];

function increase() {
    count++;
    document.getElementById("count").innerText = count;
}

function decrease() {
    count--;
    document.getElementById("count").innerText = count;
}

function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
}

function save() {
    savedValues.push(count);   // store current count
    document.getElementById("saved").innerText = savedValues.join(" - ");
}

