const listaSelecaoBotao = document.querySelectorAll(".botao");

listaSelecaoBotao.forEach(botao => {
    botao.addEventListener("click", () => {
        esconderCartao();

        const idBotaoSelecionado = mostrarCartaoSelecionado(botao);

        desativarBotaoNaListagem();
        ativarBotaoSelecionadoNaListagem(idBotaoSelecionado);
    });
});

function ativarBotaoSelecionadoNaListagem(idBotaoSelecionado) {
    const botaoSelecionadoNaListagem = document.getElementById(idBotaoSelecionado);
    botaoSelecionadoNaListagem.classList.add("ativo");
}

function desativarBotaoNaListagem() {
    const botaoAtivoNaListagem = document.querySelector(".ativo");
    if (botaoAtivoNaListagem) {
        botaoAtivoNaListagem.classList.remove("ativo");
    }
}

function mostrarCartaoSelecionado(botao) {
    const idBotaoSelecionado = botao.attributes.id.value;
    const idDoCartaoParaAbrir = "cartao-" + idBotaoSelecionado;
    const cartaoParaAbrir = document.getElementById(idDoCartaoParaAbrir);
    
    if (cartaoParaAbrir) {
        cartaoParaAbrir.classList.add("aberto");
    }
    
    return idBotaoSelecionado;  // Corrigi para retornar o id correto
}

function esconderCartao() {
    const cartaoAberto = document.querySelector(".aberto");
    if (cartaoAberto) {
        cartaoAberto.classList.remove("aberto");
    }
}