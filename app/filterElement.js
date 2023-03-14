const allFilter = document.querySelectorAll('[categoria]');

allFilter.forEach(categoria => {
    categoria.addEventListener('click', () => {
        filtrarCategoria(categoria.value);
    })
})

function filtrarCategoria(categoria) {
    let livrosFiltrados = categoria == `disponível` ? disponiveis() : filtraCategoria();
    exibirLivros(livrosFiltrados);

    function filtraCategoria() {
        totalPreco.innerHTML = ``;
        return livros.filter(x => x.categoria == categoria);
    }

    function disponiveis() {
        totalPreco.innerHTML =
            `
                <div class="livros__disponiveis">
                    <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
                </div>
            `;
        return livros.filter(x => x.quantidade > 0);
    }
}