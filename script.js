let equation = '';
const resultElement = document.getElementById('result');

function appendValue(value) {
  equation += value;
  resultElement.value = equation;
}

function calculate() {
  try {
    const result = eval(equation);
    equation = result.toString();
    resultElement.value = result;
  } catch (error) {
    resultElement.value = 'Error';
    equation = '';
  }
}

function clearAll() {
  equation = '';
  resultElement.value = '';
}
