        let displayValue = '';
        let firstNumber = '';
        let operation = '';

        function updateDisplay(value) {
            displayValue += value;
            document.getElementById('display').textContent = displayValue;
        }

        function clearDisplay() {
            displayValue = '';
            document.getElementById('display').textContent = '0';
        }

        function chooseOperation(selectedOperation) {
            firstNumber = displayValue;
            operation = selectedOperation;
            displayValue = '';
        }

        function calculate() {
            const secondNumber = displayValue;
            let result;

            if (operation === '+') {
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
            } else if (operation === '-') {
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
            } else if (operation === '*') {
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
            } else if (operation === '/') {
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
            }

            displayValue = result.toString();
            document.getElementById('display').textContent = displayValue;
        }
