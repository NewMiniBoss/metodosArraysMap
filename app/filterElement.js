const allFilter = document.querySelectorAll('[categoria]');

allFilter.forEach(categoria => {
    categoria.addEventListener('click', () => {
        filtrarCategoria(categoria.value);
    })
})

function filtrarCategoria(categoria) {
    let livrosFiltrados = livros.filter(x => x.categoria == categoria);
    console.table(livrosFiltrados);
    exibirLivros(livrosFiltrados);
}  