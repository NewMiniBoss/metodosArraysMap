const desconto = 0.3;

function aplicarDesconto(item) {
    livroAplicadoDesconto = item.map(x => {
        return { ...x, preco: x.preco - (x.preco * desconto) };
    })
    return livroAplicadoDesconto;
}