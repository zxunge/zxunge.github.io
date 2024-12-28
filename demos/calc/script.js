let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid Expression');
        clearDisplay();
    }
}

function calculateSqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        alert('Invalid Expression');
        clearDisplay();
    }
}

function calculateLog() {
    try {
        display.value = Math.log10(eval(display.value));
    } catch (e) {
        alert('Invalid Expression');
        clearDisplay();
    }
}

function insertPi() {
    display.value += Math.PI;
}

// Adding animations for button clicks
document.querySelectorAll('.calculator button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('button-clicked');
        setTimeout(() => {
            button.classList.remove('button-clicked');
        }, 200);
    });
});
