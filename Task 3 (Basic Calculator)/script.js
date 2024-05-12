
let result = document.getElementById('output');

function EnterNumber(number) {
  result.value = result.value + number;
}

function EnterOperator(operator) {
  result.value = result.value + operator;
}

function Equal() {
  try {
    let output = eval(result.value);
    result.value = output;
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResults() {
  result.value = '';
}
