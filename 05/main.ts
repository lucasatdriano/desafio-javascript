interface Aluno {
  nome: string; 
}

interface SalaDeAula {
  classe: string; 
  possuiMonitoria: boolean;
  professor: string;
  monitor?: string;
  alunos: Aluno[];
}

const mockupSalasDeAula: SalaDeAula[] = [
  {  
    classe: "1-A",
    possuiMonitoria: true,
    professor: "Márcia",
    monitor: "Vanessa",
    alunos: [
      { nome: "Guilherme" },
      { nome: "Lucas" },
      { nome: "Julia" },
      { nome: "Evellyn" },
    ],
  },
  {  
    classe: "1-B",
    possuiMonitoria: false,
    professor: "Amanda",
    alunos: [
      { nome: "Rodrigo" },
      { nome: "Kauan" },
      { nome: "Pedro" },
      { nome: "Beatriz" },
    ],
  },
  {  
    classe: "1-C",
    possuiMonitoria: true,
    professor: "Márcia",
    monitor: "Rogério",
    alunos: [
      { nome: "Amanda" },
      { nome: "Paulo" },
      { nome: "Yasmin" },
      { nome: "Giovanna" },
    ],
  },
];

function obterSalaDeAula(salaDeAula: SalaDeAula) {
  const { possuiMonitoria, monitor, ...salaDeAulaCompleta } = salaDeAula
  
  if (!possuiMonitoria) {
    return salaDeAulaCompleta;
  }

  return { ...salaDeAulaCompleta, monitor }
}

console.log(obterSalaDeAula(mockupSalasDeAula[0]))
console.log(obterSalaDeAula(mockupSalasDeAula[1]))
console.log(obterSalaDeAula(mockupSalasDeAula[2]))