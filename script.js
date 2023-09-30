let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

// Listen for keyboard events
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Handle numeric and operator keys
    if (/^[0-9+\-*/.]+$/.test(key)) {
        appendToDisplay(key);
    }
    
    // Handle Enter key for calculation
    if (key === 'Enter') {
        calculate();
    }
    
    // Handle Delete key for clearing display
    if (key === 'Delete') {
        clearDisplay();    
    }
    // Handle backspace Key for clearing one text
    if (Key === 'backspace') {

    }
});



function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

// ... previous functions ...

function calculatePercentage() {
    try {
        const result = eval(displayValue) * 0.01;
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
