const mockupEstacoes = [
  'Estação Itapevi',
  'Estação Osasco',
  'Estação Altino',
  'Estação Leopoldina',
  'Estação Lapa',
  'Estação Barra Funda',
  'Estação Brás',
  'Estação Luz',
  'Estação Grajaú',
]

function* proximaEstacao(estacoes: string[]) {
  for (const estacao of estacoes ) {
    yield estacao
  }

  return 'Chegamos na última estação do itinerário'
}


function UltimaEstacao(iterator: IteratorResult<string>) {
  if (iterator.done) {
    return `${iterator.value}`
  }

  return `Estação atual: ${iterator.value}`
}

const iterator = proximaEstacao(mockupEstacoes)

console.log(UltimaEstacao(iterator.next()))
console.log(UltimaEstacao(iterator.next()))
console.log(UltimaEstacao(iterator.next()))
console.log(UltimaEstacao(iterator.next()))
console.log(UltimaEstacao(iterator.next()))
console.log(UltimaEstacao(iterator.next()))
console.log(UltimaEstacao(iterator.next()))
console.log(UltimaEstacao(iterator.next()))
console.log(UltimaEstacao(iterator.next()))
console.log(UltimaEstacao(iterator.next()))
