const fs = require('fs');


const faturamentoMensal = JSON.parse(fs.readFileSync('faturamento.json'));

let menorFaturamento = Infinity;
let maiorFaturamento = -Infinity;


let totalFaturamento = 0;
let diasComFaturamento = 0;


for (let i = 0; i < faturamentoMensal.length; i++) {
  const faturamentoDiario = faturamentoMensal[i];


  if (faturamentoDiario > 0) {

    if (faturamentoDiario < menorFaturamento) {
      menorFaturamento = faturamentoDiario;
    }
    if (faturamentoDiario > maiorFaturamento) {
      maiorFaturamento = faturamentoDiario;
    }


    totalFaturamento += faturamentoDiario;
    diasComFaturamento++;
  }
}


const mediaMensal = totalFaturamento / diasComFaturamento;


let diasAcimaDaMedia = 0;
for (let i = 0; i < faturamentoMensal.length; i++) {
  const faturamentoDiario = faturamentoMensal[i];


  if (faturamentoDiario > 0) {
    if (faturamentoDiario > mediaMensal) {
      diasAcimaDaMedia++;
    }
  }
}


console.log("O menor valor de faturamento diário foi de R$" + menorFaturamento.toFixed(2));
console.log("O maior valor de faturamento diário foi de R$" + maiorFaturamento.toFixed(2));
console.log("Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: " + diasAcimaDaMedia);
