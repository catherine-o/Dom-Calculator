const screen = document.querySelector('#screen');
const htmlButtons = document.getElementsByTagName('span');
const buttons = Array.from(htmlButtons);
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const htmlOperators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equals').textContent;
const clear = document.querySelector('#clear').textContent;
const operators = []
    htmlOperators.forEach(html => {
        operators.push(html.textContent);
    });
let equation = "";

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let pressed = event.target.textContent;
        // console.log("pressed", pressed)
        if (numbers.includes(pressed)) {
            appendNum(pressed)
        } else if (operators.includes(pressed)) {
            if (pressed === equal) {
                evaluate()
            } else if (pressed === clear) {
                reset();
            } else {
                operator(pressed);
            }
        }
    })
});

function appendNum(num) {
    screen.append(num);
    equation += num;
}

function operator(btn) {
    screen.textContent = "";
    if (btn === "x") {
        btn = "*";
    } else if (btn === "÷") {
        btn = "/";
    }
    equation += ` ${btn} `;
}

function evaluate() {
    eval(equation);
    screen.textContent = eval(equation);
}

function reset() {
    screen.textContent = "";
    equation = "";
}