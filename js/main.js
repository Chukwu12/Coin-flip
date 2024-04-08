let coin = document.querySelector('.coin');
let flipCoin = document.querySelector('#flip-coin')
let reset = document.querySelector('.reset')

let heads = 0;
let tails = 0;

flip-coin.addEventListener(click, () => {
 let i = Math.floor(Math.random() * 2);

 coin.style.animation = 'none';

 if(i) {
    setTimeout(function(){
        coin.style.animation = 'spin-heads 3s forwards';
 }, 100);
 heads++;
 }

 else {
    setTimeout(function(){
        coin.style.animation = 'spin-tails 3s forwards';
 }, 100);
 tails++;
 }
 setTimeout(updateStats, 3000); 
   disablebutton(); 
});


function updateStates() {
    document.querySelector('#head-count').textContent = `Heads: ${heads}`
    document.querySelector('#tail-count').textContent = `Tails: ${tails}`
}
    
