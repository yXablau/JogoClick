let pontos = 0;
let valorClique = 1;
let upgrades = 0;
let cntUpgrade1 = 0;
let cntUpgrade2 = 0;
let cntUpgrade3 = 0;
let custo1 = 10;
let custo2 = 50;
let custo3 = 100;
let ganhou = false;
const botaoReiniciar = document.getElementById("botaoReiniciar");
const pontosTexto = document.getElementById("pontos");
const valorCliqueTexto = document.getElementById("valorClique");
const upgradesTexto = document.getElementById("upgrades");
const mensagem = document.getElementById("mensagem");
const botaoClique = document.getElementById("botaoClique");
const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const upgrade3 = document.getElementById("upgrade3");
const custo1Texto = document.getElementById("custo1");
const custo2Texto = document.getElementById("custo2");
const custo3Texto = document.getElementById("custo3");
const contaUpgrade1 = document.getElementById("cntUpgrades1")
const contaUpgrade2 = document.getElementById("cntUpgrades2")
const contaUpgrade3 = document.getElementById("cntUpgrades3")
function atualizarTela() {
    pontosTexto.textContent = pontos;
    valorCliqueTexto.textContent = valorClique;
    upgradesTexto.textContent = upgrades;
    custo1Texto.textContent = custo1;
    custo2Texto.textContent = custo2;
    custo3Texto.textContent = custo3;
    contaUpgrade1.textContent = cntUpgrade1;
    contaUpgrade2.textContent = cntUpgrade2;
    contaUpgrade3.textContent = cntUpgrade3;
    if (ganhou == false && pontos >= 500) {
        mensagem.textContent = "🏆 Você venceu o jogo!";
        ganhou = true;
        let continua = confirm("🏆 Você venceu!\n\nOK = Continuar jogando\nCancelar = Reiniciar");
        if (continua == false) {
            reiniciaJogo();
        }
    }
}
function reiniciaJogo(){
    window.location.reload();
}
botaoClique.addEventListener("click", () => {
    pontos += valorClique;
    atualizarTela();
});
botaoReiniciar.addEventListener("click",() =>{
    reiniciaJogo()
})
upgrade1.addEventListener("click", () => {
    if (pontos >= custo1) {
        pontos -= custo1;
        valorClique += 1;
        upgrades++;
        custo1 += 5;
        cntUpgrade1++
        atualizarTela();
    } else {
        alert("Pontos insuficientes!");
    }
});
upgrade2.addEventListener("click", () => {
    if (pontos >= custo2) {
        pontos -= custo2;
        valorClique += 5;
        upgrades++;
        cntUpgrade2++
        custo2 += 20;  
        atualizarTela();
    } else {
        alert("Pontos insuficientes!");
    }
});
upgrade3.addEventListener("click", () => {
    if (pontos >= custo3) {
        pontos -= custo3;
        valorClique += 10;
        upgrades++;
        custo3 += 50;
        cntUpgrade3++
        atualizarTela();
    } else {
        alert("Pontos insuficientes!");
    }
});
atualizarTela();