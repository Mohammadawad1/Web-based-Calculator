function clearResult() {
            document.getElementById('result').value = "";
        }
        function deleteDigit() {
            var valueResult = document.getElementById('result').value;
            document.getElementById('result').value = valueResult.substring(0, valueResult.length - 1);
        }
        function appendToResult(value) {
            document.getElementById('result').value += value;
        }
        function calculateResult() {

            try {
                result = eval(document.getElementById('result').value);
                if (result === Infinity || result === -Infinity) {
                    throw new Error('Division by zero');
                }
                if (isNaN(result) || !isFinite(result)) {
                    throw new Error('Invalid input or operation');
                }

                document.getElementById('result').value = result.toFixed(2);
            } catch (error) {
                document.getElementById('result').value = error.message;
            }
        }