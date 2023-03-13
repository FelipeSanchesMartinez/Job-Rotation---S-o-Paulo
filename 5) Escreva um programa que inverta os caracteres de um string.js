const prompt = require('prompt-sync')();
let texto = prompt("Escreva um texto: ") 
let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoInvertido += texto[i]; 
}

console.log(textoInvertido); 
