function calcularFatorial(value: number): number {
  if (value <= 1) {
    return 1
  }

  return value * calcularFatorial(value - 1) 
}

function converterStringParaFatorial(text: string) {
  const textArray = text.trim().toUpperCase().split("");

  const fatorialTotal = calcularFatorial(textArray.length);

  const arrayUnica = [...new Set(textArray)];

  let divisorRepeticoes = 1;
  arrayUnica.forEach((letra) => {
    const quantidade = textArray.filter((l) => l === letra).length
    divisorRepeticoes *= calcularFatorial(quantidade)
  })

  const resultadoReal = fatorialTotal / divisorRepeticoes;

  return `Palavra: "${text}" | Letras: ${text.length} | Combinações Reais: ${resultadoReal}`;
}


console.log(converterStringParaFatorial("Cola"))
console.log(converterStringParaFatorial("Bala"))
console.log(converterStringParaFatorial("Baba"))