import { Book, GerenciadorBiblioteca } from "../01/main"

interface LivroTécnicoData extends Book {
  edicao: string;
}

export class Livro implements Book {
  titulo: string;
  autor: string;
  ISBN: string;
  quantidade: number;

  constructor(livro: Book) {
    this.titulo = livro.titulo;
    this.autor = livro.autor;
    this.ISBN = livro.ISBN;
    this.quantidade = livro.quantidade;
  }
}

class LivroTécnico extends Livro {
  edicao: string;
  
  constructor(livro: LivroTécnicoData) {
    super(livro);
    this.edicao = livro.edicao;
  }
  
  obterEdição() {
    return `A versão atual do livro ${this.titulo} é ${this.edicao}`
  }
}

const biblioteca = new GerenciadorBiblioteca();

const livroTecnico = new LivroTécnico({    
  titulo: "Ainda Estou Aqui",
  autor: "Fernanda Torres",
  ISBN: "Não sei oq é",
  quantidade: 7,
  edicao: "Limitada",
});

async function testarLivroTecnico() {
  try {
    console.log("=== 1. Dados da Edição ===");
    console.log(livroTecnico.obterEdição());

    console.log("\n=== 2. Cadastrando o livro técnico no gerenciador ===");
    biblioteca.createBook(livroTecnico);

    console.log("\n=== 3. Buscando do gerenciador ===");
    const busca = await biblioteca.getBook("Ainda Estou Aqui");
    console.log(busca);

  } catch (error: any) {
    console.error("Erro:", error.message);
  }
}

testarLivroTecnico();