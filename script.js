function add() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Answer: " + (a + b);
}

function sub() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Answer: " + (a - b);
}

function mul() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Answer: " + (a * b);
}

function div() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (b === 0) {
        document.getElementById("result").innerHTML = "Answer: Cannot divide by zero";
    } else {
        document.getElementById("result").innerHTML = "Answer: " + (a / b);
    }
}