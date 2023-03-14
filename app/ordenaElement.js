const btnPreco = document.querySelector('[preco]');
btnPreco.addEventListener('click', ordenaPreco);

function ordenaPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivros(livrosOrdenados);
}