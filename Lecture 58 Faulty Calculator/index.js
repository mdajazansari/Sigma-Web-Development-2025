/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

/*

Faulty Calculator by using IF ELSE LADDER


let a = Number(prompt("Enter first number:"));
let b = prompt("Enter operation: +, -, /, *")
let c = Number(prompt("Enter second number:"));

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

let d = Math.random();
console.log(d);

if (d > 0.1) {

    if (b === "+") {
        console.log("Sum is:", a + c);
    }

    else if (b === "-") {
        console.log("Subtraction is", a - c);
    }

    else if (b === "*") {
        console.log("Multiplication is:", a * c);
    }

    else if (b === "/") {
        console.log("Division is", a / c);
    }

    else {
        console.log("Enter correct operation.")
    }
}

else {
    console.log("Faulty Mode Activated.")
    let e = obj[b];

    if (e === "+") {
        console.log("Multiplication is", a + c);
    }

    else if (e === "-") {
        console.log("Sum is", a - c);
    }

    else if (e === "/") {
        console.log("Subtraction is", a / c);
    }

    else if (e === "**"){
        console.log("Divison is", a ** c);
    }

    else {
        console.log("Enter correct operation.")
    }
}

*/



// Faulty Calculator Using Eval


let a = Number(prompt("Enter first number:"));
let b = prompt("Enter operations +, -, *, /:");
let c = Number(prompt("Enter second number"));


let d = Math.random();
console.log(d);

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}


if(d > 0.1){
    alert(`Result is ${eval(`${a} ${b} ${c}`)}`);
}

else{
   let e = obj[b];
    alert(`Result is ${eval(`${a} ${e} ${c}`)}`);
}

