// Acho que é melhor completar o código abaixo:

const btnAdicionar = document.getElementById("btn-adicionar");
const duracaoTotal = document.getElementById("duracao-total");
const inputNomeMusica = document.getElementById("txtmusica");
const inputDuracaoMusica = document.getElementById("txtduracao");
const lista = document.querySelector(".list");

const MUSICAS = [];

function atualizarTotal(){
    let tempoMusicaAtual = 0;
    MUSICAS.forEach((item)=>{
        tempoMusicaAtual+= parseFloat(item.tempo);
    })
    
    somaTempoTotal = 0;
    MUSICAS.forEach((item)=>{
        somaTempoTotal += parseFloat(item.tempo);
    })
    somaTempoTotalMin = somaTempoTotal/60;
    somaTempoTotalMinFormatado = somaTempoTotalMin.toFixed(2);
    
    
    duracaoTotal.innerHTML = `${somaTempoTotalMinFormatado} min`;
}

function listarMusicas(){
    lista.innerHTML = "";
    MUSICAS.forEach(function(objeto, posicao){
        lista.innerHTML +=
        `
        <div class="item">
        <span class="name">${objeto.nome}</span>
        <span class="duration">${objeto.tempo}s</span>
        <a href="javascript:removerMusica(${posicao})">
        <img src="img/trash.svg" alt="remove music">
        </a>
        </div>
        `      
    })
}

btnAdicionar.addEventListener("click", ()=>{
    let nomeMusica = inputNomeMusica.value;
    let tempoMusica = inputDuracaoMusica.value;
    MUSICAS.push({
        nome: nomeMusica,
        tempo: tempoMusica
    })
    listarMusicas();
    atualizarTotal();
});

function removerMusica(posicao){
    MUSICAS.splice(posicao, 1);
    console.log(posicao);
    listarMusicas();
    atualizarTotal();
}