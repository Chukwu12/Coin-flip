let coin = document.querySelector('.coin');
let flipCoin = document.querySelector('#flipCoin');
let reset = document.querySelector('#reset');
let lastResult = document.querySelector('#last-result');
let soundToggle = document.querySelector('#soundToggle');
const SOUND_PREF_KEY = 'coin-flip-sound-enabled';

let heads = 0;
let tails = 0;
let audioContext;

function getAudioContext() {
    if (!audioContext) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return null;
        audioContext = new AudioCtx();
    }
    return audioContext;
}

function playTone(frequency, duration, type, volume) {
    if (!soundToggle || !soundToggle.checked) return;

    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
}

function loadSoundPreference() {
    if (!soundToggle) return;

    const stored = localStorage.getItem(SOUND_PREF_KEY);
    if (stored === null) return;

    soundToggle.checked = stored === 'true';
}

function saveSoundPreference() {
    if (!soundToggle) return;
    localStorage.setItem(SOUND_PREF_KEY, String(soundToggle.checked));
}

function playFlipSound() {
    playTone(220, 0.08, 'triangle', 0.03);
    setTimeout(() => playTone(330, 0.09, 'triangle', 0.02), 70);
}

function playResultSound(resultText) {
    if (resultText === 'Heads') {
        playTone(660, 0.12, 'sine', 0.035);
    } else {
        playTone(420, 0.12, 'sine', 0.035);
    }
}

loadSoundPreference();

if (soundToggle) {
    soundToggle.addEventListener('change', saveSoundPreference);
}

flipCoin.addEventListener('click', () => {
 let i = Math.floor(Math.random() * 2);
 let currentResult;

 const ctx = getAudioContext();
 if (ctx && ctx.state === 'suspended') {
    ctx.resume();
 }

 playFlipSound();

 coin.style.animation = 'none';

 if(i) {
    setTimeout(function(){
        coin.style.animation = 'spin-heads 3s forwards';
 }, 100);
 heads++;
 currentResult = 'Heads';
 }

 else {
    setTimeout(function(){
        coin.style.animation = 'spin-tails 3s forwards';
 }, 100);
 tails++;
 currentResult = 'Tails';
 }
 setTimeout(function () {
    updateStates(currentResult);
    playResultSound(currentResult);
 }, 3000);
 disablebutton();
});


function updateStates(resultText) {
    document.querySelector('#head-count').textContent = `Heads: ${heads}`;
    document.querySelector('#tail-count').textContent = `Tails: ${tails}`;
    if (resultText && lastResult) {
        lastResult.textContent = `Last result: ${resultText}`;
    }
}

function disablebutton() {
    flipCoin.disabled = true;
    setTimeout(function() {
       flipCoin.disabled = false; 
    }, 3000);
}

reset.addEventListener('click',() =>{
    coin.style.animation = 'none';
    heads = 0;
    tails = 0;
    updateStates();
    if (lastResult) {
        lastResult.textContent = 'Last result: -';
    }
});