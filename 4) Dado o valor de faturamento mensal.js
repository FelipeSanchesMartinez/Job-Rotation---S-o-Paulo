const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  

  const valorTotal = Object.values(faturamento).reduce((acc, cur) => acc + cur);
  
 
  const percentuais = {};
  for (const estado in faturamento) {
    const valorEstado = faturamento[estado];
    const percentual = (valorEstado / valorTotal) * 100;
    percentuais[estado] = percentual.toFixed(2) + "%";
  }
  
  console.log(percentuais);
  