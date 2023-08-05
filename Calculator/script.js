let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    document.getElementById('display').value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(currentExpression);
        currentExpression = String(result);
        document.getElementById('display').value = currentExpression;
    } catch (error) {
        currentExpression = '';
        document.getElementById('display').value = 'Error';
    }
}
