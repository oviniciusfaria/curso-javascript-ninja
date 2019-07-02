/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var any = [1, 'JS', null, {a: 1}, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunc(arr){
  return arr;
}
  
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunc()[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function funcao(arr = [], index){
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr = [1,true,null,45.5, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
funcao(arr, 0) // 1
funcao(arr, 1) // true
funcao(arr, 2) // null
funcao(arr, 3) // 45.5
funcao(arr, 4) // true

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
  var dataBooks = {
    "Ovelhas Eletricas": {
      quantidadePaginas: 145,
      autor: 'Philip',
      editora: 'Alef'
    },
    "A Cabana": {
      quantidadePaginas: 349,
      autor: 'Josef',
      editora: 'Intrínseca'
    },
    "Miracle Morning": {
      quantidadePaginas: 208,
      autor: 'Hal Elrod',
      editora: 'Cia das Letras'
    }, 
  };  
  
  if(nomeLivro == null) return dataBooks;
  return dataBooks[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro A Cabana tem "+ book("A Cabana").quantidadePaginas +" páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro A cabana é " + book("A Cabana").autor + ".")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro A Cabana foi publicado pela editora "+ book("A Cabana").editora +".")
