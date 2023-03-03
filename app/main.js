(() => {
    let livros = [];
    const API = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

    async function BuscaLivroAPI() {
        const resposta = await fetch(API);
        livros = await resposta.json();
        console.table(livros);
    }

    BuscaLivroAPI();
})();