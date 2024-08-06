let ans = document.querySelector("#ans");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number")
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const dot = document.querySelector("#dot");

let operand1 = 0;
let operand2 = 0;
let decCount1 = 10;
let decCount2 = 10;
let operation = "";
let firstOp = true;
let resultCal = false;
let secondOp = false;
let dotUsed1 = false;
let dotUsed2 = false;

function calculateAns(op1, op2, operation) {

    let result = 0;

    if (secondOp) {

        op1 = parseFloat(op1);
        op2 = parseFloat(op2);
        console.log(typeof(op1));
        console.log(typeof(op2));


        if (operation == "+") {
            result = op1 + op2;
            console.log(result);
            return result;

        }
        else if (operation == "-") {
            result = op1 - op2;
            console.log(result);
            return result;
        }
        else if (operation == "÷") {
            result = op1 / op2;
            console.log(result);
            return result;
        }
        else if (operation == "×") {
            result = op1 * op2;
            console.log(result);
            return result;
        }
        else {
            return op1;
        }
    }
    else {
        return op1;
    }


}

numbers.forEach((number) => {
    number.addEventListener("click", () => {

        let numb = parseFloat(number.innerText);

        if (resultCal) {
            operand1 = numb;
            console.log(operand1);
            ans.innerText = `${operand1}`;
            operand2 = 0;
            operation = "";
            resultCal = false;
            dotUsed1 = false;
            dotUsed2 = false;
        }
        else if (firstOp) {
            if (dotUsed1) {
                numb %= decCount1;
                operand1 = operand1 + numb;
                decCount1 *= 10;
                console.log(operand1);
                ans.innerText = `${operand1}`;
            }
            else {
                operand1 = operand1 * 10;
                operand1 = operand1 + numb;
                console.log(operand1);
                ans.innerText = `${operand1}`;
            }
        }
        else {
            if (dotUsed2) {
                numb %= decCount2;
                operand2 = operand2 + numb;
                decCount2 *= 10;
                console.log(operand2);
                ans.innerText = `${operand1} ${operation} ${operand2}`;
            }
            else {
                operand2 = operand2 * 10;
                operand2 = operand2 + numb;
                console.log("op2=", operand2);
                ans.innerText = `${operand1} ${operation} ${operand2}`;
                secondOp = true;
            }
        }
    })
})

equal.addEventListener("click", () => {
    let answer = calculateAns(operand1, operand2, operation);
    ans.innerText = answer;
    console.log("result = ", ans.innerText);

    firstOp = true;
    resultCal = true;
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {

        if (resultCal) {
            operand1 = parseFloat(ans.innerText);
            operand2 = 0;
            resultCal = false;
        }

        operation = operator.innerText;
        ans.innerText = `${operand1} ${operation}`;
        firstOp = false;
        dotUsed2 = false;
    })
})

clear.addEventListener("click", () => {
    operand1 = 0;
    operand2 = 0;
    operation = "";
    firstOp = true;
    resultCal = false;
    dotUsed1 = false;
    dotUsed2 = false;
    ans.innerText = "0";
})

dot.addEventListener("click", () => {

    if (firstOp) {
        if (!dotUsed1) {
            console.log("INSIDE 1");
            operand1 += ".";
            console.log(operand1);
            console.log(typeof(operand1));
            dotUsed1 = true;
            ans.innerText = `${operand1}`;
        }
    }
    else if(secondOp)
    {
        if(!dotUsed2) {
            console.log("INSIDE 2");
            operand2 += ".";
            console.log("OP2 = ", operand2);
            dotUsed2 = true;
            ans.innerText = `${operand1} ${operation} ${operand2}`;
        }
    }
    else {
        return;
    }
})
