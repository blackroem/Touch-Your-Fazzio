const stage = document.querySelectorAll('.stage');
const Fazzio = document.querySelectorAll('.Fazzio');
const papanscore = document.querySelector('.papanscore')

let stagesebelumnya;
let selesai;
let score;

function randomstage(stage) {
    const s = Math.floor(Math.random() * stage.length);
    const sRandom = stage[s]
    if (sRandom == stagesebelumnya) {
        randomstage(stage)
    }
    stagesebelumnya = sRandom
    return sRandom;
}

function randomwaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function munculkanFazzio() {
    const sRandom = randomstage(stage);
    const wRandom = randomwaktu(650, 800)
    sRandom.classList.add('muncul'); 

    setTimeout(() => {
        sRandom.classList.remove('muncul');
        if(!selesai) {
            munculkanFazzio();
        }
    }, wRandom);
}

function mulai() {
    selesai = false;
    score = 0;
    papanscore.textContent = 0;
    munculkanFazzio();
    setTimeout(() => {
        selesai = true;
    }, 30000);
}

function touch() {
    this.parentNode.classList.remove('muncul');
    score++;
    papanscore.textContent = score;
}

Fazzio.forEach(F => {
    F.addEventListener('click', touch);
});
