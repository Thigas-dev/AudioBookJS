const PlayPause = document.getElementById("play-pause")
const Btprox = document.getElementById("prox")
const Btant = document.getElementById("voltar")
const nomeCap = document.getElementById("cap")
const audioCap = document.getElementById("AudioCap")

const numCap = 10;
let tocando = 0;
let CapAtual = 1

function playfaixa() {
    audioCap.play();
    PlayPause.classList.remove("bi-play-circle");
    PlayPause.classList.add('bi-pause-circle');
}


function pausarfaixa() {
    audioCap.pause();
    PlayPause.classList.remove('bi-pause-circle');
    PlayPause.classList.add("bi-play-circle");
}

function playepause() {
    if (tocando === 0 ) {
        playfaixa();
        tocando = 1;
    } else {
        pausarfaixa();
        tocando = 0;
    }
}

function trocarNome(){
    nomeCap.innerText = "Capítulo" +" "+ CapAtual;
}

function proxFaixa(){
    if (CapAtual === numCap) {
        CapAtual = 1;
    } else {
        CapAtual = CapAtual + 1
    }
    audioCap.src = "./books/dom-casmurro/" + CapAtual + ".mp3";
    playfaixa();
    tocando = 1;
    trocarNome();
}

function antFaixa(){
    if (CapAtual === 1) {
        CapAtual = numCap;
    } else {
        CapAtual = CapAtual - 1
    }
    audioCap.src = "./books/dom-casmurro/" + CapAtual + ".mp3";
    playfaixa();
    tocando = 1;
    trocarNome();
}

PlayPause.addEventListener("click", playepause);
Btprox.addEventListener("click", proxFaixa);
Btant.addEventListener("click", antFaixa);
