export interface Book {
  titulo: string;
  autor: string;
  ISBN: string;
  quantidade: number;
}

export interface Disponibilidade {
  message: string;
  quantidade: number;
}

const mockupBooks: Book[] = [
  {  
    titulo: "O estrangeiro",
    autor: "Camus",
    ISBN: "Não sei oq é",
    quantidade: 15
  },
  {  
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ISBN: "Não sei oq é",
    quantidade: 2
  }, 
  {  
    titulo: "Quarto de despejo",
    autor: "Maria De Jesus",
    ISBN: "Não sei oq é",
    quantidade: 0
  },
  {  
    titulo: "Biografia de Da Vinci",
    autor: "desconhecido",
    ISBN: "Não sei oq é",
    quantidade: 13
  }, 
]

async function getDisponibilidade(book: Book): Promise<Disponibilidade> {  
  if (book.quantidade == 0) {
    return {
      message: "Fora de estoque", 
      quantidade: book.quantidade,
    };
  } else if (book.quantidade < 10 ) {
    return {
      message: "Estoque baixo", 
      quantidade: book.quantidade,
    }
  }

  return {
    message: "Em estoque", 
    quantidade: book.quantidade,
  };
}

async function getBooks() {
  return mockupBooks;
}

async function getBook(titulo: string) {
  const books: Book[] = await getBooks();
  const book: Book | undefined = books.find(book => book.titulo == titulo)
  
  if (!book) {
    throw new Error("Não foi possivel encontrar o livro");
  }

  const disponibilidade = await getDisponibilidade(book)

  return {
    book,
    disponibilidade,
  }
}

async function sellBook(book: Book, vendido: number = 1) {
  if (book.quantidade == 0) {
    throw new Error("Não foi possivel realizar a venda");
  }

  const updateBook = {
    ...book, 
    quantidade: book.quantidade - vendido,
  }

  return updateBook;
}

async function reporBook(book: Book, reposição: number = 5) {
  const updateBook = {
    ...book, 
    quantidade: book.quantidade + reposição,
  }
  

  return updateBook;
}

// async function executarTestes() {
//   console.log("=== 1.1 Testando getBook ===");
//   const resultadoBusca1 = await getBook("O estrangeiro");
//   console.log("Resultado da Busca:", resultadoBusca1);

//   console.log("=== 1.2 Testando getBook ===");
//   const resultadoBusca2 = await getBook("Dom Casmurro");
//   console.log("Resultado da Busca:", resultadoBusca2);

//   console.log("=== 1.3 Testando getBook ===");
//   const resultadoBusca3 = await getBook("Quarto de despejo");
//   console.log("Resultado da Busca:", resultadoBusca3);

//   if (!resultadoBusca1.book) {
//     return
//   }

//   console.log("\n=== 2. Testando sellBook ===");
//   const livroVendido = await sellBook(resultadoBusca1.book);
//   console.log("Livro após a venda:", livroVendido);

//   console.log("\n=== 3. Testando reporBook ===");
//   const livroReposto = await reporBook(livroVendido, 10);
//   console.log("Livro após a reposição:", livroReposto);
// }

export class GerenciadorBiblioteca { 
  constructor() {}
  
  private mockupBooks: Book[] = [
    {  
      titulo: "O estrangeiro",
      autor: "Camus",
      ISBN: "Não sei oq é",
      quantidade: 15
    },
    {  
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      ISBN: "Não sei oq é",
      quantidade: 2
    }, 
    {  
      titulo: "Quarto de despejo",
      autor: "Maria De Jesus",
      ISBN: "Não sei oq é",
      quantidade: 0
    },
  ];

  private async getDisponibilidade(book: Book): Promise<Disponibilidade> {  
    if (book.quantidade === 0) {
      return { message: "Fora de estoque", quantidade: book.quantidade };
    } else if (book.quantidade < 10) {
      return { message: "Estoque baixo", quantidade: book.quantidade };
    }
    return { message: "Em estoque", quantidade: book.quantidade };
  }

  public async getBooks(): Promise<Book[]> {
    return this.mockupBooks;
  }

  public async getBook(titulo: string) {
    const books = await this.getBooks();
    const book = books.find(b => b.titulo === titulo);
    
    if (!book) {
      throw new Error("Não foi possivel encontrar o livro");
    }

    const disponibilidade = await this.getDisponibilidade(book);

    return {
      book,
      disponibilidade,
    };
  }

  public createBook(livro: Book): void {
    this.mockupBooks.push(livro);
  }

  public async sellBook(book: Book, vendido: number = 1): Promise<Book> {
    if (book.quantidade === 0) {
      throw new Error("Não foi possivel realizar a venda");
    }

    const updateBook = {
      ...book, 
      quantidade: book.quantidade - vendido,
    };

    return updateBook;
  }

  public async reporBook(book: Book, reposição: number = 5): Promise<Book> {
    const updateBook = {
      ...book, 
      quantidade: book.quantidade + reposição,
    };
    
    return updateBook;
  }
}

const livro1 = new GerenciadorBiblioteca()

async function rodarMeuTeste() {
  try {
    console.log(await livro1.getBooks());

    livro1.createBook({ 
      titulo: "Biografia de Da Vinci",
      autor: "desconhecido",
      ISBN: "Não sei oq é",
      quantidade: 13,
    })
    
    console.log("Livro Adicionado");
    
    console.log(await livro1.getBooks());
    
    const resultado = await livro1.getBook("Biografia de Da Vinci");
    
    console.log(resultado);
    
  } catch (error: any) {
    console.error("Erro no teste:", error.message);
  }
}

async function main() {
  // console.log("--- INICIANDO TODOS OS TESTES ---");
  
  // await executarTestes(); 
  
  // console.log("\n--- INICIANDO SEGUNDO BLOCO ---");
  
  await rodarMeuTeste(); 
}

main();