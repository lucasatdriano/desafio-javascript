interface FilmeData {
  titulo: string;
  direcao: string;
  genero: string;
  anoDeLancamento: number;
  avaliacao: number;
}


class Filme {
  titulo: string;
  direcao: string;
  genero: string;
  anoDeLancamento: number;
  avaliacao: number;

  constructor(filme: FilmeData) {
    this.titulo = filme.titulo;
    this.direcao = filme.direcao;
    this.genero = filme.genero;
    this.anoDeLancamento = filme.anoDeLancamento;
    this.avaliacao = filme.avaliacao;
  }

  obterResumo() {
    return `${this.titulo}, um filme de ${this.genero} dirigido por ${this.direcao} foi lançado em ${this.anoDeLancamento}, recebeu uma avaliação de nota ${this.avaliacao}`
  }
}

const filme1 = new Filme({
  titulo: "Vingadores",
  direcao: "Jason Derulo",
  genero: "Ação e Fantasia",
  anoDeLancamento: 2024,
  avaliacao: 5.0,
})

console.log(filme1)

console.log(filme1.obterResumo())

const filme2 = new Filme({
  titulo: "Divertidamente",
  direcao: "Walt Disney",
  genero: "Animação",
  anoDeLancamento: 2025,
  avaliacao: 4.2,
})

console.log(filme2)

console.log(filme2.obterResumo())