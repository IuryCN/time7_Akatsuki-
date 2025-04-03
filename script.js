document.getElementById("startGame").addEventListener("click", iniciarJogo);
document.getElementById("resultadoBtn").addEventListener("click", mostrarResultado);

let personagem = [];
let viloes = [];
let forcaPersonagem = 0;
let forcaViloes = 0;

function iniciarJogo() {
    personagem = [];
    viloes = [];
    forcaPersonagem = 0;
    forcaViloes = 0;

    alert("Escolha entre Naruto, Kakashi, Sasuke, Hinata ou Sakura");

    for (let i = 0; i < 3; i++) {
        let escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1));
        personagem.push(escolhaPersonagem);
        forcaPersonagem += Math.floor(Math.random() * 10) + 1;
    }

    let viloesPossiveis = ["Madara", "Obito", "Sasori", "Pain", "Danzou", "Orochimaru", "Kaguya Otsutsuki", "Hidan", "Deidara", "Kabuto"];

    for (let i = 0; i < 3; i++) {
        let indiceAleatorio = Math.floor(Math.random() * viloesPossiveis.length);
        viloes.push(viloesPossiveis[indiceAleatorio]);
        forcaViloes += Math.floor(Math.random() * 10) + 1;
    }

    document.getElementById("informacoesJogador").textContent = "Seu time: " + personagem.join(", ") + " - Força: " + forcaPersonagem;
    document.getElementById("informacoesComputador").textContent = "Time vilão: " + viloes.join(", ") + " - Força: " + forcaViloes;

    document.getElementById("resultadoBtn").style.display = "block";
}

function mostrarResultado() {
    let resultadoFinal = "";

    if (forcaPersonagem > forcaViloes) {
        resultadoFinal = "O time 7 venceu! Sua força foi " + forcaPersonagem + " e a força dos vilões foi " + forcaViloes;
    } else if (forcaPersonagem < forcaViloes) {
        resultadoFinal = "Os vilões venceram! Eles tinham " + forcaViloes + " de força, enquanto seu time ficou com " + forcaPersonagem;
    } else {
        resultadoFinal = "Empate! Ambos os times ficaram sem chakra suficiente! Força do time: " + forcaPersonagem + ", Força dos vilões: " + forcaViloes;
    }

    document.getElementById("resultadoFinal").textContent = resultadoFinal;
}
