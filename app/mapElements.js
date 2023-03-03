const desconto = 0.3;

function aplicarDesconto(item) {
    livroAplicadoDesconto = item.map(livro => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto) };
    })
    return livroAplicadoDesconto;
}