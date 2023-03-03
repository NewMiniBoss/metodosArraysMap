let livros = [];
const API = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

async function buscaLivroAPI() {
    const resposta = await fetch(API);
    livros = await resposta.json();
    const livrosDesconto = aplicarDesconto(livros);
    exibirLivros(livrosDesconto);
}

buscaLivroAPI();