//MISSÃO 1 : SAUDAÇÃO
const saudacao = document.querySelector("#mensagem-topo");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia, Mestre Jedi!" :
    saudacao.textContent =
        hora >18
            ? "Boa noite, Mestre Jedi!"
            : "Boa tarde, Mestre Jedi!"
        
}

//MISSÃO 2 : CARTAO ESCURO

const dark = document.querySelector('#banner-promo');
dark.classList.add("mouseover",() =>{
    dark.backgroundColor = '.destaque-dark'
});

//3 CALCULAR PREÇO
const inputQtd = document.querySelector("#qtd-item");
const precoTexto = document.querySelector("#resultado-preco");

if (inputQtd && precoTexto) {
    inputQtd.addEventListener("input", () => {
        const precoUnitario = 85.0;
        const total = Number(inputQtd.value) * precoUnitario;
        precoTexto.textContent = `R$ ${total.toFixed(2)}`;

    });
}

