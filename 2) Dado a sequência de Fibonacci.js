const prompt = require('prompt-sync')();


function fibo(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return fibo(num - 1) + fibo(num - 2);
  }
}

function pertence(num) {
  for (let i = 0; fibo(i) <= num; i++) {
    if (fibonacci(i) === num) {
      return true;
    }
  }
  return false;
}

let numero = prompt("Informe um número: ");
numero = parseInt(numero);

if (pertence(numero)) {
  console.log(numero + " pertence à sequência de Fibonacci.");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}
