/*Simple Function

function nice (name) {
    console.log("Hey " + name + " you are nice");
    console.log("Hey " + name + " you car is wondreful");
    console.log("Hey " + name + " your tshirt is great");
    console.log("Hey " + name + " you are smart");
   
}

nice ("Ajaz")

*/


/* Sum Function

function sum (a,b){
    console.log(a + b);
}

sum (3,5)

*/

/* Return function

function sum (a,b){
    return a+b;
}

result1 = sum(2,8);
result2 = sum(12,18);

console.log("Sum of numbers are", result1, result2);

*/

/* Real life example

function makePizza(){
    let pizza = "Cheese pizza";
    return pizza;
}

let myOrder = makePizza();
console.log("Order Received:", myOrder);

*/



/*
🧠 Question:

Ek function likho multiply(a, b) jo do numbers ko multiply kare
aur result return kare (print nahi).

Phir us function se 3 results nikalo:

2 * 3

5 * 4

10 * 2

Aur sab results ko ek hi line me print karo.

📝 Expected Output:
Multiplications are 6 20 20?



function multiply (a, b){
    let result = a * b;
    return result;
}

let result1 = multiply(2, 3);
let result2 = multiply(5, 4);
let result3 = multiply(10, 2);

console.log("Multiplications are", result1, result2, result3);
*/


// Arrow Function

const func = (x) => {
    console.log("I am arrow function", x);
}

func(12);
func(16);
func(19);