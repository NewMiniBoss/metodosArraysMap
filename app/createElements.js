const sectionLivros = document.querySelector('#livros');

function exibirLivros(listaLivros) {
    sectionLivros.innerHTML = '';
    listaLivros.forEach(element => {
        const disponibilidade = element.quantidade > 0 ? `livro__imagens` : `livros__imagens indisponivel`;
        sectionLivros.innerHTML +=
            `
                <div class="livro">
                    <img class="${disponibilidade}" src="${element.imagem}" alt="${element.alt}"/>
                    <h2 class="livro__titulo">${element.titulo}</h2>
                    <p class="livro__descricao">${element.autor}</p>
                    <p class="livro__preco" id="preco">R$${element.preco.toFixed(2)}</p>
    
                    <div class="tags">
                        <span class="tag">${element.categoria}</span>
                    </div>
                </div>
            `
    })
}